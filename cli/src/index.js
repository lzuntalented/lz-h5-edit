const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const { execSync } = require('child_process');

const packagePath = path.join(__dirname, '../../packages');
const resourcePath = path.join(packagePath, 'resource');
const templatePath = path.join(__dirname, '../template');
const registerPath = path.join(packagePath, 'core');

function copyDir(dir, prefix, cb) {
  const list = fs.readdirSync(dir);
  list.forEach((it) => {
    const srcPath = path.join(dir, it);
    const destPath = path.join(prefix, it);
    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      // console.log(srcPath, destPath, 'dir');
      fs.mkdirSync(destPath);
      copyDir(srcPath, destPath, cb);
    } else {
      const content = fs.readFileSync(srcPath, { encoding: 'utf-8' });
      const result = cb ? cb(content.toString()) : content.toString();
      fs.writeFileSync(destPath, result);
      // console.log('file');
    }
  });
}

function register(dirName, componentName) {
  const registerIndex = path.join(registerPath, 'src', 'index.js');
  let registerContent = fs.readFileSync(registerIndex, { encoding: 'utf8' }).toString();
  // const offset = registerContent.match(/registerComponent/g).length + 10;
  const matchs = registerContent.match(/\/\*\* register slot (.*) \*\//);
  let offset = 30;
  if (matchs && matchs.length > 1) {
    // console.log(matchs);
    offset = +matchs[1];
  }
  registerContent = registerContent.replace(/\/\*\* register slot (.*) \*\//, `/** register slot ${offset + 1} */`);
  // 自动导入组件
  const importStr = `import ${dirName} from '@lzshow/resource-${componentName}';`;
  fs.writeFileSync(registerIndex, `${importStr}
  ${registerContent}
  registerComponent('${offset}', ${dirName});
  `);

  // 更新导入依赖
  const registerPackage = path.join(registerPath, 'package.json');
  const packageContent = fs.readFileSync(registerPackage, { encoding: 'utf8' }).toString();
  fs.writeFileSync(registerPackage, packageContent.replace('"dependencies": {', `"dependencies": {
    "@lzshow/resource-${componentName}": "^0.0.1",`));
  return offset;
}

function insertPreviewNode(uniqueName) {
  const insertPath = path.join(packagePath, 'design/src/components/Resource/components/Node/index.js');
  const insertContent = fs.readFileSync(insertPath, { encoding: 'utf8' }).toString();
  const ret = insertContent.replace(/(\/\*\* previewList slot \*\/)/, `/** previewList slot */
  '${uniqueName}',`);
  fs.writeFileSync(insertPath, ret);
}

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'componentName',
      message: '请输入组件名称',
      validate(input) {
        if (!input || input.trim() === '') {
          return false;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'displayName',
      message: '请输入组件在层级显示名称',
      validate(input) {
        if (!input || input.trim() === '') {
          return false;
        }
        return true;
      },
    },
    {
      type: 'list',
      name: 'isAutoRegister',
      message: '是否自动注册组件',
      choices: [
        {
          key: 'y',
          name: '是',
          value: 'y',
        },
        {
          key: 'n',
          name: '否',
          value: 'n',
        },
      ],
      validate(input) {
        if (!input || input.trim() === '') {
          return false;
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const { componentName, displayName, isAutoRegister } = answers;
    const dirName = componentName.trim().split('').map((it, index) => {
      if (index === 0) {
        return String(it).toUpperCase();
      }
      return it;
    }).join('');
    const compDir = path.join(resourcePath, dirName);
    // console.log('vvvvvvvvvvvv', templatePath, compDir);
    fs.mkdirSync(compDir);
    copyDir(templatePath, compDir, str => str.replace('{DISPLAYNAME}', displayName).replace('-NAME-', componentName));
    // 是否自动注册
    if (isAutoRegister === 'y') {
      insertPreviewNode(register(dirName, componentName));
      execSync('npm run build:es && npm run link',
        { cwd: path.join(packagePath, '../') });
    }
    console.log('操作成功');

    // fs.copyFileSync(templatePath, compDir);
    // destination.txt will be created or overwritten by default.
    // fs.copyFileSync('source.txt', 'destination.txt');
  })
  .catch((error) => {
    console.log(error);
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

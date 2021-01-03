const path = require('path');
const chalk = require('chalk');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(chalk.green('http://localhost:9901'));

// demo入口
const entry = {
  client: './packages/client/src/index.js',
  design: './packages/design/demo/index.js',
  opus: './packages/opus/src/index.js',
};

function getResoucePreview() {
  const result = [];
  const resourcePath = path.resolve(__dirname, '../packages/resource');
  const dirs = fs.readdirSync(resourcePath);
  dirs.forEach((item) => {
    const fPath = path.join(resourcePath, item);
    const stat = fs.statSync(fPath);
    if (stat.isDirectory()) {
      try {
        const demoStat = fs.statSync(path.join(fPath, 'demo/index.js'));
        if (demoStat) { result.push(item); }
      } catch (error) {}
    }
  });
  // console.log(result);
  return result;
  // process.exit(-1);
}

const resourceEntry = getResoucePreview();
resourceEntry.forEach((it) => { entry[it] = `./packages/resource/${it}/demo/index.js`; });

// 生成模板入口文件
function generatorHtmlPlugins() {
  const previewUrl = [];
  const result = Object.keys(entry).map((k) => {
    const filename = `${k}.html`;
    previewUrl.push(filename);
    return new HtmlWebpackPlugin({
      chunks: [k],
      filename,
      template: path.resolve(__dirname, 'index.html'),
    });
  });
  // const resourcePreview = getResoucePreview();
  // resourcePreview.forEach((it) => {
  //   const filename = `${it}.html`;
  //   result.push(new HtmlWebpackPlugin({
  //     chunks: [k],
  //     filename,
  //     template: path.resolve(__dirname, 'index.html'),
  //   }));
  // });
  const links = previewUrl.map(it => `<div class="item"><a href="/${it}">${it}</a></div>`);
  // 主页分流
  result.push(new HtmlWebpackPlugin({
    chunks: [],
    filename: 'index.html',
    templateContent: () => `
    <html>
      <head>
        <style>
          .item {
            margin-bottom: 12px;
            text-align: center;
          }
          .item a {
            color: #0e90d2;
          }
        </style>
      </head>
      <body>
        ${links.join('')}
      </body>
    </html>
  `,
  }));
  return result;
}

module.exports = {
  entry,
  devtool: '#source-map',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['@babel/plugin-transform-runtime'],
            ['@babel/plugin-transform-async-to-generator'],
            ['@babel/plugin-syntax-dynamic-import'],
            ['@babel/plugin-proposal-class-properties'],
            [
              'import',
              {
                libraryName: 'antd',
                style: 'css',
              },
            ],
          ],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    // 由于爱奇艺客户端使用9901端口，因此更换
    port: 9999,
    disableHostCheck: true, //  新增该配置项
  },
  plugins: [
    ...generatorHtmlPlugins(),
  ],
  mode: 'development',
};

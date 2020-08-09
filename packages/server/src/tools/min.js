
import {getDomain} from './';
const images = require('images');
const execa = require('execa');
// const fs = require('fs');
const path = require('path'); ;

export async function parsePsd(origin, width = 320, height = 480) {
  const dest = path.join(think.ROOT_PATH, 'www', 'static', 'imgmin');
  try {
    const result = [];
    const { stdout } = await execa('python', [path.join(think.ROOT_PATH, 'index.py'), origin, dest, width, height]);
    // fs.writeFileSync('a.json', stdout);
    const {size, list} = JSON.parse(stdout);
    let scale = 1;
    if (+size.width > width * 2) {
      scale *= 2;
    }
    // const minPath = path.join(think.ROOT_PATH, 'www', 'static', 'imgmin');
    list.forEach(it => {
      const { name, type, ow, which } = it;
      console.log(name, dest, which);
      // const filename = name.replace(dest, '');
      const savename = `${dest}${name}`;
      if (ow === 0) {
        images(which) // Load image from file
          .save(savename, { // Save the image to a file, with the quality of 50
            quality: 50 // 保存图片到文件,图片质量为50
          });
      } else if (type !== 'type') {
        // python .\index.py 'tmp/psd/psd30351.psd' 'www/static/psdimg' 640 960
        images(which) // Load image from file
          .size(ow < width ? ow : width * scale)
          .save(savename, { // Save the image to a file, with the quality of 50
            quality: 70 // 保存图片到文件,图片质量为50
          });
      }
      const obj = {
        type: type === 'type' ? 'COMPONENT_TYPE_TEXT' : 'COMPONENT_TYPE_PICTURE',
        rect: {
          top: it.top,
          left: it.left,
          width: it.width,
          height: it.height
        },
        attrs: {}
      };
      if (type === 'type') {
        obj.attrs.text = it.text;
      } else {
        obj.attrs.imgSrc = `http://${getDomain()}/static/imgmin/${name}`;
      }
      result.push(obj);
    });
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// parsePsd('tmp/psd/2.psd', 'www/static/psdimg');

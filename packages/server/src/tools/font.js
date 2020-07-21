const path = require('path');
const Fontmin = require('fontmin');

const FONTS_PATH = path.join(think.ROOT_PATH, 'public', 'fonts');

const FONT_SHORT_PATH = path.join(think.ROOT_PATH, 'www', 'static', 'fonts');

function execFont(id, fontName, text) {
  const htmlIDPath = path.join(FONT_SHORT_PATH, `${id}`);
  const fontmin = new Fontmin()
    .src(`${FONTS_PATH}/${fontName}.ttf`)
    .dest(htmlIDPath)
    .use(Fontmin.glyph({
      text,
      hinting: false // keep ttf hint info (fpgm, prep, cvt). default = true
    })).run();
  return fontmin;
}

export async function createShortFont(id = 1, store) {
  const { editList } = store;
  const fontMap = {};
  Object.keys(editList).forEach(key => {
    const it = editList[key] || {};
    const { attrs } = it || {};
    const { fontFamily, text } = attrs || {};
    if (fontFamily) {
      fontMap[fontFamily] += text;
    }
  });

  let result = '';
  Object.keys(fontMap).forEach(key => {
    const text = fontMap[key];
    result = execFont(id, key, text);
  });
  return result;
}

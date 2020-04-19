// import { getFontFamilyOptions } from '../core/config';
// import { getUrlPrefix } from '../services/apiConfig';

export function addAllFontCssToStyle(fonts) {
  const id = 'lzallfonts';
  const elem = window.document.getElementById(id);
  if (elem) return;
  const s = window.document.createElement('style');
  s.type = 'text/css';
  s.id = id;
  window.document.getElementsByTagName('head')[0].appendChild(s);

  const cssTpl = '@font-face {font-family: "$fontName";src: url("$fontUrl");}';
  const cssExpTpl = '@font-face {font-family: "example-$fontName";src: url("$fontUrl");}';
  let txt = '';
  fonts.forEach((it) => {
    let alltxt = cssTpl.replace(/\$fontName/g, it.key);
    alltxt = alltxt.replace(/\$fontUrl/g, it.url);
    let shortTxt = cssExpTpl.replace(/\$fontName/g, it.key);
    shortTxt = shortTxt.replace(/\$fontUrl/g, it.example);
    txt += alltxt + shortTxt;
  });
  s.innerText = txt;
}

// export function addShortFonts(id) {
//   const s = window.document.createElement('style');
//   s.type = 'text/css';
//   window.document.getElementsByTagName('head')[0].appendChild(s);

//   const cssTpl = `@font-face {font-family: "$fontName";src: url('${getUrlPrefix()}/static/fonts/${id}/$fontName.ttf');}`;
//   const fonts = getFontFamilyOptions();
//   let txt = '';
//   fonts.forEach((it) => {
//     txt += cssTpl.replace(/\$fontName/g, it.key);
//   });
//   s.innerText = txt;
// }

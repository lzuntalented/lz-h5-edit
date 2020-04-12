import { getFontFamilyOptions } from './config';
import { getUrlPrefix } from '../services/apiConfig';

export function addAllFontCssToStyle() {
  if (!FONT_CDN) return;
  const path = `${FONT_CDN}`;
  const s = window.document.createElement('style');
  s.type = 'text/css';
  window.document.getElementsByTagName('head')[0].appendChild(s);

  const cssTpl = `@font-face {font-family: "$fontName";src: url('https://${path}/$fontName.ttf');}`;
  const fonts = getFontFamilyOptions();
  let txt = '';
  fonts.forEach((it) => {
    txt += cssTpl.replace(/\$fontName/g, it.key);
  });
  s.innerText = txt;
}

export function addShortFonts(id) {
  const s = window.document.createElement('style');
  s.type = 'text/css';
  window.document.getElementsByTagName('head')[0].appendChild(s);

  const cssTpl = `@font-face {font-family: "$fontName";src: url('${getUrlPrefix()}/static/fonts/${id}/$fontName.ttf');}`;
  const fonts = getFontFamilyOptions();
  let txt = '';
  fonts.forEach((it) => {
    txt += cssTpl.replace(/\$fontName/g, it.key);
  });
  s.innerText = txt;
}

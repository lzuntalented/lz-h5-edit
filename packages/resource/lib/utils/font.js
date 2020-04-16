"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAllFontCssToStyle = addAllFontCssToStyle;
exports.addShortFonts = addShortFonts;

var _config = require("../core/config");

var _apiConfig = require("../services/apiConfig");

function addAllFontCssToStyle() {
  if (!FONT_CDN) return;
  var path = "".concat(FONT_CDN);
  var s = window.document.createElement('style');
  s.type = 'text/css';
  window.document.getElementsByTagName('head')[0].appendChild(s);
  var cssTpl = "@font-face {font-family: \"$fontName\";src: url('https://".concat(path, "/$fontName.ttf');}");
  var fonts = (0, _config.getFontFamilyOptions)();
  var txt = '';
  fonts.forEach(function (it) {
    txt += cssTpl.replace(/\$fontName/g, it.key);
  });
  s.innerText = txt;
}

function addShortFonts(id) {
  var s = window.document.createElement('style');
  s.type = 'text/css';
  window.document.getElementsByTagName('head')[0].appendChild(s);
  var cssTpl = "@font-face {font-family: \"$fontName\";src: url('".concat((0, _apiConfig.getUrlPrefix)(), "/static/fonts/").concat(id, "/$fontName.ttf');}");
  var fonts = (0, _config.getFontFamilyOptions)();
  var txt = '';
  fonts.forEach(function (it) {
    txt += cssTpl.replace(/\$fontName/g, it.key);
  });
  s.innerText = txt;
}
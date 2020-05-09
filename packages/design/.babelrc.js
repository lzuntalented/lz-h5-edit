module.exports = {
  plugins: [
    ["@babel/plugin-transform-runtime"],
    ["@babel/plugin-transform-async-to-generator"],
    ["@babel/plugin-syntax-dynamic-import"],
    ["@babel/plugin-proposal-class-properties"],
  ],
  "presets": [
    ["@babel/preset-env", {modules: false}], "@babel/preset-react"
  ]
};

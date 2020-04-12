module.exports = {
  env: {
    development: {
      plugins: [
        ["@babel/plugin-transform-runtime"],
        ["@babel/plugin-transform-async-to-generator"],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-class-properties"],
        [
          'import',
          {
            libraryName: 'antd',
            style: 'css',
          },
        ],
      ],
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    },
    production: {
      plugins: [
        ["@babel/plugin-transform-runtime"],
        ["@babel/plugin-transform-async-to-generator"],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-proposal-class-properties", { loose: false }],
        [
          'import',
          {
            libraryName: 'animate.css',
            customName: name => './empty.css',
          },
          'animate.css',
        ],
        [
          'import',
          {
            libraryName: 'antd/dist/antd.less',
            customName: name => './empty.css',
          },
          'antd/dist/antd.less',
        ],
      ],
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};

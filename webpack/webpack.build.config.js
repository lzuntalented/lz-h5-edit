const path = require('path');
const fs = require('fs');
const compareVersions = require('compare-versions');
// var Page = require('./plugins/page');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// 构建生成的目录地址
const distPath = path.resolve(__dirname, '../dist');
// 获取当前版本号
function getCurrentVersion() {
  let version = '0.0.1';
  const existDist = fs.existsSync(distPath);
  if (existDist) {
    const versionList = [];
    const list = fs.readdirSync(distPath);
    list.forEach((it) => {
      const dirHander = fs.statSync(path.resolve(distPath, it));
      const isDir = dirHander.isDirectory();
      if (isDir) versionList.push(it);
    });
    if (versionList.length > 0) {
      const vers = versionList.sort(compareVersions);
      version = vers[vers.length - 1];
      version = +(version.split('.').join('')) + 1;
      if (version < 10) {
        version = `00${version}`.split('').join('.');
      } else if (version < 100) {
        version = `0${version}`.split('').join('.');
      } else {
        version = `${version}`.split('').join('.');
      }
    }
  }
  return version;
}

const version = getCurrentVersion();

console.log(`当前构建版本号：${version}`);
console.warn('当前构建生成的html文件中使用百度统计是开发者的，请及时替换成您自己的统计脚本!');

module.exports = {
  entry: {
    bound: './packages/client/src/index.js',
    wap: './packages/opus/src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(distPath, `${version}`),
    chunkFilename: '[name].js',
    publicPath: `${version}/`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@babel/plugin-transform-runtime'],
              ['@babel/plugin-transform-async-to-generator'],
              ['@babel/plugin-syntax-dynamic-import'],
              ['@babel/plugin-proposal-class-properties', { loose: false }],
              [
                'import',
                {
                  libraryName: 'animate.css',
                  customName: () => './empty.css',
                },
                'animate.css',
              ],
              [
                'import',
                {
                  libraryName: 'antd/dist/antd.css',
                  customName: () => './empty.css',
                },
                'antd/dist/antd.css',
              ],
            ],
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  externals: [
    {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      antd: 'antd',
    },
  ],
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html
      chunks: [],
      filename: path.resolve(distPath, 'index.html'),
      template: 'packages/client/src/tpl/index.html.tpl',
      templateParameters: {
        jsPath: `${version}/bound`,
      },
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html
      chunks: [],
      filename: path.resolve(distPath, 'wap.html'),
      template: 'packages/opus/src/tpl/index.html.tpl',
      templateParameters: {
        jsPath: `${version}/wap`,
      },
    }),
  ],
  mode: 'production',
};

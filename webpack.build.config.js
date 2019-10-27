const path = require('path');
// var Page = require('./plugins/page');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

let cfgPath = './src/style/theme.js';
// relative path
if (cfgPath.charAt(0) === '.') {
  cfgPath = path.resolve(process.cwd(), cfgPath);
}
const getThemeConfig = require(cfgPath);
const theme = getThemeConfig;

module.exports = {
  entry: {
    bound: './src/index.js',
    wap: './src/wap.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            envName: 'production',
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          `less-loader?{"javascriptEnabled": true,"modifyVars":${JSON.stringify(theme)}}`,
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
      // 'animate.css': 'window',
      // 'antd/dist/antd.less': 'window',
    },
  ],
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'production',
};

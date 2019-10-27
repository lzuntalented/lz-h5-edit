const path = require('path');
const chalk = require('chalk');

const getThemeConfig = require('./src/style/theme.js');

const theme = getThemeConfig;

console.log(chalk.green('http://localhost:9901'));

module.exports = {
  entry: {
    bound: './src/index.js',
    wap: './src/wap.js',
  },
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
        loader: `style-loader!css-loader!less-loader?{"javascriptEnabled": true,"modifyVars":${JSON.stringify(theme)}}`,
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'development',
};

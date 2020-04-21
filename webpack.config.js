const path = require('path');
const chalk = require('chalk');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(chalk.green('http://localhost:9901'));

module.exports = {
  entry: {
    client: './packages/client/src/index.js',
    design: './packages/design/demo/index.js',
    opus: './packages/opus/src/index.js',
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
        options: {
          plugins: [
            ['@babel/plugin-transform-runtime'],
            ['@babel/plugin-transform-async-to-generator'],
            ['@babel/plugin-syntax-dynamic-import'],
            ['@babel/plugin-proposal-class-properties'],
            [
              'import',
              {
                libraryName: 'antd',
                style: 'css',
              },
            ],
          ],
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
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
        loader: 'style-loader!css-loader!less-loader',
      },
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['client'],
      filename: 'client.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['design'],
      filename: 'design.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['opus'],
      filename: 'opus.html',
      template: 'index.html',
    }),
  ],
  mode: 'development',
};

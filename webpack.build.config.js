const path = require('path');
// var Page = require('./plugins/page');

const webpack = require('webpack');
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
    index: './src/index.js',
  },
  output: {
    filename: 'bound.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // loader: 'babel-loader!react-loader'
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
      //   {
      //     test: /\.(less)$/,
      //     loader: ExtractTextPlugin.extract({
      //       fallback: 'style-loader',
      //       use: `css-loader!less-loader?{"javascriptEnabled": true,"modifyVars":${JSON.stringify(theme)}}`,
      //     }),
      //     // loader:"style-loader!css-loader!sass-loader"
      //   },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter',
    antd: 'antd',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    // new UglifyJSPlugin(),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'production',
};

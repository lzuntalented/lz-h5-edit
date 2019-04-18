const path = require('path');
// var Page = require('./plugins/page');

// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
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
  devtool: '#source-map',
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
        test: /\.(css|scss)$/,
        // loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
      // {
      //     test: /\.(less)$/,
      //     // loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' })
      //     loader:"style-loader!css-loader!less-loader"
      // },
      {
        test: /\.less$/,
        // use: [{
        //     loader: 'style-loader' // creates style nodes from JS strings
        //   }, {
        //     loader: 'css-loader' // translates CSS into CommonJS
        //   }, {
        //     loader: 'less-loader', // compiles Less to CSS
        //     options: {
        //         modifyVars: JSON.stringify(theme)
        //     }
        //   }]
        loader: `style-loader!css-loader!less-loader?{"javascriptEnabled": true,"modifyVars":${JSON.stringify(theme)}}`,
      },
    ],
  },
  // externals: {
  //     'react': 'React',
  //     'react-dom': 'ReactDOM',
  //     // 'reflux': 'Reflux',
  // },
  plugins: [
    // new ExtractTextPlugin("styles.css"),
    // new UglifyJSPlugin(),
    // new webpack.DefinePlugin({
    //     "process.env": {
    //         NODE_ENV: JSON.stringify("production")
    //     }
    // })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9901,
  },
  mode: 'development',
};

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

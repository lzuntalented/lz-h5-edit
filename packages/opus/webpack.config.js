const path = require('path');

module.exports = {
  entry: {
    bound: './src/index.js',
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
    port: 9902,
  },
  mode: 'development',
};

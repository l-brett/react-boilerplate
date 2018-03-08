const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "sass-loader",
          options: {
            includePaths: [path.join(__dirname, "src")],
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    new Dotenv({
      path: './env/debug.env'
    })
  ]
});
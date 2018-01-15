const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
});

const outputPath =  path.join(__dirname, 'dist');

module.exports = merge(common, {
  plugins: [
    new Dotenv({
      path: './env/production.env'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin(outputPath,{
      root: path.join(__dirname, '..')
    }),
    new UglifyJSPlugin(),
    extractSass
  ],
  module: {
    rules: [{
      test: /\.scss$|.css$/,
      use: extractSass.extract({
        use: [
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }, {
            loader: "sass-loader",
            options: {
              includePaths: [path.join(__dirname, "src")],
            }
          }]
      })
    }]
  },
});
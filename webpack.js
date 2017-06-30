const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bourbon = require('node-bourbon').includePaths;
const neat = require('node-neat').includePaths;

module.exports = {
  entry: ['./stylesheets/main.scss'],
  output: {
    filename: 'bundle.js', //webpack needs output.filename
    path: path.resolve(__dirname, 'dist'),
  },
  module: {

    rules: [
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?&name=[path][name].[ext]',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', `sass-loader?includePaths[]=${bourbon}&includePaths[]=${neat}`]),
      }],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};

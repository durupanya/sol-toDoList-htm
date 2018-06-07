const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: './Content/Javascripts/Common.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './Content/Javascripts')
  }
};
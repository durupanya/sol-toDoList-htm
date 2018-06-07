const path = require('path');

module.exports = {
  entry: './Content/Javascripts/Common.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './Content/Javascripts')
  }
};
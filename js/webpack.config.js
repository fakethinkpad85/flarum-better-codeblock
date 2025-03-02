const config = require('flarum-webpack-config');
const path = require('path');

module.exports = config({
  output: {
    path: path.resolve(__dirname, 'dist')
  }
});
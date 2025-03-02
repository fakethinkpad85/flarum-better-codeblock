const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    forum: './src/forum/index.js',
    admin: './src/admin/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    path: '\\\\192.168.1.2\\docker\\flarum\\extensions\\flarum-better-codeblock\\assets',
    filename: '[name].js',
    library: 'flarum.extensions["fakethinkpad85-better-codeblock"]',
    libraryTarget: 'window'
  },
  externals: {
    'flarum/forum/app': 'flarum.core.app',
    'flarum/admin/app': 'flarum.core.app',
    'flarum/common/extend': 'flarum.extend',
    'flarum/forum/components/TextEditor': 'flarum.core.compat["forum/components/TextEditor"]'
  }
};
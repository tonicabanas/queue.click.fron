const path = require('path');
const paths = require('./config').paths;

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  modules: [
    path.join(__dirname, '../node_modules'),
    path.join(paths.source, 'js'),
  ],
  alias: {
    assets: path.resolve(__dirname, '../src/assets/'),
    scss: path.resolve(__dirname, '../src/scss/'),
  },
};

module.exports = resolve;

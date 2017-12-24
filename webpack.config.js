const webpack = require('webpack');
const path = require('path');

const IS_PRODUCTION = require('./webpack/config').IS_PRODUCTION;
const paths = require('./webpack/config').paths;
const rules = require('./webpack/rules');
const entry = require('./webpack/entry');
const resolve = require('./webpack/resolve');
const plugins = require('./webpack/plugins');
const devServer = require('./webpack/dev-server');

module.exports = {
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: paths.context,
  watch: !IS_PRODUCTION,
  entry,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: IS_PRODUCTION ?  '[name].[hash].js' : '[name].js',
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
};

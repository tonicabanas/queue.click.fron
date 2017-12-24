const webpack = require('webpack');
const path = require('path');

const paths = {
  source: path.join(__dirname, '../src'),
  context: path.join(__dirname, '../src/js'),
  assets: path.join(__dirname, '../src/assets'),
  build: path.join(__dirname, '../dist')
};

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

module.exports = {
  paths,
  IS_PRODUCTION
};

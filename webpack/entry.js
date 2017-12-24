const path = require('path');
const paths = require('./config').paths;

// Default client app entry file
const entry = {
  bundle: [
    '@babel/polyfill',
    path.join(paths.source, 'js/index.jsx')
  ]
};

module.exports = entry;

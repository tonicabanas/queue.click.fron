const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const IS_PRODUCTION = require('./config').IS_PRODUCTION;

const autoprefixerOptions = {
  browsers: [
    'last 3 version',
    'safari >= 7',
    'ie >= 10',
  ],
};

const styleLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: !IS_PRODUCTION,
      minimize: IS_PRODUCTION,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: !IS_PRODUCTION,
      plugins: () => [
        autoprefixer(autoprefixerOptions),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: !IS_PRODUCTION
    },
  },
];

const sassLoader = IS_PRODUCTION ? {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract({
    use: styleLoaders,
  }),
} : {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
    },
  ].concat(styleLoaders),
};

styleLoaders.pop();

const cssLoader = IS_PRODUCTION ? {
  test: /\.css$/,
  loader: ExtractTextPlugin.extract({
    use: styleLoaders,
  }),
} : {
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    },
  ].concat(styleLoaders),
};

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
      }
    ]
  },
  {
    test: /\.(gif|png|jpg|svg|ttf|eot|woff|woff2|mp4|ico)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name]-[hash].[ext]',
          outputPath: 'assets/'
        }
      }
    ]
  },
];

rules.push(cssLoader);
rules.push(sassLoader);

module.exports = rules;

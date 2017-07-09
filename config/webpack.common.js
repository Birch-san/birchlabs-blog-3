const extend = require('util')._extend;
const path = require('path');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'main': './index.js'
    },

    output: {
      filename: 'app.bundle.js',
      path: path.resolve(__dirname, '..', 'dist'),
      /* IMPORTANT!
       * You must compile to UMD or CommonJS
       * so it can be required in a Node context: */
      libraryTarget: 'umd'
    },

    target: 'node',

    plugins: [
      new StaticSiteGeneratorPlugin({
        entry: 'main',
        globals: { window: {}, document: {}, self: {} }
      })
    ]

  };
};
const config = require('./webpack.config.js')
const TerserPlugin = require('terser-webpack-plugin');

config.mode = 'production'

config.optimization = {
  splitChunks: {
    chunks: 'all'
  }
}

config.plugins = config.plugins.concat([
    new TerserPlugin()
]);


module.exports = config;

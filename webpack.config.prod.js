const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')

module.exports = merge(baseConfig, {
  entry: './src/index.ts',
  mode: 'production',
})

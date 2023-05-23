const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

let mainConfig = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
      path: path.resolve(__dirname, '../docs'),
   },
})

module.exports = mainConfig

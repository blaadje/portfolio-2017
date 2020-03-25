const merge = require('webpack-merge')
const common = require('./webpack.common')

let mainConfig = merge(common, {
  mode: 'production',
})

module.exports = mainConfig

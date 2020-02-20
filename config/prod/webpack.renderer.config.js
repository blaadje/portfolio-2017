const path = require('path')
const { dependencies } = require('../../package.json')
const config = require('../webpack.base')

let rendererConfig = {
  ...config,
  mode: 'production',
  entry: {
    renderer: path.join(__dirname, '../../src/index.js'),
  },
  externals: [...Object.keys(dependencies || {})],
  node: {
    __dirname: false,
    __filename: false,
  },
  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../../dist/electron'),
  },
  target: 'electron-renderer',
}

module.exports = rendererConfig

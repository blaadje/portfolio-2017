const path = require('path')

let mainConfig = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, '../../src/main.js'),
  },
  resolve: {
    extensions: ['.js'],
  },
  node: {
    __dirname: process.env.NODE_ENV !== 'production',
    __filename: process.env.NODE_ENV !== 'production',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../../dist/electron'),
  },
  target: 'electron-main',
}

module.exports = mainConfig

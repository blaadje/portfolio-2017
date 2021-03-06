const path = require('path')
const merge = require('webpack-merge')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const common = require('./webpack.common')
const fs = require('fs')
const port = process.env.PORT || 8080
const publicPath = `https://localhost:${port}/`

const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap(
  merge(common, {
    mode: 'development',
    output: {
      publicPath,
      filename: 'index.js',
      pathinfo: false,
    },
    devtool: 'inline-source-map',
    devServer: {
      port,
      publicPath,
      compress: true,
      clientLogLevel: 'silent',
      noInfo: false,
      overlay: true,
      stats: 'minimal',
      http2: false,
      https: {
        cert: fs.readFileSync(path.resolve(__dirname, './ssl/cert.pem')),
        key: fs.readFileSync(path.resolve(__dirname, './ssl/key.pem')),
      },
      inline: true,
      lazy: false,
      hot: true,
      headers: { 'Access-Control-Allow-Origin': '*' },
      contentBase: path.join(__dirname, 'dist'),
      watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/,
        poll: 100,
      },
      historyApiFallback: {
        verbose: true,
        disableDotRule: false,
      },
    },
  })
)

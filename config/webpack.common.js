const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    symlinks: false,
    cacheWithContext: false,
    extensions: ['.vue', '.js', '.svg', '.yaml'],
    alias: {
      ['@assets']: path.resolve(__dirname, '../src/assets/'),
      ['@components']: path.resolve(__dirname, '../src/components'),
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
      {
        test: /\.svg$/,
        use: ['babel-loader', 'vue-svg-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|eot|woff|pdf)$/,
        include: path.resolve(__dirname, '../src/assets'),
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
          query: {
            compact: true,
          },
        },
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        oneOf: [
          // this matches `<style module>`
          {
            resourceQuery: /module/,
            use: [
              'vue-style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  url: true,
                  localIdentName: '[local]_[hash:base64:5]',
                },
              },
              'sass-loader',
            ],
          },
          // this matches plain `<style>` or `<style scoped>`
          {
            use: ['vue-style-loader', 'css-loader', 'sass-loader'],
          },
        ],
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
        },
      },
    ],
  },
}

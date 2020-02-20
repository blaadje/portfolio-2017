const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  resolve: {
    symlinks: false,
    cacheWithContext: false,
    extensions: ['.vue', '.js'],
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
        test: /\.(png|jpg|jpeg|gif|ttf|svg|eot|woff|pdf)$/,
        include: path.resolve(__dirname, '../src/assets'),
        use: {
          loader: 'file-loader',
          options: {},
        },
      },
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, '../src/images'),
        use: {
          loader: 'svgo-loader',
          options: {
            externalConfig: 'svgo-config.yml',
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.(js)$/,
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
            // options: {
            //   modules: true,
            //   localIdentName: '[local]_[hash:base64:5]',
            // },
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
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   modules: true,
            //   localIdentName: '[local]_[hash:base64:5]',
            // },
          },
          'sass-loader',
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

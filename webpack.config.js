'use strict'

const autoprefixer = require('autoprefixer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src',
  output: {
    path: './dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style!css!postcss!less', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css!postcss', exclude: /node_modules/ },
      { test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff)$/, loader: 'url-loader?limit=8192', exclude: /node_modules/ }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  postcss: [ autoprefixer({ browsers: ['> 1%'] }) ],
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/index.html' },
      { from: './src/assets', to: 'assets' }
    ])
  ],
  devServer: {
    contentBase: './src/assets',
    host: '0.0.0.0',
    port: 3000,
    inline: true,
    historyApiFallback: true,
    open: true
  }
}

module.exports = config

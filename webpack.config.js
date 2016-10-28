'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const env = process.env.NODE_ENV;
const isProduction = env === 'production';

const configs = {};

configs.entry = {
  main: ['./app/main']
};

configs.output = {
  path: './dist',
  publicPath: '/',
  filename: isProduction ? '[name].[hash].js' : '[name].js'
};

configs.module = {};

configs.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel',
    exclude: /node_modules/
  }, {
    test: /\.less$/,
    loader: 'style!css!less'
  }, {
    test: /\.css$/,
    loader: 'style!css'
  }, {
    test: /\.(png|jpg|jpeg|gif)$/,
    loader: 'file'
  }
];

configs.resolve = {};

configs.resolve.extensions = ['', '.webpack.js', '.web.js', '.js', '.jsx'];

configs.plugins = [
  new CopyWebpackPlugin([
    { from: './assets', to: 'assets' },
    { from: './app/index.html' }
  ])
];

if(isProduction) {
  configs.plugins.push(function() {
    this.plugin('done', stats => {
      console.log(stats);
      const htmlPath = path.join(__dirname, 'dist', 'index.html');
      const template = fs.readFileSync(htmlPath, 'utf8');
      const html = template.replace('main.js', 'main.' + stats.hash + '.js');
      fs.writeFile(htmlPath, html);
    });
  });
}

configs.devServer = {
  contentBase: configs.output.path,
  port: 3000,
  host: '0.0.0.0',
  inline: true,
  historyApiFallback: true,
  progress: true,
  stats: 'minimal'
};

module.exports = configs;

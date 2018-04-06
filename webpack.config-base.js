'use strict'

const Path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Entry point for static analyzer
  entry: {
    app: [
      'webpack-dev-server/client?http://127.0.0.1:5000',
      'webpack/hot/dev-server',
      './src/main.js'
    ]
  },

  output: {
    // Where to build results
    path: Path.join(__dirname, 'build/assets'),

    // Filename to use in HTML
    filename: 'bundle.js',

    // Path to use in HTML
    publicPath: '/assets/'
  },

  resolve: {
    // Directory names to be searched for modules
    modules: ['src', 'node_modules']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css')
  ],

  module: {
    loaders: [
      {enforce: "pre", test: /\.jsx?$/, loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader?configFile=.eslintrc'], exclude: /node_modules/},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader', 'sass-loader'], exclude: /node_modules/},
      {test: /\.css$/, loaders: ['style-loader', 'css-loader', 'autoprefixer-loader']},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.json$/, loaders: ['json-loader'], exclude: /node_modules/},
      {test: /\.png$/, loader: 'url-loader?limit=8192&mimetype=image/png', exclude: /node_modules/},
      {test: /\.jpe?g$/, loader: 'url-loader?limit=8192&mimetype=image/jpg', exclude: /node_modules/},
      {test: /\.gif$/, loader: 'url-loader?limit=8192&mimetype=image/gif', exclude: /node_modules/},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=image/svg+xml'},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff2'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=8192&mimetype=application/octet-stream'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
      {test: /\.md$/, loader: 'markdown-loader'},
      {test: /\.html$/, loader: 'html-loader'}
    ]
  },

  devtool: '#inline-source-map'
}

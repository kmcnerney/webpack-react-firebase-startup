'use strict'

const express = require('express')
const proxy = require('proxy-middleware')
const url = require('url')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config-dev')

const host = '127.0.0.1'
const port = 5000

const server = express()
server.use('/build', proxy(url.parse(`http://${host}:${port}/build`)))

server.get('/*', function(req, res) {   
  res.sendFile(__dirname + '/index.html')   
})

new WebpackDevServer(webpack(config), {
  contentBase: config.output.path,
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  quiet: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With'
  },
  stats: {
    colors: false
  }
}).listen(port, host, function(err) {
  if (err) {
    console.log(err)
  }
})

server.listen(port)

console.log(`Listening at http://${host}:${port}`)

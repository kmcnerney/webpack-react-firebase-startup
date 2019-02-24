'use strict'

const Path = require('path')
const express = require('express')
const proxy = require('proxy-middleware')
const url = require('url')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./webpack.config-dev')

const host = '0.0.0.0'
const buildPort = 5000
const serverPort = 8080

const server = express()
server.use('/build', proxy(url.parse(`http://${host}:${buildPort}/build`)))

server.get('/*', (req, res) => {
	res.sendFile(Path.join(__dirname, '/index.html'))
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
}).listen(buildPort, host, (err) => {
	if (err) {
		console.log(err)
	}
})

server.listen(serverPort)

console.log(`Listening at http://${host}:${serverPort}`)

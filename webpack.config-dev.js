'use strict'

const Base = require('./webpack.config-base')

module.exports = {
	mode: 'development',
	entry: Base.entry,
	output: Base.output,
	resolve: Base.resolve,
	module: Base.module,
	plugins: Base.plugins
}

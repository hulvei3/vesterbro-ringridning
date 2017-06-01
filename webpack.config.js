var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var __dev__ = JSON.parse(process.env.DEBUG || 'false');
var output = ''
if (__dev__) {
	output += 'build/'
}

module.exports = {
	entry: './src/main',
	output: {
		filename: output + 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.jpg$|\.png$/, loader: "file-loader?name=[path][name].[ext]"}
		]
	},
	devtool: __dev__ ? '#source-map' : false,
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.tmpl.html',
			filename: output + 'index.html',
			chunks: []
		})
	]
}

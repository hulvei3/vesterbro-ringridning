var path = require('path');

module.exports = {
	entry: "./src/main",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader"},
			{ test: /\.jpg$|\.png$/, loader: "file-loader?name=[path][name].[ext]"}
		]
	},
	devtool: '#source-map'
}

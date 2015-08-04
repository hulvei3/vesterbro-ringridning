module.exports = {
	entry: "./src/main",
	output: {
		path: __dirname + "/build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	},
	devtool: '#source-map'
}

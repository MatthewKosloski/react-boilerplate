const webpack = require('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
	devtool: debug ? 'cheap-module-eval-source-map' : null,
	entry: ['./src/app.js'], // an array of files to process
	output: {
		path: path.join(__dirname, 'public'), // output files go in a public folder
		filename: debug ? 'app.js' : 'app.min.js',
		publicPath: '/static/' // devServer serves files via this path. view index.html to see it in action.
	},
	module: {
		loaders: [
			{
				test: /\.js$/, // process all .js files
				exclude: /node_modules/, // exclude node_modules for faster compilation
				loader: 'babel-loader'
			}
		]
	},
	plugins: debug ? [] : [
		// if we do `npm run build`, use these minification plugins
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
};
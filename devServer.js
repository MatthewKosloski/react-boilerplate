const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();
const port = 3000;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { 
	noInfo: true, 
	publicPath: webpackConfig.output.publicPath 
}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(port, (error) => {
	if (error) {
		console.error(error);
	} else {
		console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
	}
});
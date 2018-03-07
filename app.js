const express = require('express');
const path = require('path');
const compression = require('compression');

// Create server instance
const app = express();

// Enable GZIP
app.use(compression());

// Serve UI files from dist/ directory
app.use(express.static('./dist/'));
app.get('/*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

module.exports = app;

const isVerbose = false;

var config = {
	context: __dirname + '/app',
	entry: './main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/, // all JS files will use this loader
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env'],
				},
			},
		],
	},
	stats: {
		colors: true,
		reasons: isVerbose,
		hash: isVerbose,
		version: isVerbose,
		timings: true,
		chunks: isVerbose,
		chunkModules: isVerbose,
		cached: isVerbose,
		cachedAssets: isVerbose,
	},
};

module.exports = config;

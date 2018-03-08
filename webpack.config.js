const isVerbose = false;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

var config = {
	context: __dirname + '/app',
	entry: {
		main: './main.js',
		vendor: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
	},
	watch: true,
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/, // all JS files will use this loader
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-2'],
					//presets: ['react', 'env'],
				},
			},
			{
				test: /\.css$/, // all CSS files
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							minimize: true,
						},
					},
				],
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
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [], // new BundleAnalyzerPlugin()
};

module.exports = config;

/**
 * This file is responsible for build tasks
 */

// Webpack API
const webpack = require('webpack');

// Object that holds all tasks
const tasks = {};
const server = require('./bin/www');

function run(task) {
	const start = new Date();
	console.log('Running task ' + task);
	return Promise.resolve()
		.then(() => tasks[task]())
		.then(
			() => {
				console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
			},
			err => console.error(err.stack)
		);
}

tasks.dev = () => {
	// Bundle
	return run('bundle').then(() => tasks['server']());
};

// Breaking down tasks into bundling, running server
tasks.bundle = () => {
	// Create webpack instance
	return new Promise(resolve => {
		const webpackConfig = require('./webpack.config');
		const webpackCompiler = webpack(webpackConfig);

		// When webpack is done
		const onBundleComplete = (error, stats) => {
			console.log('bundle completed');
			const bundle = stats.compilation.chunks.find(x => x.name === 'main').files[0];
			// Output stats to console
			console.log(stats.toString(webpackConfig.stats));

			resolve();
		};

		const onWatchCompleted = (error, stats) => {
			console.log('watch completed');
			const bundle = stats.compilation.chunks.find(x => x.name === 'main').files[0];
			// Output stats to console
			console.log(stats.toString(webpackConfig.stats));
			resolve();
		};

		// webpackCompiler.run(onBundleComplete);
		// Also watch files when they're changed
		webpackCompiler.watch(
			{
				ignored: ['/node_modules/', '/dist'],
			},
			onWatchCompleted
		);
	});
};

tasks.server = () => {
	server.startServer.call();
};

// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);

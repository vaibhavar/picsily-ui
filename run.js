// run.js
const webpack = require('webpack');

// Object that holds all tasks
const tasks = {};

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
	return run('bundle');
};

// Breaking down tasks into bundling, running server
tasks.bundle = () => {
	// Create webpack instance
	return new Promise(resolve => {
		const webpackConfig = require('./webpack.config');
		const webpackCompiler = webpack(webpackConfig);

		// When webpack is done
		const onBundleComplete = (error, stats) => {
			const bundle = stats.compilation.chunks.find(x => x.name === 'main').files[0];
			// Output stats to console
			console.log(stats.toString(webpackConfig.stats));
		};

		webpackCompiler.run(onBundleComplete);
	});
};

// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);

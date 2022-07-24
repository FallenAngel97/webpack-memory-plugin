const webpack = require('webpack');
const WebpackMemoryPlugin = require('../WebpackMemoryPlugin');
const sinon = require('sinon');
const assert = require('assert');

describe('WebpackMemoryPlugin', () => {
	it('should show the amount of RAM used after success', (done) => {
		let spy = sinon.spy(console, 'log');
		webpack({
			plugins: [
				new WebpackMemoryPlugin()
			],
		}, (err, stats) => {
			try {
				spy.restore();
				assert(spy.called);
				assert(spy.firstCall.firstArg.indexOf('🐏 Amount of RAM used:') !== -1);
				done();
			} catch (ex) {
				spy.restore();
				console.log(ex);
				done(ex);
			}
		});
	});
});

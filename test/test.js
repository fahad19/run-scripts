/* global describe, it */
'use strict';
var assert = require('assert');
var runScripts = require('../');

describe('run-scripts node module', function () {
	it('must produce full command', function () {
		assert.deepEqual(
			runScripts(['one', 'two', 'three']),
			[
				'npm run one',
				'npm run two',
				'npm run three'
			]
		);
	});
});

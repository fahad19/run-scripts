'use strict';

var async = require('async');
var run = require('./run');

module.exports = function (scripts) {
	var finished = function () {

	};

	if (typeof arguments[1] === 'function') {
		finished = arguments[1];
	}

	return async.series(scripts.map(function (script) {
		return function (end) {
			run(script, function () {
				end();
				finished();
			});
		};
	}));
};

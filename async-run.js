'use strict';

var async = require('async');
var run = require('./run');

module.exports = function (scripts) {
	return async.series(scripts.map(function (script) {
		return function (end) {
			run(script, function () {
				end();
			});
		};
	}));
};

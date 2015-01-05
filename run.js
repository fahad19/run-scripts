'use strict';

var exec = require('child_process').exec;

module.exports = function (command) {
	var cb = function () {

	};

	if (typeof arguments[1] === 'function') {
		cb = arguments[1];
	}

	return exec(command, cb);
};

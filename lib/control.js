'use strict';

require('./db/models');

var utils = require('./utils');
var vogels = require('vogels-helpers');
var buildOptions = utils.buildServiceOptions;

function Service() {}

module.exports = Service;

/**
 * Create a video
 */
Service.prototype.createVideo = function(data, options) {
	options = buildOptions(options);

	return vogels.control.create('Video', data, options);
};

/**
 * Update video
 */
Service.prototype.updateVideo = function(data, options) {
	options = buildOptions(options);

	return vogels.control.update('Video', data, options);
};

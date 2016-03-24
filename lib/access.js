'use strict';

require('./db/models');

var vogels = require('vogels-helpers');
var utils = require('./utils');
var buildOptions = utils.buildServiceOptions;

function Service() {}

module.exports = Service;

/**
 * Video by id
 */
Service.prototype.video = function(id, options) {
	options = buildOptions(options);

	return vogels.access.getItem('Video', id, options);
};

/**
 * Videos by ids
 */
Service.prototype.videos = function(ids, options) {
	options = buildOptions(options);

	return vogels.access.getItems('Video', ids, options);
};

'use strict';

var utils = require('./utils');
var _ = utils._;

function createVideoId(video) {
	return utils.md5([video.sourceType.trim(), video.sourceId.trim()].join('_'));
}

function normalize(data) {
	data = _.pick(data, 'sourceType', 'sourceId', 'data', 'width', 'height', 'countViews', 'createdAt', 'websites');
	data.websites = data.websites || [];
	data.id = data.id || createVideoId(data);
	// data.createdAt = new Date(data.createdAt || Date.now());
	// data.createdAt = data.createdAt.toISOString();

	return data;
}

exports.createId = createVideoId;
exports.normalize = normalize;

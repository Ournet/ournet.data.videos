'use strict';

var utils = require('../utils');
var _ = utils._;

function createVideoId(video) {
	return utils.md5([video.sourceType.trim(), video.sourceId.trim()].join('_'));
}

function normalize(data) {
	data = _.pick(data, 'sourceType', 'sourceId', 'data', 'width', 'height', 'countViews', 'createdAt', 'websites');
	data.websites = data.websites || [];
	data.id = data.id || createVideoId(data);
	return data;
}

exports.config = {
	createNormalize: normalize
};

exports.normalize = normalize;

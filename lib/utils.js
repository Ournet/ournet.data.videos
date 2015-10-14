'use strict';

var core = require('ournet.core');
var _ = core._;

exports.normalizeVideo = function(data) {
	data = _.pick(data, 'sourceType', 'sourceId', 'data', 'width', 'height', 'countViews', 'createdAt', 'websites');
	data.websites = data.websites || [];
	data.id = exports.createVideoId(data);
	return data;
};

exports.get = function(data) {
	if (_.isNull(data) || _.isUndefined(data)) {
		return data;
	}
	if (_.isArray(data)) {
		return data.map(exports.get);
	}
	if (_.isFunction(data.toJSON)) {
		return data.toJSON();
	}
	if (_.isObject(data)) {
		Object.keys(data).forEach(function(key) {
			data[key] = exports.get(data[key]);
		});
	}
	return data;
};

exports.createVideoId = function(video) {
	return core.util.md5([video.sourceType, video.sourceId].join('_'));
};

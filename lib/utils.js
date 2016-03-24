'use strict';

var utils = require('ournet.utils');
// var atonic = require('atonic');
var _ = require('lodash');
// var Promise = require('bluebird');
var crypto = require('crypto');

exports.md5 = function md5(value) {
	return crypto.createHash('md5').update(value).digest('hex');
};

exports.buildServiceOptions = function buildServiceOptions(options, defaults) {
	defaults = defaults || {
		format: 'json'
	};

	return _.defaults(options || {}, defaults);
};

exports.wrapAt = function wrapAt(text, position) {
	if (text && text.length > position) {
		return text.substr(0, position);
	}

	return text;
};

module.exports = exports = _.assign({
	_: _
}, exports, utils);

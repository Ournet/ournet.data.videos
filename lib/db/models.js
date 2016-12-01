'use strict';

var vogels = require('vogels-helpers');
var schemas = require('./schemas');
var Video = require('../video');

exports.Video = vogels.define('Video', {
	tableName: 'Videos',
	hashKey: 'id',
	timestamps: true,
	schema: schemas.Video
}, {
	createNormalize: Video.normalize
});

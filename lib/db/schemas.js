'use strict';

var vogels = require('vogels-helpers').vogels;
var Joi = require('vogels-helpers').Joi;

exports.Video = {
	// md5 SOURCE + SOURCE_ID
	id: Joi.string().length(32).required(),
	sourceType: Joi.string().valid('URL', 'YOUTUBE', 'VIMEO', 'IFRAME', 'FLASH').required(),
	sourceId: Joi.string().trim().min(5).max(512).required(),
	width: Joi.number().integer(),
	height: Joi.number().integer(),
	data: Joi.string().max(884),
	countViews: Joi.number().integer().default(0),
	websites: vogels.types.numberSet()
};

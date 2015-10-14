'use strict';

var core = require('ournet.core');
var Promise = core.Promise;
var vogels = require('vogels');
var Joi = require('joi');

exports.Video = vogels.define('Video', {
  tableName: 'Videos',
  hashKey: 'id',
  timestamps: true,
  schema: {
    // md5 SOURCE + SOURCE_ID
    id: Joi.string().length(32).required(),
    sourceType: Joi.string().valid('URL', 'YOUTUBE', 'VIMEO', 'IFRAME', 'FLASH').required(),
    sourceId: Joi.string().trim().min(5).max(512).required(),
    width: Joi.number().integer(),
    height: Joi.number().integer(),
    data: Joi.string().max(884),
    countViews: Joi.number().integer().default(0),
    websites: vogels.types.numberSet()
  }
});

Promise.promisifyAll(exports.Video);

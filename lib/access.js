'use strict';

var models = require('./db/models');
var internal = {};
var utils = require('./utils');

internal.get = utils.get;

var Service = module.exports = function() {

};

/**
 * Video by id
 */
Service.prototype.video = function(params) {
  return models.Video.getAsync(params.id, params.params).then(internal.get);
};

/**
 * Videos by ids
 */
Service.prototype.videos = function(params) {
  return models.Video.getItemsAsync(params.ids, params.params).then(internal.get);
};

'use strict';

var models = require('./db/models');
var utils = require('./utils');
var internal = {};

internal.get = utils.get;

var Service = module.exports = function() {

};

/**
 * Create a video
 */
Service.prototype.createVideo = function(data) {
  data = utils.normalizeVideo(data);

  var params = {};
  params.ConditionExpression = '#id <> :id';
  params.ExpressionAttributeNames = {
    '#id': 'id'
  };
  params.ExpressionAttributeValues = {
    ':id': data.id
  };

  return models.Video.createAsync(data, params).then(internal.get)
    .catch(function(error) {
      if (error.code === 'ConditionalCheckFailedException') {
        return {
          id: data.id
        };
      }
      return Promise.reject(error);
    });
};

/**
 * Update video
 */
Service.prototype.updateVideo = function(data) {
  return models.Video.updateAsync(data).then(internal.get);
};

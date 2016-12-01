'use strict';

var Video = require('../lib/video');
var assert = require('assert');

describe('Video', function() {
	it('should normalize a video', function() {

		assert.throws(function() {
			Video.normalize({
				country: 'ro',
				lang: 'ro',
				category: 1
			});
		});

		var item = Video.normalize({
			sourceId: '1',
			sourceType: 'custom'
		});
		assert.equal('string', typeof item.id);
	});
});

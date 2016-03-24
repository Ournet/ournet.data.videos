'use strict';

var Data = require('./common/data');
if (!Data) {
	return;
}

var assert = require('assert');
var itemId = 'd62dc52c71740ae41ea33b2200cd1c9a';

describe('Access', function() {
	it('should get video by id', function() {
		return Data.access.video(itemId)
			.then(function(item) {
				assert.ok(item);
				assert.equal(itemId, item.id);
			});
	});
	it('should get video by id (AttributesToGet)', function() {
		return Data.access.video(itemId, {
				params: {
					AttributesToGet: ['id', 'sourceId']
				}
			})
			.then(function(item) {
				assert.ok(item);
				assert.equal(itemId, item.id);
				assert.equal(2, Object.keys(item).length);
			});
	});
	it('should get videos by ids', function() {
		return Data.access.videos([itemId])
			.then(function(items) {
				assert.ok(items);
				assert.equal(1, items.length);
			});
	});
});

'use strict';

const greet = require('../lib/greet.js');
const assert = require('assert');

describe('greeter', function() {
  describe('hi function', function() {
    it('should return hi there zach', function() {
      let result = greet.hello('zach');
      assert.ok(result === 'hi there zach', 'result was no hi there zach');
    });
  });
});

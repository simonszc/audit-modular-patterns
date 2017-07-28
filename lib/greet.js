'use strict';

module.exports = exports = {};

exports.hello = function(name) {
  if(arguments.length === 0)
    throw new Error('missing a name');
  return 'hi there ' + name;
};

exports.goodbye = function() {
  return 'goodbye';
};

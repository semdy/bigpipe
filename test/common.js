'use strict';

//
// Expose Pagelets's Pipe
//
exports.Pipe = require('../');
exports.Pagelet = require('pagelet');
exports.File = require('../lib/file');

//
// Expose a port number generator.
//
var port = 1024;
Object.defineProperty(exports, 'port', {
  get: function get() {
    return port++;
  }
});

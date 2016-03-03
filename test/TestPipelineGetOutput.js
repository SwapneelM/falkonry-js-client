/*!
 * falkonry-js-client
 * Copyright(c) 2016 Falkonry Inc
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies
 */

var fs       = require('fs');
var assert   = require('assert');
var Falkonry = require('../').Client;
var token    = ''; //auth token
var pipeline = ''; //Pipeline id

/*
 * Test to get output of a Pipeline
 * and pipe it to a writable file stream
 */

describe.skip('Test get output of a Pipeline', function(){
  var falkonry = null;

  before(function(done){
    falkonry = new Falkonry('http://localhost:8080', token);
    return done();
  });

  it('Should get complete output', function(done){
    return falkonry.getOutput(pipeline, null, null, function(error, response){
      assert.equal(error, null, 'Error getting output of a Pipeline: '+error);

      if(!error) {
        response.pipe(fs.createWriteStream('/tmp/'+pipeline+'.json'));
      }
      return done();
    });
  });

  it.skip('Should get output within the specified range', function(done){
    var start = 0;
    var end   = 0;
    return falkonry.getOutput(pipeline, start, end, function(error, response){
      assert.equal(error, null, 'Error getting output of a Pipeline: '+error);

      if(!error) {
        response.pipe(fs.createWriteStream('/tmp/'+pipeline+'.json'));
      }
      return done();
    });
  });

  after(function(done){
    return done();
  });
});
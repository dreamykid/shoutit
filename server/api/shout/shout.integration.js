'use strict';

var app = require('../..');
var request = require('supertest');

var newShout;

describe('Shout API:', function() {

  describe('GET /shout', function() {
    var shouts;

    beforeEach(function(done) {
      request(app)
        .get('/shout')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          shouts = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      shouts.should.be.instanceOf(Array);
    });

  });

  describe('POST /shout', function() {
    beforeEach(function(done) {
      request(app)
        .post('/shout')
        .send({
          content: 'New Shout'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newShout = res.body;
          done();
        });
    });

    it('should respond with the newly created shout', function() {
      newShout.content.should.equal('New Shout');
    });

  });

  describe('GET /shout/:id', function() {
    var shout;

    beforeEach(function(done) {
      request(app)
        .get('/shout/' + newShout._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          shout = res.body;
          done();
        });
    });

    afterEach(function() {
      shout = {};
    });

    it('should respond with the requested shout', function() {
      shout.content.should.equal('New Shout');
    });

  });

  describe('PUT /shout/:id', function() {
    var updatedShout

    beforeEach(function(done) {
      request(app)
        .put('/shout/' + newShout._id)
        .send({
          content: 'Updated Shout'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedShout = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedShout = {};
    });

    it('should respond with the updated shout', function() {
      updatedShout.content.should.equal('Updated Shout');
    });

  });

  describe('DELETE /shout/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/shout/' + newShout._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when shout does not exist', function(done) {
      request(app)
        .delete('/shout/' + newShout._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});

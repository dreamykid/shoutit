'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var shoutCtrlStub = {
  index: 'shoutCtrl.index',
  show: 'shoutCtrl.show',
  create: 'shoutCtrl.create',
  update: 'shoutCtrl.update',
  destroy: 'shoutCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var shoutIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './shout.controller': shoutCtrlStub
});

describe('Shout API Router:', function() {

  it('should return an express router instance', function() {
    shoutIndex.should.equal(routerStub);
  });

  describe('GET /shout', function() {

    it('should route to shout.controller.index', function() {
      routerStub.get
        .withArgs('/', 'shoutCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /shout/:id', function() {

    it('should route to shout.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'shoutCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /shout', function() {

    it('should route to shout.controller.create', function() {
      routerStub.post
        .withArgs('/', 'shoutCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /shout/:id', function() {

    it('should route to shout.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'shoutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /shout/:id', function() {

    it('should route to shout.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'shoutCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /shout/:id', function() {

    it('should route to shout.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'shoutCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});

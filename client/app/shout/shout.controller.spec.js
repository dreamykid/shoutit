'use strict';

describe('Controller: ShoutController', function () {

  // load the controller's module
  beforeEach(module('shoutApp'));
  beforeEach(module('stateMock'));

  var scope;
  var ShoutController;
  var state;
  var $httpBackend;

// Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/shout')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    ShoutController = $controller('ShoutController', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the controller', function() {
    $httpBackend.flush();
    expect(ShoutController.shouts.length).toBe(10);
  });
});

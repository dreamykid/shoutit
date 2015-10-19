'use strict';
(function() {

function ShoutController($scope, $http) {
  var self = this;
  this.shouts = ['Default Shout'];
  this.newShout = 'Shout Something ';

  $http.get('/shout').then(function(response) {
    self.shouts = response.data;
  });

  this.addShout = function(argShout) {
    if (self.newShout === '') {
    	return;
    }
    $http.post('/shout', { content: self.newShout });
    self.newShout = '';
  };

  this.reloadShouts = function() {
  	$http.get('/shout').then(function(response) {
    	self.shouts = response.data;
  	});
  };


}

angular.module('shoutApp')
  .controller('ShoutController', ShoutController);

})();
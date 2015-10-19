'use strict';

angular.module('shoutApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shout', {
        url: '/shouts',
        templateUrl: 'app/shout/shout.html',
        controller: 'ShoutController',
        controllerAs: 'shout'
      });
  });


'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('crescendoBs'));

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    $controller('MainCtrl', {
      $scope: scope
    });
    
  }));
});

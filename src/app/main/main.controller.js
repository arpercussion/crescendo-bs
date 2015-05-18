

angular.module('crescendoBs')
  .controller('MainCtrl', function ($scope, $modal) {
    'use strict';
    // Build out the modal
    $scope.amplifyModal = $modal({
      template: 'app/main/modal.html',
      show: true,
      placement: 'center',
      keyboard: false,
      backdrop: 'static'
    });
    // Function to show modal
    $scope.showModal = function() {
      $scope.amplifyModal.$promise.then($scope.amplifyModal.show);
    };
  });

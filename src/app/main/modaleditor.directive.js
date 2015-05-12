angular.module('crescendoBs')
  .directive('modalEditor', function () {
    return {
      replace: 'true',
      templateUrl: 'app/main/modal.socialposteditor.html',
      restrict: 'E',
      controller: 'ModalEditorCtrl',
      scope: {
        postText: "=",
        maxChars: "="
      }
    }
  });

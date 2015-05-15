angular.module('crescendoBs')
  .controller('ModalEditorCtrl', function($scope){
    $scope.limit = $scope.maxChars;


    // TODO: Bind to Hashtag API
    $scope.hashtags = [
      {
        "id": "1",
        "tag": "#foo"
      },
      {
        "id": "2",
        "tag": "#bar"
      },
      {
        "id": "3",
        "tag": "#doge"
      },
      {
        "id": "4",
        "tag": "#wow"
      }
    ];


    $scope.images = [
      {
        "id": "1",
        "url": "http://goo.gl/EFDcA2"
      },
      {
        "id": "2",
        "url": "http://goo.gl/HDP0Rk"
      },
      {
        "id": "3",
        "url": "http://goo.gl/ozR3mQ"
      },
      {
        "id": "4",
        "url": "http://goo.gl/PNoGgd"
      }
    ];

    $scope.addImage = function(url){
      if(url){
        if($scope.maxChars){
          $scope.limit = parseInt($scope.maxChars)-23;
        }
      } else {
        $scope.clearImg();
      }
    };

    $scope.clearImg = function(){
      $scope.activeImg = '';
      if($scope.maxChars){
        $scope.limit = parseInt($scope.maxChars);
      }
    };



    $scope.addHashtag = function(tag){
      $scope.postText = $scope.postText + ' ' + tag;
      $scope.activeHashtag = 0;
    };

    $scope.minifyUrl = function(fullURL){
      if(fullURL){
        $scope.postText = $scope.postText + ' http://perc.li/eR4Eds';
        $scope.fullUrl = '';
      }
    };



  });

angular.module('crescendoBs')
  .controller('AmplifyCtrl', function ($scope) {
    "use strict";

    // Current view of Amplify Modal
    $scope.currentState = 1;
    // Selected piece of content to amplify
    $scope.activeContent = {
      "item": ""
    };
    // Active Editor tab
    $scope.editorTabsActiveTab = 0;
    // Active Preview tab
    $scope.previewTabsActiveTab = 0;



    $scope.contents = [
      {
        "id": "1",
        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "type": "Blog",
        "author": "Karen Peña",
        "publicationDate": new Date('04/15/15 02:30 PM'),
        "percLi": "http://perc.li/E450x"
      },
      {
        "id": "2",
        "title": "Aliquam erat volutpat. Maecenas laoreet fringilla risus, molestie.",
        "type": "Blog",
        "author": "Karen Peña",
        "publicationDate": new Date('04/15/15 02:30 PM'),
        "percLi": "http://perc.li/HoJ0p"
      },
      {
        "id": "3",
        "title": "Aliquam erat volutpat. Maecenas laoreet fringilla risus, molestie auctor.",
        "type": "PDF",
        "author": "Karen Peña",
        "publicationDate": new Date('04/15/15 02:30 PM'),
        "percLi": "http://perc.li/d3Dr4"
      }
    ];







    // Function to increment state
    $scope.incrementState = function(){
      $scope.currentState++;
    };

    // Function to decrement state
    $scope.decrementState = function(){
      $scope.currentState--;
    };

    // Define Editor tabs and html partials
    $scope.editorTabs = [
      {
        "title": "Twitter",
        "template": "app/main/modal.socialposteditor.html"
      },
      {
        "title": "Facebook",
        "template": "app/main/modal.socialposteditor.html"
      },
      {
        "title": "LinkedIn",
        "template": "app/main/modal.socialposteditor.html"
      },
      {
        "title": "Google+",
        "template": "app/main/modal.socialposteditor.html"
      }
    ];

    // Define preview tabs and html partials
    $scope.previewTabs = [
      {
        "title": "Twitter",
        "template": "app/main/modal.socialpostpreview.html"
      },
      {
        "title": "Facebook",
        "template": "app/main/modal.socialpostpreview.html"
      },
      {
        "title": "LinkedIn",
        "template": "app/main/modal.socialpostpreview.html"
      },
      {
        "title": "Google+",
        "template": "app/main/modal.socialpostpreview.html"
      }
    ];

  });

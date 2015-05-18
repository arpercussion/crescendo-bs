angular.module('crescendoBs')
  .controller('AmplifyCtrl', function ($scope) {
    'use strict';

    // Current view of Amplify Modal
    $scope.currentState = 0;
    // Selected piece of content to amplify
    $scope.activeContent = {
      'item': ''
    };
    // Active Editor tab
    $scope.editorTabsActiveTab = 0;
    // Active Preview tab
    $scope.previewTabsActiveTab = 0;
    // Date for preview
    $scope.currentTime = new Date();

    // Collection of scheduled releases
    $scope.scheduledReleases = [];

    // Single instance of scheduled release
    $scope.deployementEvent = {
      dateTime: new Date(),
      networks:{
        'Facebook': false,
        'Twitter': false,
        'LinkedIn': false,
        'Google': false
      }
    };

    // TODO: pull contents from Content API
    $scope.contents = [
      {
        'id': '1',
        'title': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'type': 'Blog',
        'author': 'Karen Peña',
        'publicationDate': new Date('04/15/15 02:30 PM'),
        'url': 'http://perc.li/E450x'
      },
      {
        'id': '2',
        'title': 'Aliquam erat volutpat. Maecenas laoreet fringilla risus, molestie.',
        'type': 'Blog',
        'author': 'Karen Peña',
        'publicationDate': new Date('04/15/15 02:30 PM'),
        'url': 'http://perc.li/HoJ0p'
      },
      {
        'id': '3',
        'title': 'Aliquam erat volutpat. Maecenas laoreet fringilla risus, molestie auctor.',
        'type': 'PDF',
        'author': 'Karen Peña',
        'publicationDate': new Date('04/15/15 02:30 PM'),
        'url': 'http://perc.li/d3Dr4'
      }
    ];

    // TODO: get social accounts from Social Account API
    $scope.socialAccounts = [
      {
        'id': '1',
        'channel': 'Facebook',
        'name': 'Karen Peña',
        'handle': 'karen.pena',
        'avatarUrl': 'http://goo.gl/EFDcA2'
      },
      {
        'id': '2',
        'channel': 'Facebook',
        'name': 'Karen Peña',
        'handle': 'Nightime Solar',
        'avatarUrl': 'http://goo.gl/HDP0Rk'
      },
      {
        'id': '3',
        'channel': 'Twitter',
        'name': 'Karen Peña',
        'handle': 'kpena',
        'avatarUrl': 'http://goo.gl/ozR3mQ'
      },
      {
        'id': '4',
        'channel': 'Google',
        'name': 'Karen Peña',
        'handle': 'Nightime Solar',
        'avatarUrl': 'http://goo.gl/PNoGgd'
      },
      {
        'id': '5',
        'channel': 'LinkedIn',
        'name': 'Karen Peña',
        'handle': 'Nightime Solar',
        'avatarUrl': 'http://goo.gl/tycz5Y'
      }
    ];

    $scope.activeAccounts = [];

    $scope.activeNetworks = {
      'Facebook': 0,
      'Twitter': 0,
      'LinkedIn': 0,
      'Google': 0
    };

    $scope.activeAccountChange = function(action, account){
      if(action){
        // Add account to active accounts
        $scope.activeAccounts.push(account);
        switch(account.channel) {
          case 'Facebook':
            $scope.activeNetworks.Facebook++;
            break;
          case 'Twitter':
            $scope.activeNetworks.Twitter++;
            break;
          case 'LinkedIn':
            $scope.activeNetworks.LinkedIn++;
            break;
          case 'Google':
            $scope.activeNetworks.Google++;
            break;
        }
      } else {
        // Remove account from active accounts
        angular.forEach($scope.activeAccounts, function(value, key){
          if(value.id === account.id){
            $scope.activeAccounts.splice(key, 1);
            switch(account.channel) {
              case 'Facebook':
                $scope.activeNetworks.Facebook--;
                break;
              case 'Twitter':
                $scope.activeNetworks.Twitter--;
                break;
              case 'LinkedIn':
                $scope.activeNetworks.LinkedIn--;
                break;
              case 'Google':
                $scope.activeNetworks.Google--;
                break;
            }
          }
        });
      }
    };

    // Function to increment state
    $scope.incrementState = function(){
      $scope.currentState++;
    };

    // Function to decrement state
    $scope.decrementState = function(){
      $scope.currentState--;
    };

    // Define Editor tabs and html partials
    $scope.editorTabs = {
      'Facebook': {
        'content': '',
        'image': ''
      },
      'Twitter': {
        'content': '',
        'image': ''
      },
      'LinkedIn': {
        'content': '',
        'image': ''
      },
      'Google': {
        'content': '',
        'image': ''
      },
      activeTab: 'Facebook'
    };

    // Define preview tabs and html partials
    $scope.previewTabs  = {
      'Facebook': {
      },
      'Twitter': {
      },
      'LinkedIn': {
      },
      'Google': {
      },
      activeTab: 'Facebook'
    };



    $scope.addScheduledRelease = function(timestamp, networks){
      if(timestamp && networks){
        var newRelease = {
          'id': '1',
          'dateTime': timestamp,
          'networks': {
            'Facebook': networks.Facebook,
            'Twitter': networks.Twitter,
            'LinkedIn': networks.LinkedIn,
            'Google': networks.Google
          }
        };
        $scope.scheduledReleases.push(newRelease);

      }
    };



    $scope.removeRelease = function(index){
      $scope.scheduledReleases.splice(index, 1);
    };


    // Least expensive $watch function for state fixing
    $scope.$watch('currentState', function(newValue){
      // Check to see what networks are available to set the
      // first one as the active tab in the editor and the
      // previewer tabs.

      if(newValue === 3){
        $scope.setActiveTab();
        $scope.userHasEdited = true;

        // Add the title and the minified URL to the body of
        // the post messages.
        if($scope.activeContent.item.title && $scope.activeContent.item.url){
          $scope.setContentForAll($scope.activeContent.item.title + ' ' + $scope.activeContent.item.url);
        } else {
          $scope.setContentForAll('');
        }
      }


    });

    $scope.setContentForAll = function(text){
      $scope.editorTabs.Facebook.content = text;
      $scope.editorTabs.Twitter.content = text;
      $scope.editorTabs.LinkedIn.content = text;
      $scope.editorTabs.Google.content = text;
    };

    $scope.setActiveTab = function(){
      $scope.activeTabDefault = $scope.findActiveNetwork();

      $scope.editorTabs.activeTab = $scope.activeTabDefault;
      $scope.previewTabs.activeTab = $scope.activeTabDefault;
    };

    $scope.findActiveNetwork = function(){
      if($scope.activeNetworks.Facebook > 0){
        $scope.isNoAccountSelected = false;
        return 'Facebook';
      } else if($scope.activeNetworks.Twitter > 0){
        $scope.isNoAccountSelected = false;
        return 'Twitter';
      } else if($scope.activeNetworks.LinkedIn > 0){
        $scope.isNoAccountSelected = false;
        return 'LinkedIn';
      } else if($scope.activeNetworks.Google > 0){
        $scope.isNoAccountSelected = false;
        return 'Google';
      } else {
        // Prevent the user from having zero selected networks.
        $scope.currentState = 2;
        $scope.isNoAccountSelected = true;

        return 'Facebook';
      }
    };


  });

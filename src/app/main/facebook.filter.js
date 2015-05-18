angular.module('crescendoBs')
  .filter('facebook', function () {
    'use strict';
    return function(text){
      var fbHashtag = /(^|\W+)\#([\w\-]+)/gm,
        httpUrl = /(^|\s)((https?:\/\/)?[\w\-]+(\.[\w\-]+)+\.?(:\d+)?(\/\S*)?)/gi,
        checkPrefix = /https?:\/\//;
      // Remove all http:// and https://
      return text.replace(checkPrefix, '')
        // http://
        .replace(httpUrl, '$1<a class="handle" target="_blank">http://$2</a>')
        // #'s
        .replace(fbHashtag, '$1<a class="hashtag" target="_blank">#$2</a>');
    };
  });

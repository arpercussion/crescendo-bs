angular.module('crescendoBs')
  .filter('google', function () {
    'use strict';
    return function (text) {
      var gp = /(^|\W+)\+([\w\-]+)/gm,
        gpHashtag = /(^|\W+)\#([\w\-]+)/gm,
        httpUrl = /(^|\s)((https?:\/\/)?[\w\-]+(\.[\w\-]+)+\.?(:\d+)?(\/\S*)?)/gi,
        checkPrefix = /https?:\/\//;

      // Remove all http:// and https://
      return text.replace(checkPrefix, '')

        // http://
        .replace(httpUrl, '$1<a class="handle" href="http://$2" target="_blank">http://$2</a>')

        // +'s
        .replace(gp, '$1<a class="handle" href="https://plus.google.com/u/0/+$2" target="_blank">+$2</a>')

        // #'s
        .replace(gpHashtag, '$1<a class="hashtag" href="https://plus.google.com/explore/$2" target="_blank">#$2</a>');
    };
  });

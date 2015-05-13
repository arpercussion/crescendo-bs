angular.module('crescendoBs')
  .filter('linkedin', function () {
    return function (text) {
      var httpUrl = /(^|\s)((https?:\/\/)?[\w\-]+(\.[\w\-]+)+\.?(:\d+)?(\/\S*)?)/gi,
        checkPrefix = /https?:\/\//;
      // Remove all http:// and https://
      return text.replace(checkPrefix, '')
        // http://
        .replace(httpUrl, '$1<a class="handle" href="http://$2" target="_blank">http://$2</a>');
    };
  });

angular.module('crescendoBs')
  .filter('twitter', function () {
    return function (text) {
      var twitterAt = /(^|\W+)\@([\w\-]+)/gm,
        twitterHashtag = /(^|\W+)\#([\w\-]+)/gm,
        httpUrl = /(^|\s)((https?:\/\/)?[\w\-]+(\.[\w\-]+)+\.?(:\d+)?(\/\S*)?)/gi,
        checkPrefix = /https?:\/\//;
      // Remove all http:// and https://
      return text.replace(checkPrefix, '')
        // http://
        .replace(httpUrl, '$1<a class="handle">http://$2</a>')
        // @'s
        .replace(twitterAt, '$1<a class="handle">@$2</a>')
        // #'s
        .replace(twitterHashtag, '$1<a class="hashtag">#$2</a>');
    };
  });

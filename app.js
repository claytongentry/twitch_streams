var app = angular.module('TwitchStreamsApp', []);
app.controller('TwitchStreamsController', ['$scope', '$http', function($scope, $http) {

  var channels_arr = ['freecodecamp', 'storbeck', 'terakilobyte', 'habathcx', 'RobotCaleb', 'thomasballinger', 'noobs2', 'ninjas', 'beohoff'];
  var channels = channels_arr.join(',');

  //$http.jsonp('https://api.twitch.tv/kraken/streams?channel=' + channels + '&callback=JSON_CALLBACK')
  $http.jsonp('https://api.twitch.tv/kraken/streams/freecodecamp?callback=JSON_CALLBACK')  
    .then(function(response) {
      $scope.money = response.data;
    }, function(problemo) {
      console.log(problemo);
  });

}]);

var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
  $scope.pin = '';
  //$scope.numbers = 5;
  $scope.updateFn = function(){
  	debugger;
  	alert('PIN :' + $scope.pin)
  }
});
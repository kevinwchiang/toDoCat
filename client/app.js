angular.module('first_app', [])


.controller('toDoListController', function($scope){
  $scope.clicked = true;

  $scope.click = function(){
    $scope.clicked = false;
  }

  $scope.arr = [ {text: "", done: false}, {text: "", done: false}, {text: "", done: false} ];


})

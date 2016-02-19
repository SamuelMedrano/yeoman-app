'use strict';

/**
 * @ngdoc function
 * @name yeomanAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yeomanAppApp
 */
angular.module('yeomanAppApp')
	 .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
	
    $scope.todos = todosInStore || [];
    
    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.editTodo = function(index) {
     $scope.todos[index] = $scope.text;


    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
    $scope.removeTodoAll = function () {
     	$scope.todos = [];
    };
  

  });

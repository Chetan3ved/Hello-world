/**
 * Created with JetBrains PhpStorm.
 * User: pkhruasu
 * Date: 2/2/14
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */

var myApp = angular.module('myApp',['ngRoute',function($routeProvider,$locationProvider){
	$routeProvider.when('/home',{
		templateUrl : 'home.html',
		controller : mainController
	}).when('/firstPage',{
		templateUrl : 'myTemplate.html',
		controller : firstController
	}).when('/secondPage',{
		templateUrl : 'myTemplate.html',
		controller : secondController
	}).when('/thirdPage',{
		templateUrl : 'myTemplate.html',
		controller : thirdController
	}).otherwise({
		redirectTo: '/firstPage'
		});

	// configure html5 to get links working on jsfiddle
	//$locationProvider.html5Mode(true);
}]);

function mainController($scope){
	$scope.name = "home";
}
function firstController($scope){
	$scope.name = "ball";
}

function secondController($scope){
	$scope.name = "boss";
}

function thirdController($scope){
	$scope.name = "boat";
}
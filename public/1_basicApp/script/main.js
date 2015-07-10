/**
 * Created with JetBrains PhpStorm.
 * User: pkhruasu
 * Date: 2/2/14
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */
//create app
var myApp = angular.module('myApp',[]);
//create main controller
myApp.controller('mainController',['$scope',function($scope){
	//create some variables
	$scope.myText = "sawasdee";
	$scope.format = 'M/d/yy h:mm:ss a';
	$scope.word = "ball";
	$scope.name = "Super Ball";
	$scope.bossName = "";
	$scope.myThings = ['one','two','three'];
}]);

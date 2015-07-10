/**
 * Created with JetBrains PhpStorm.
 * User: pkhruasu
 * Date: 2/2/14
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('mainController',['$scope',function($scope){
	$scope.myText = "sawasdee";
	$scope.format = 'M/d/yy h:mm:ss a';
	$scope.word = "ball";
	$scope.name = "Super Ball";
	$scope.bossName = "";
}]);

myApp.directive('myCurrentTime', function($interval, dateFilter) {

	function link(scope, element, attrs) {
		var format,
			timeoutId;

		function updateTime() {
			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.myCurrentTime, function(value) {
			format = value;
			updateTime();
		});

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		// start the UI update process; save the timeoutId for canceling
		timeoutId = $interval(function() {
			updateTime(); // update DOM
		}, 1000);
	}

	return {
		link: link
	};
});
/*
myApp.directive('myDialog',function($interval){

	return {
		link : function(scope, element, attrs) {

			var text;
			var directiveId;

			scope.$watch(attrs.myDialog, function(value){
				text = value;
				updateText();
			});

			function updateText(){
				element.text(element.text() + text);
			}

			directiveId = $interval(function(){
				updateText();
			},1000);

			element.on('$destroy',function(){
				$interval.cancel(directiveId);
			});
		}
	}
});
	*/

myApp.directive('myCounter',function($interval){
	return {
		link : function link(scope,element,attrs){
			var num = 0,numId;


			function addCounter(){
				num++;
				element.text(num);
			}

			numId = $interval(function(){
				addCounter();
			},1000);

			element.on('$destroy',function(){
				$interval.cancel(numId);
			});
		}
	}
});

myApp.directive('myWrapper',function(){
	return {
		restrict : 'E',
		transclude : false,
		scope : {},
		templateUrl : 'myWrapperTemplate.html',
		link : function(scope,element){
			scope.name = "Ball";
		}
	}
});

myApp.run(function($rootScope){
	$rootScope.bossName = "bsss sa";

});
window.app = myApp;
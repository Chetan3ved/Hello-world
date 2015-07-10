/**
 * Created with JetBrains PhpStorm.
 * User: pkhruasu
 * Date: 2/2/14
 * Time: 10:15 AM
 * To change this template use File | Settings | File Templates.
 */

//var serviceModule = angular.module('serviceModule',[]).
//	value('serviceStuff',
//	{
//		serviceValue : 'service_value',
//		myTemplate : function(value){
//			return "my template is" + value + ", yes?";
//		}
//	}
//);

//var serviceModule = angular.module('serviceModule',[]).
//	value('serviceStuff',
//	{
//		serviceValue : 'service_value',
//		myTemplate : function(value,$http){
//			$http.get('myTemplate.html').success(function(data){
//				console.log('get template success');
//			}).error();
//			return "my template is" + value + ", yes?";
//		}
//	}
//);

"use strict";

var serviceModule = angular.module('serviceModule',[])

serviceModule.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);

serviceModule.service('serviceStuff',['$http',function($http){
//		console.log($http);
		var serf = {
			serviceValue : 'service_value',
			myTemplate : function(value){
//				$http.get("myWrapperTemplate.html").success();
				return "my template is" + value + ", yes?";
			}
		};

		return serf;
	}]
);

var myApp = angular.module('myApp',['serviceModule']);


myApp.controller('mainController',["$scope","serviceStuff",function($scope,serviceStuff){
	$scope.myText = "sawasdee";
	$scope.format = 'M/d/yy h:mm:ss a';
	$scope.word = "ball";
	$scope.name = "Super Ball";
	$scope.bossName = "";
	$scope.serviceName = serviceStuff.serviceValue;
	$scope.myTemplate = serviceStuff.myTemplate('ball');
}]);
//function mainController($scope,serviceStuff){
//	$scope.myText = "sawasdee";
//	$scope.format = 'M/d/yy h:mm:ss a';
//	$scope.word = "ball";
//	$scope.name = "Super Ball";
//	$scope.bossName = "";
//	$scope.serviceName = serviceStuff.serviceValue;
//	$scope.myTemplate = serviceStuff.myTemplate('ball');
//}

myApp.directive('myWrapper',function(){
	return {
		restrict : 'E',
		transclude : true,
		scope : {},
		templateUrl : 'myWrapperTemplate.html',
		link : function(scope,element){
			scope.name = "Ball";
		}
	}
});

//
//myApp.controller('mainController',['$scope',function($scope,serviceModule){
//	$scope.myText = "sawasdee";
//	$scope.format = 'M/d/yy h:mm:ss a';
//	$scope.word = "ball";
//	$scope.name = "Super Ball";
//	$scope.bossName = "";
//	$scope.serviceName = serviceModule.serviceValue;
//}]);



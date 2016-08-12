// get rob's notes from guthub
var navRoutes = angular.module('navRoutes', ['ngRoute', 'ngAnimate']);

navRoutes.controller('navController', function($scope, $http){
	$scope.message = "This is the nav controller message!!";
});

navRoutes.config(function($routeProvider){
	$routeProvider.when('/locations',{
		templateUrl: 'templates/locations.html',
		controller: 'locationsController'
	});
	$routeProvider.when('/contact',{
		templateUrl: 'templates/contact.html',
		controller: 'contactController'
	});
	$routeProvider.when('/about',{
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});
	$routeProvider.otherwise('#');
});
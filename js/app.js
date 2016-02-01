
var app = angular.module('App',['ngRoute','ngAnimate'])

app.config(function($routeProvider,$locationProvider) {
$routeProvider
		.when('/', {
		templateUrl:'partials/main.html',
		controller:"ControllerOne"

	}).when('/checkout', {
		templateUrl:'partials/checkout.html',
		controller:"ControllerTwo"

	}).otherwise({
		redirectTo:'/'

	})

	// $locationProvider.html5Mode(true);
})
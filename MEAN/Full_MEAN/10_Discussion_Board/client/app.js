const app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/login.html',
			controller: 'userController'
		})
		.when('/dash', {
			templateUrl: '/static/partials/dash.html',
			controller: 'dashController'
		})
		.when('/user/:id', {
			templateUrl: '/static/partials/user.html',
			controller: 'userController'
		})
		.when('/question/:id', {
			templateUrl: '/static/partials/question.html',
			controller: 'questionController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

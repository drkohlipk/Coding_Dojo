const app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/index', {
			templateUrl: '/static/partials/createUser.html',
			controller: 'IndexController'
		})
		.when('/edit/:id', {
			templateUrl: '/static/partials/edit.html',
			controller: 'EditController',
			controllerAs: 'eC'
		})
		.when('/new', {
			templateUrl: '/static/partials/new.html',
			controller: 'NewController',
		})
		.otherwise({
			redirectTo: '/index'
		});
});

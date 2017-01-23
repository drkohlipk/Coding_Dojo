const app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/new', {
			templateUrl: '/static/partials/new.html'
		})
		.when('/edit', {
			templateUrl: '/static/partials/edit.html'
		})
		.otherwise({
			redirectTo: '/new'
		});
});

const app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/dash.html',
			controller: 'dashController'
		})
		.when('/new', {
			templateUrl: '/static/partials/new.html',
			controller: 'newController'
		})
		.when('/edit/:id', {
			templateUrl: '/static/partials/edit.html',
			controller: 'editController'
		})
		.when('/show/:id', {
			templateUrl: '/static/partials/show.html',
			controller: 'showController'
		})
		.otherwise({
			redirectTo: '/new'
		});
});

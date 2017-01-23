const app = angular.module('app', ['ngRoute', 'ngMessages']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/new', {
			templateUrl: '/static/partials/new.html',
			controller: 'newController'
		})
		.when('/edit/:id', {
			templateUrl: '/static/partials/edit.html',
			controller: 'editController'
		})
		.otherwise({
			redirectTo: '/new'
		});
});

Date.prototype.toDateInputValue = (function() {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
});

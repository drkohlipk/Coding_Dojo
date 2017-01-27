const app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/dash.html'
		})
		.when('/customers', {
			templateUrl: '/static/partials/customers.html',
			controller: 'customerController'
		})
		.when('/orders', {
			templateUrl: '/static/partials/orders.html'
		})
		.when('/products', {
			templateUrl: '/static/partials/prods.html',
			controller: 'prodController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

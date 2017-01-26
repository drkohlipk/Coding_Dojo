const app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/dash.html',
			controller: 'dashController'
		})
		.when('/customers', {
			templateUrl: '/static/partials/customers.html',
			controller: 'customerController'
		})
		.when('/orders', {
			templateUrl: '/static/partials/orders.html',
			controller: 'orderController'
		})
		.when('/products', {
			templateUrl: '/static/partials/prods.html',
			controller: 'prodController'
		})
		.otherwise({
			redirectTo: '/'
		});
});

const app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/static/partials/login.html',
			controller: 'loginController'
		})
		.when('/dash', {
			templateUrl: '/static/partials/dash.html',
			controller: 'messagesController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

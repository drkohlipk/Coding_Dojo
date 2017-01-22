const app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/users', {
            templateUrl: './partials/customizeUsers.html',
            controller: 'CustomizeUsersController'
        })
        .when('/list', {
            templateUrl: './partials/userList.html',
            controller: 'UserListsController'
        })
        .otherwise({
            redirectTo: '/list'
        });
});

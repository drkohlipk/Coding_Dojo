app.controller('UserListsController', ['$scope', 'userFactory', function(
    $scope, userFactory) {
    $scope.users = [];
    $scope.order = 'firstName';
    $scope.changeOrder = order => {
        $scope.order = order;
    };
    userFactory.getUsers(data => {
        $scope.users = data;
    });
}]);

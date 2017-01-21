app.controller('divController', function($scope) {
    $scope.foodList = ['Pizza', 'BBQ', 'Fries', 'Salad', 'Steak'];

    $scope.addToList = function() {
        $scope.foodList.push($scope.foodText);
        $scope.foodText = '';
        document.getElementById('foodText').focus();
    };

    document.getElementById('foodText').focus();
});

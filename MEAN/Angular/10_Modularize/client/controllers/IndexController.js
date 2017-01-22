app.controller('IndexController', ['$scope', 'userFactory', '$location',
	function($scope, userFactory, $location) {
		$scope.users = [];

		const usersIndex = () => {
			userFactory.index(usersFromTheFactory => {
				$scope.users = usersFromTheFactory;
			});
		};

		$scope.show = user_id => {
			$location.url('/edit/' + user_id);
		};

		usersIndex();
	}
]);

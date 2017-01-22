app.controller('PlayersController', ['$scope', '$location', 'playerFactory',
	function($scope, $location, playerFactory) {
		$scope.players = [];
		$scope.order = 'name';
		$scope.addPlayer = () => {
			$scope.player.team = {};
			playerFactory.createPlayer($scope.player);
			$scope.player = {};
			document.getElementById('playerCursor').focus();
		};
		$scope.changeOrder = order => {
			$scope.order = order;
		};
		$scope.deletePlayer = player => {
			playerFactory.removePlayer(player);
		};
		playerFactory.getPlayers(data => {
			$scope.players = data;
		});
		document.getElementById('playerCursor').focus();
	}
]);

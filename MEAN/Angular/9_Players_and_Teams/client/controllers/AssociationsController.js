app.controller('AssociationsController', ['$scope', '$location', 'teamFactory',
	'playerFactory',
	function($scope, $location, teamFactory, playerFactory) {
		$scope.teams = [];
		$scope.selectTeam = {};
		$scope.players = [];
		$scope.associations = [];
		$scope.selectPlayer = {};
		$scope.order = 'name';
		$scope.changeOrder = order => {
			$scope.order = order;
		};
		$scope.makeAssociation = () => {
			playerFactory.makeAssoc($scope.selectPlayer, $scope.selectTeam);
			$scope.populateAssoc();
		};
		$scope.clearTeam = player => {
			playerFactory.clearAssoc(player);
		};
		$scope.populateAssoc = () => {
			$scope.associations = [];
			for (let i = 0; i < $scope.players.length; i++) {
				for (let j = 0; j < $scope.teams.length; j++) {
					if ($scope.players[i]._teamId == $scope.teams[j].id) {
						$scope.players[i].team = $scope.teams[j];
						break;
					} else if ($scope.players[i]._teamId > 0 && j == $scope.teams.length -
						1) {
						$scope.players[i]._teamId = 0;
						$scope.players[i].team = {};
					}
				}
				$scope.associations.push($scope.players[i]);
			}
		};
		playerFactory.getPlayers(data => {
			$scope.players = data;
			$scope.selectPlayer = data[0];
		});
		teamFactory.getTeams(data => {
			$scope.teams = data;
			$scope.selectTeam = data[0];
		});
		$scope.populateAssoc();
	}
]);

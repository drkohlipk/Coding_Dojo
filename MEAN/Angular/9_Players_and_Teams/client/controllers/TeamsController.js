app.controller('TeamsController', ['$scope', '$location', 'teamFactory',
	function($scope, $location, teamFactory) {
		$scope.teams = [];
		$scope.order = 'name';
		$scope.addTeam = () => {
			teamFactory.createTeam($scope.team);
			$scope.team = {};
			document.getElementById('teamCursor').focus();
		};
		$scope.changeOrder = order => {
			$scope.order = order;
		};
		$scope.deleteTeam = team => {
			teamFactory.removeTeam(team);
		};
		teamFactory.getTeams(data => {
			$scope.teams = data;
		});
		document.getElementById('teamCursor').focus();
	}
]);

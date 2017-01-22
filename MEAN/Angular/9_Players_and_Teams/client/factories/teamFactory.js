app.factory('teamFactory', () => {
	let teams = [];
	let idTracker = 0;
	let factory = {
		createTeam: team => {
			team.id = ++idTracker;
			teams.push(team);
		},
		getTeams: cb => {
			cb(teams);
		},
		removeTeam: team => {
			teams.splice(teams.indexOf(team), 1);
		}
	};
	return factory;
});

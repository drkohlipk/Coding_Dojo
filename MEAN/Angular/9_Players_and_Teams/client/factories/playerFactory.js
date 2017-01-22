app.factory('playerFactory', () => {
	let players = [];
	let factory = {
		createPlayer: player => {
			player._teamId = 0;
			players.push(player);
		},
		getPlayers: cb => {
			cb(players);
		},
		clearAssoc: (player) => {
			players[players.indexOf(player)].team = '';
			players[players.indexOf(player)]._teamId = 0;
		},
		makeAssoc: (player, team) => {
			players[players.indexOf(player)]._teamId = team.id;
		},
		removePlayer: player => {
			players.splice(players.indexOf(player), 1);
		}
	};
	return factory;
});

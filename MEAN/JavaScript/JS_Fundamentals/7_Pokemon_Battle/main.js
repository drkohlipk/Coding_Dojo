$(document).ready(() => {
	class Game {
		constructor () {
			this.players = [];
			this.addPlayer = (name) => {
				var myPlayer = player(name);
				this.players.push(myPlayer);
			};
		}
	}

	class Player {
		constructor (name) {
			this.name = name;
			this.card = null;
			this.hand = [];
			this.addCard = card => {
				this.hand.push(card);
			};
		}
	}

	class Card {
		constructor (name, attack) {
			this.name = name;
			this.attack = attack;
		}
	}

	var game = new Game();

	$('#ajax').click(() => {
		let player1;
		let player2;
		let rando1 = Math.floor(Math.random() * 779);
		let rando2 = Math.floor(Math.random() * 779);
		$.ajax({
			url: 'http://pokeapi.co/api/v1/pokemon/?limit=1&offset=' + rando1,
			success: result => {
				player1 = new Player(result.objects[0].name);
				game.addPlayer(player1);
				player1.addCard(new Card(result.objects[0].name, result.objects[0].attack));
			}
		});
		$.ajax({
			url: 'http://pokeapi.co/api/v1/pokemon/?limit=1&offset=' + rando2,
			success: result => {
				player2 = new Player(result.objects[0].name);
				game.addPlayer(player2);
				player2.addCard(new Card(result.objects[0].name, result.objects[0].attack));
				if (player1.hand[0].attack > player2.hand[0].attack) {
					$('main h1').innerHTML('Player 1 wins!');
				} else {
					$('main h1').innerHTML('Player 2 wins!');
				}
			}
		});

	});
});

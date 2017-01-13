$(document).ready(() => {

	var game;

	class Player {
		constructor(name) {
			this.name = name;
			this.card = null;
			this.hand = [];
			this.addCard = card => {
				this.hand.push(card);
			};
		}
	}

	class Game {
		constructor() {
			this.players = [];
			this.addPlayer = name => {
				var myPlayer = new Player(name);
				this.players.push(myPlayer);
			};
			this.displayCards = () => {
				$('#imgHldr').show();
				for (let i = 0; i < this.players.length; i++) {
					var player = this.players[i];
					for (let j = 0; j < player.hand.length; j++) {
						$(`#pl${i+1}`).append(
							`<div class="poke"><img src="${player.hand[j].pic}" alt="${player.hand[j].name}"/><h5>${player.hand[j].name}</h5></div>`
						);
					}
				}
			};
			// this.battle = () => {
			// 	if (player1.hand[0].attack > player2.hand[0].attack) {
			// 		$('main h1').text('Player 1 wins!');
			// 	} else {
			// 		$('main h1').text('Player 2 wins!');
			// 	}
			// };
		}
	}

	class Card {
		constructor(name, attack, pic) {
			this.name = name;
			this.attack = attack;
			this.pic = pic;
		}
	}

	function start_game() {
		game = new Game();
		game.addPlayer('p1');
		game.addPlayer('p2');
		$('#start').attr('id', 'ajax');
		$('#ajax').text('Poke Battle!');
	}

	$('#start').click(() => {
		start_game();
		for (let i = 0; i < 6; i++) {
			for (let j = 0; j < 2; j++) {
				let rando1 = Math.floor(Math.random() * 151);
				$.ajax({
					url: `http://pokeapi.co/api/v2/pokemon/${rando1}/`,
					success: result => {
						game.players[j].addCard(new Card(result.name, result.stats[4].base_stat,
							result
							.sprites.front_default
						));
						if (i == 5 && j == 1) {
							game.displayCards();
						}
					}
				});
			}
		}
	});
});

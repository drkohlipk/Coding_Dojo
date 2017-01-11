var suits = ['hearts', 'spades', 'diamonds', 'clubs']; //suits to choose from
var face = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; //face values to choose from

class Card {
	constructor(name, suit, val) {
		this.name = name;
		this.suit = suit;
		this.val = val;
	}
}

class Deck {
	constructor(suits, face) {
		this.deck = [];
		this.reset = (suits, face) => { //populates deck based on the suits and face values passed
			for (let i = 0; i < suits.length; i++) { //for every suit in the array...
				for (let j = 0; j < face.length; j++) { //for every face in the face array...
					if (!isNaN(parseInt(face[j]))) { //if the parsed face value is a number...
						this.deck.push(new Card(face[j], suits[i], parseInt(face[j]))); //push that parsed face value along with the appropriate suit and face as a new card to the deck
					} else if (face[j] == 'J' || face[j] == 'Q' || face[j] == 'K') { //if the parsed face value is a Jack, Queen, or King...
						this.deck.push(new Card(face[j], suits[i], 10)); //push 10 as the face value
					} else { //otherwise, (if it's an Ace)...
						this.deck.push(new Card(face[j], suits[i], 11)); //push 11 as the face value
					}
				}
			}
		};
		this.reset(suits, face); //call reset on object instantiation
		this.shuffle = () => { //shuffles the deck
			var currIdx = this.deck.length; //set the current index to the length of the deck
			while (0 !== currIdx) { //while current index is not 0...
				let randIdx = Math.floor(Math.random() * currIdx); //generate a random index number between the beginning of the deck and the current index (exclusive)
				currIdx -= 1; //decrease the current index by 1
				let temp = this.deck[currIdx]; //create a temp variable to store the value at the current index of the deck
				this.deck[currIdx] = this.deck[randIdx]; //set the current index value to that at the random index value
				this.deck[randIdx] = temp; //set the value at the random index to that of the value currently stored in temp
			}
		};
		this.deal = () => { //deals the deck (returns the card from the end of the deck array)
			return this.deck.pop();
		};
	}
}

class Player {
	constructor(name) {
		this.name = name;
		this.hand = [];

		this.takeCard = deal => { //builds the player's hand using the deck.deal function or through something else passed to the hand
			var card;
			if (typeof(deal) == 'function') { //if it IS a function that is passed...
				card = deal(); //then run that function and store the returned value in card
			} else { //if it's not a function...
				card = deal; //set that value to card
			}
			this.hand.push(card); //push card to the player's hand
		};
		this.discard = () => { //discards the topmost card from the hand
			this.hand.pop();
		};
	}
}


var deck = new Deck(suits, face);
var player = new Player('PJ');
deck.shuffle();
var card = deck.deal;
player.takeCard(card);
console.log(deck.deck);

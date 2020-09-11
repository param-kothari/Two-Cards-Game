function makeDeck() {
	this.deck = [];
	let card = (suit, value, rank) => {
		this.suit = suit;
		this.value = value;
		this.rank = rank;
		this.name = value + ' of ' + suit; 
		return {
			name:this.name, value:this.value, suit:this.suit, rank:this.rank
		};
	};
	var ranks = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
	var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
	var i = 0, j = 0;
	for (i = 0; i < suits.length; i++) {
		for (j = 0; j < values.length; j++) {
			this.deck.push(card(suits[i], values[j], ranks[j]));
		}
	}
}

var deckOfCards = new makeDeck();
var repeatGame = 0;


makeDeck.prototype.shuffleDeck = function () {
	var size = 52, i = 0, temp;
	while (size) {
		i = Math.floor (Math.random() * size--);
		temp = this.deck[size];
		this.deck[size] = this.deck[i];
		this.deck[i] = temp;
	}
}

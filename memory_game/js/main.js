// code for JS 
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

const cardsInPlay = [];

function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

function flipCard() { 
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].rank)
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	cards.setAttribute(src + this.cardImage);

	if(cardsInPlay.length === 2){
		checkForMatch();	
	} 
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		const cardElement = document.createElement('img')
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard()








const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push('cardOne');
var cardTwo = cards[2];
cardsInPlay.push('cardTwo');

// If user flips cardOne and CardThree: You got a match!
// If user flips cardTwo and cardFour: You got a match!
// Otherwise: Try Again

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardsInPlay === cards[0] && cards[3]) {
	alert('You got a match!');
} else if (cardsInPlay === cards[2] && cards[4]) {
	alert('You got a match!');
} else 
	alert('Try Again!');


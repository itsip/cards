# cards 
Simple JS playing card library

## Usage
```js
const cards = require('cards');

// Generate a new sorted deck of cards
const deck = cards.getDeck();

// Shuffle the deck
deck.shuffle();

// Get a new shuffled deck of cards
const shuffledDeck = cards.getShuffledDeck();

// Draw top card from deck
const card = deck.draw();

// Get card values
const rank = card.rank;
const suit = card.suit;
const value = card.value;

// Draw random card from deck
const randomCard = deck.drawRandom();

// Generate an empty hand
const hand = cards.getHand();

// Append card to a hand
hand.add(card);
```

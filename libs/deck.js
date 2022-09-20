const _ = require('lodash');
const Card = require('./card');

const suits = [
  'hearts',
  'diamonds',
  'clubs',
  'spades',
];

const ranks = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

class Deck {
  constructor() {
    this.cards = [];
  }

  generate() {
    _.forEach(suits, (suit) => {
      _.forEach(ranks, (rank, value) => {
        this.cards.push(new Card(rank, suit, value));
      });
    });
  }

  update(deck) {
    this.cards = deck.cards;
  }

  shuffle() {
    this.cards = _.shuffle(this.cards);
  }

  draw() {
    return this.cards.shift();
  }

  drawRandom() {
    return _.sample(this.cards);
  }

  add(card) {
    this.cards.push(card);
  }

  sortBy(value) {
    this.cards = _.sortBy(this.cards, value);
  }

  getSize() {
    return this.cards.length;
  }
}

module.exports = Deck;

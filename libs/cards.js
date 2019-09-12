const Card = require('./card');
const Deck = require('./deck');
const Hand = require('./hand');

class Cards {
  getHand() {
    const hand = new Hand();

    return hand;
  }

  getDeck() {
    const deck = new Deck();
    deck.generate();

    return deck;
  }

  getShuffledDeck() {
    const deck = this.getDeck();
    deck.shuffle();

    return deck;
  }
}

module.exports = new Cards;

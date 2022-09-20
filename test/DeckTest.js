const _ = require('lodash');
const assert = require('assert');
const Deck = require('../libs/deck');
const Card = require('../libs/card');

describe('Deck', function() {
  describe('#constructor()', function() {
    const deck = new Deck();

    it('should be empty', function() {
      assert.equal(deck.cards.length, 0);
    });
  });

  describe('#generate()', function() {
    const deck = new Deck();
    deck.generate();

    it('should have 52 cards', function() {
      assert.equal(deck.cards.length, 52);
    });

    it('should have 13 hearts', function() {
      const numOfHearts = _.filter(deck.cards, ['suit', 'hearts']).length;
      assert.equal(numOfHearts, 13);
    });

    it('should have 13 diamonds', function() {
      const numOfDiamonds = _.filter(deck.cards, ['suit', 'diamonds']).length;
      assert.equal(numOfDiamonds, 13);
    });

    it('should have 13 spades', function() {
      const numOfSpades = _.filter(deck.cards, ['suit', 'spades']).length;
      assert.equal(numOfSpades, 13);
    });

    it('should have 13 clubs', function() {
      const numOfClubs = _.filter(deck.cards, ['suit', 'clubs']).length;
      assert.equal(numOfClubs, 13);
    });
  });

  describe('#shuffle()', function() {
    const deck = new Deck();
    deck.generate();
    deck.shuffle();

    it('should be shuffled', function() {
      const unshuffledDeck = new Deck();
      unshuffledDeck.generate();

      assert.ok(!_.isEqual(unshuffledDeck, deck));
    });

    it('should have 52 cards', function() {
      assert.equal(deck.cards.length, 52);
    });

    it('have the same cards', function() {
      //todo
    });
  });

  describe('#draw()', function() {
    const deck = new Deck();
    deck.generate();
    deckSize = deck.cards.length;
    card = deck.cards[0];
    originalCardSearch = _.filter(deck.cards, {'rank': card.rank, 'suit': card.suit, 'value': card.value});
    topCard = deck.draw();

    it('should take the first card', function() {
      assert.equal(card.rank, topCard.rank);
      assert.equal(card.suit, topCard.suit);
      assert.equal(card.value, topCard.value);
    });

    it('the card should not be in the deck', function() {
      originalCardSearch = _.filter(deck.cards, {'rank': topCard.rank, 'suit': topCard.suit, 'value': topCard.value});
      assert.equal(originalCardSearch.length,  0);
    });

    it('should reduce the size of the deck by 1', function() {
      newDeckSize = deck.cards.length;
      assert.equal(newDeckSize, deckSize - 1);
    });
  });

  describe('#add()', function() {
    const deck = new Deck();
    const rank = '8';
    const suit = 'clubs';
    const value = 6;
    const card = new Card(rank, suit, value);
    deck.generate();
    deck.add(card);

    it('should have the new card', function() {
      cardSearch = _.filter(deck.cards, {'rank': rank, 'suit': suit, 'value': value});

      assert.equal(cardSearch.length, 2);
    });

    it('should have new card at bottom of deck', function() {
      assert.equal(_.last(deck.cards).rank, rank);
      assert.equal(_.last(deck.cards).suit, suit);
      assert.equal(_.last(deck.cards).value, value);
    });

    it('should have 53 cards', function() {
      assert.equal(deck.cards.length, 53);
    });
  });
});

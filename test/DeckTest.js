const _ = require('lodash');
const assert = require('assert');
const Deck = require('../libs/deck');

describe('Deck', function() {
  const deck = new Deck();

  describe('#generate()', function() {
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
    it('should be shuffled', function() {
      const unshuffledDeck = new Deck();
      unshuffledDeck.generate();
      deck.shuffle();

      assert.ok(!_.isEqual(unshuffledDeck, deck));
    });
  });
});

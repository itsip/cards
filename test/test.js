const _ = require('lodash');
const assert = require('assert');
const Cards = require('../libs/cards');

describe('Cards', function() {
  const cards = Cards;

  describe('#getDeck()', function() {
    const deck = cards.getDeck();

    it('should return 52 cards', function() {
      assert.equal(deck.cards.length, 52);
    });

    it('should return 13 hearts', function() {
      const numOfHearts = _.filter(deck.cards, ['suit', 'hearts']).length;
      assert.equal(numOfHearts, 13);
    });

    it('should return 13 diamonds', function() {
      const numOfDiamonds = _.filter(deck.cards, ['suit', 'diamonds']).length;
      assert.equal(numOfDiamonds, 13);
    });

    it('should return 13 spades', function() {
      const numOfSpades = _.filter(deck.cards, ['suit', 'spades']).length;
      assert.equal(numOfSpades, 13);
    });

    it('should return 13 clubs', function() {
      const numOfClubs = _.filter(deck.cards, ['suit', 'clubs']).length;
      assert.equal(numOfClubs, 13);
    });
  });
});

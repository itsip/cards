const _ = require('lodash');
const assert = require('assert');
const Cards = require('../libs/cards');

describe('Cards', function() {
  const cards = Cards;

  describe('#getDeck()', function() {
    const deck = cards.getDeck();

    it('should return a deck', function() {
      assert.equal(deck.constructor.name, 'Deck');
    });
  });
});

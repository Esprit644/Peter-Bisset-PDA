require('minitest/autorun')
require('minitest/rg')
require_relative('card_game.rb')
require_relative('card.rb')

require('pry')

class TestCardGame < Minitest::Test


  def setup
    @hand1 = Card.new("diamonds",1)
    @hand2 = Card.new("clubs",3)
    @hand3 = Card.new("spades",6)
    @hand4 = Card.new("club",4)
  end


  def test_check_for_ace()
    assert_equal(true, CardGame.check_for_ace(@hand1))
  end

  def test_highest_card()
    assert_equal(6, CardGame.highest_card(@hand3.value, @hand2.value))
  end

  def test_cards_total()
    cards = [@hand1, @hand2]
    assert_equal("You have a total of 4", CardGame.cards_total(cards))
  end

end

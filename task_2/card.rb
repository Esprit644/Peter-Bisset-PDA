require_relative('card_spec.rb')
require_relative('card_game.rb')

class Card

  attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value
  end

  
end

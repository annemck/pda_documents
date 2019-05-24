require_relative('testing_task_2.rb')
require_relative('card.rb')
require('minitest/autorun')
require('minitest/rg')

class TestCardGame < MiniTest::Test
  
  
  def setup
    @card1 = Card.new('Spades', 1)
    @card2 = Card.new('Clubs', 9)
  end
  
  def test_check_for_ace_true()
    assert_equal(true, CardGame.check_for_ace(@card1))
  end
  
  def test_check_for_ace_false()
    assert_equal(false, CardGame.check_for_ace(@card2))
  end
  
  def test_highest_card()
    assert_equal(@card2, CardGame.highest_card(@card1, @card2))
  end
  
  def test_cards_total()
    cards = [@card1, @card2]
    assert_equal("You have a total of 10", CardGame.cards_total(cards))
  end
  
end

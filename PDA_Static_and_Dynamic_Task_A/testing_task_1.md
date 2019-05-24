### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


# not quite error, but ruby usually uses snake case for method names
# shouldn't this be self.check_for_ace(card)
  def checkforAce(card)
# should be ==
    if card.value = 1
      return true
    else
      return false
    end
  end


# mis-spelling of def
# again, shouldn't it be self.highest_card
# no comma between the arguments
  dif highest_card(card1 card2)
  if card1.value > card2.value
# there is no .name method
    return card.name
  else
    card2
  end
end
# extra end
end

def self.cards_total(cards)
# nothing to establish total as a variable
  total
# no do keyword in for loop
  for card in cards
    total += card.value
# no space will be between of and the total
# total will always be value of first card, return should be after end
    return "You have a total of" + total
  end
end

# no end keyword for class
```

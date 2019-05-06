### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)           #Should be written as 'check_for_ace'
    if card.value = 1             #Should be ==1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)   #should be 'def' not 'dif'. Should have a comma between
  if card1.value > card2.value   
    return card                   #should be card1
  else
    return card2
  end
end
end                               #an extra 'end'

def self.cards_total(cards)
  total                           #'total' variable has not had a value assigned.
  for card in cards
    total += card.value
    return "You have a total of" + total #should have .to_s added after total.
  end
end
                                  # This line should be the closing 'end' for the Class.
```                               

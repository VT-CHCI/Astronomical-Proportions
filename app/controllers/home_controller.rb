class HomeController < ApplicationController
  def index
  	@people = Person.all
  	@itemsDict = {}
    i = 0
  	for person in @people
      items = Item.where(:person_id => person.id)
      if items.length > 0
  		  @itemsDict[i+=1] = items
      end
  	end
  end
end

class HomeController < ApplicationController
  def index
  	@people = Person.all
  	@itemsDict = {}

  	for person in @people
      items = Item.where(:person_id => person.id)
      if items.length > 0
  		  @itemsDict[person] = items
      end
  	end
  end
end

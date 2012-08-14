class HomeController < ApplicationController
  def index
  	@people = Person.all
  	@itemsDict = {}

  	for person in @people
  		@itemsDict[person] = Item.where(:person_id => person.id)
  	end
  end
end

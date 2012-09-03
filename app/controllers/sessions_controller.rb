class SessionsController < Devise::SessionsController
	def create
    super
    if person_signed_in?
    	cookies.permanent[:last_person_id] = current_person.id
    end
  end
end
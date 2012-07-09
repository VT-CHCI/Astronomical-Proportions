class Permission < ActiveRecord::Base
	has_many_and_belongs_to:people
	has_and_belongs_to_many:roles
end

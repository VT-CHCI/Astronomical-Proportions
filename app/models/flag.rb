class Flag < ActiveRecord::Base
  belongs_to :item
  belongs_to :person
end

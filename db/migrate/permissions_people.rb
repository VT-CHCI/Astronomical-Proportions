#add Roles to Person roles:has_and_belongs_to_many 
create_table :permissions_people, :id => false do |t|
t.integer :permission_id
t.integer :person_id
end 
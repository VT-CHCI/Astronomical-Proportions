#add Roles to Person roles:has_and_belongs_to_many 
create_table :people_roles, :id => false do |t|
t.integer :person_id
t.integer :role_id
end 
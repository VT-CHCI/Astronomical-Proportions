#add Roles to Person roles:has_and_belongs_to_many 
create_table :courses_people, :id => false do |t|
t.integer :course_id
t.integer :person_id
end 
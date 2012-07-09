#add Roles to Person roles:has_and_belongs_to_many 
create_table :courses_items, :id => false do |t|
t.integer :course_id
t.integer :item_id
end 
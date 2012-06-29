class CreateCourses < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :title
      t.string :password
      t.string :firstName
      t.string :lastName
      t.date :start
      t.date :end

      t.timestamps
    end
  end
end

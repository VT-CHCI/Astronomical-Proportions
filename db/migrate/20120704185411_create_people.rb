class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :password
      t.string :firstName
      t.string :lastName

      t.timestamps
    end
  end
end

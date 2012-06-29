class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :article
      t.string :filename
      t.float :diameter
      t.float :length
      t.float :width
      t.float :height
      t.float :area
      t.float :volume
      t.references :person

      t.timestamps
    end
    add_index :items, :person_id
  end
end

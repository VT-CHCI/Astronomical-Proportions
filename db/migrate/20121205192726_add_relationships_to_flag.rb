class AddRelationshipsToFlag < ActiveRecord::Migration
  def self.up
    change_table(:flags) do |t|
      t.belongs_to :item
      t.belongs_to :person
    end
  end
end

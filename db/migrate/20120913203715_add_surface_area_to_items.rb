class AddSurfaceAreaToItems < ActiveRecord::Migration
  def self.up
		change_table(:items) do |t|
			t.float :surface_area
		end
	end

	def self.down
		remove_column :items, :surface_area
	end
end

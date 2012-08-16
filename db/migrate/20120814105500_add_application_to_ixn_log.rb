# add application relationship to ixn_log
class AddApplicationToIxnLog < ActiveRecord::Migration
	def self.up
		change_table(:interaction_logs) do |t|
			t.belongs_to :application
		end
	end

	def self.down
		remove_column :application
	end
end
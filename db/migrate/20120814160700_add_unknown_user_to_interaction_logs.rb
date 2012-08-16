class AddUnknownUserToInteractionLogs < ActiveRecord::Migration
	def self.up
		change_table(:interaction_logs) do |t|
			t.text :unknown_user_details
		end
	end

	def self.down
		remove_column :unknown_user_details
	end
end
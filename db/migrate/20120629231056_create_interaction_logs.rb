class CreateInteractionLogs < ActiveRecord::Migration
  def change
    create_table :interaction_logs do |t|
      t.belongs_to :person
      t.references :logType
      t.time :time
      t.text :details

      t.timestamps
    end
    add_index :interaction_logs, :person_id
    add_index :interaction_logs, :logType_id
  end
end

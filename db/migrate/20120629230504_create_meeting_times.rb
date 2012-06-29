class CreateMeetingTimes < ActiveRecord::Migration
  def change
    create_table :meeting_times do |t|
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.boolean :saturday
      t.boolean :sunday
      t.time :start
      t.time :end
      t.references :course

      t.timestamps
    end
    add_index :meeting_times, :course_id
  end
end

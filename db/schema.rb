# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120629231056) do

  create_table "courses", :force => true do |t|
    t.string   "title"
    t.string   "password"
    t.string   "firstName"
    t.string   "lastName"
    t.date     "start"
    t.date     "end"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "interaction_logs", :force => true do |t|
    t.integer  "person_id"
    t.integer  "logType_id"
    t.time     "time"
    t.text     "details"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "interaction_logs", ["logType_id"], :name => "index_interaction_logs_on_logType_id"
  add_index "interaction_logs", ["person_id"], :name => "index_interaction_logs_on_person_id"

  create_table "items", :force => true do |t|
    t.string   "name"
    t.string   "article"
    t.string   "filename"
    t.float    "diameter"
    t.float    "length"
    t.float    "width"
    t.float    "height"
    t.float    "area"
    t.float    "volume"
    t.integer  "person_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "items", ["person_id"], :name => "index_items_on_person_id"

  create_table "log_types", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "meeting_times", :force => true do |t|
    t.boolean  "monday"
    t.boolean  "tuesday"
    t.boolean  "wednesday"
    t.boolean  "thursday"
    t.boolean  "friday"
    t.boolean  "saturday"
    t.boolean  "sunday"
    t.time     "start"
    t.time     "end"
    t.integer  "course_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "meeting_times", ["course_id"], :name => "index_meeting_times_on_course_id"

  create_table "people", :force => true do |t|
    t.string   "email"
    t.string   "password"
    t.string   "firstName"
    t.string   "lastName"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "permissions", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "roles", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end

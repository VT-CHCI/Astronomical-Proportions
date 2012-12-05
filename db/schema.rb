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

ActiveRecord::Schema.define(:version => 20121205192726) do

  create_table "applications", :force => true do |t|
    t.string   "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "courses", :force => true do |t|
    t.string   "title"
    t.string   "number"
    t.string   "section"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "flags", :force => true do |t|
    t.text     "reason"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
    t.integer  "item_id"
    t.integer  "person_id"
  end

  create_table "interaction_logs", :force => true do |t|
    t.integer  "person_id"
    t.integer  "logType_id"
    t.time     "time"
    t.text     "details"
    t.datetime "created_at",           :null => false
    t.datetime "updated_at",           :null => false
    t.integer  "application_id"
    t.text     "unknown_user_details"
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
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.float    "surface_area"
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
    t.string   "period"
    t.time     "startTime"
    t.time     "endTime"
    t.integer  "course_id"
    t.date     "startDate"
    t.date     "endDate"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  add_index "meeting_times", ["course_id"], :name => "index_meeting_times_on_course_id"

  create_table "people", :force => true do |t|
    t.string   "password"
    t.string   "firstName"
    t.string   "lastName"
    t.datetime "created_at",                             :null => false
    t.datetime "updated_at",                             :null => false
    t.string   "email",                  :default => "", :null => false
    t.string   "encrypted_password",     :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
  end

  add_index "people", ["email"], :name => "index_people_on_email", :unique => true
  add_index "people", ["reset_password_token"], :name => "index_people_on_reset_password_token", :unique => true

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

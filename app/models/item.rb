class Item < ActiveRecord::Base
  belongs_to :person
  has_and_belongs_to_many:courses
  mount_uploader :filename, ImageUploader
end

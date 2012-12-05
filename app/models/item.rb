class Item < ActiveRecord::Base
  belongs_to :person
  has_and_belongs_to_many:courses
  has_many :flags
  has_many :people, :through => :flags, :as=> :flaggers
  validates :filename, :presence => true
  mount_uploader :filename, ImageUploader
end

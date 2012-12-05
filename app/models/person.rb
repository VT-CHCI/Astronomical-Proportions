class Person < ActiveRecord::Base
	has_and_belongs_to_many :permissions
	has_and_belongs_to_many :roles
  has_many :items
  has_many :flags
  has_many :items, :through => :flags, :as => :flagged_items

  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable, :validatable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :firstName, :lastName, :email, :password, :password_confirmation, :remember_me
end

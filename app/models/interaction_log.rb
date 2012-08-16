class InteractionLog < ActiveRecord::Base
  belongs_to :person
  belongs_to :logType
  belongs_to :application
end

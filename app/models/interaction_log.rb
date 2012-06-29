class InteractionLog < ActiveRecord::Base
  belongs_to :person
  belongs_to :logType
end

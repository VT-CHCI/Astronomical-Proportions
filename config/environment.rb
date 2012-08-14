# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
ScalingDimensions::Application.initialize!

RAILS_ROOT = "#{File.dirname(__FILE__)}/.." unless defined?(RAILS_ROOT)
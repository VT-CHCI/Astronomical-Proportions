namespace :db do
  desc "This loads the development data."
  task :seed => :environment do
    require 'active_record/fixtures'
    Dir.glob(RAILS_ROOT + '/db/fixtures/*.yml').each do |file|
      base_name = File.basename(file, '.*')
      puts "Loading #{base_name}..."
      ActiveRecord::Fixtures.create_fixtures('db/fixtures', base_name)
    end
    #add in the image file for the default data
    for item in Item.find(:all)
      item.filename.store!(File.open(RAILS_ROOT + "app/assets/images/objects/" + item.name.gsub(/ /,'').downcase + ".svg"))
      item.save!
    end
  end

  desc "This drops the db, builds the db, and seeds the data."
  task :reseed => [:environment, 'db:reset', 'db:seed']
end

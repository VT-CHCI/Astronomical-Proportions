# Astronomical Proportions #
Can we help middle schoolers to understand scale (as in relative scale of planets or their distances from each other, like in Science class)?

## User Guide ##


### Signing In ###
1. Go to the web application in your browser (for example: [http://astronomicalproportions.org/](astronomicalproportions.org/)).
1. Click "Sign in" in the upper-right of the screen.
1. Enter your login information and click the "Sign In" button below.

### Compare Mode ###
1. Click "Compare Mode" from the mode options in the bottom left.
1. Click the dimension you want to compare from the choices in the top left.
1. Scroll through the left list and click on the first object you would like to compare.
1. Scroll through the right list and click on the second object you would like to compare.
1. You will now see these two objects, and the smaller will be scaled down such that the proportion between it and the larger on the screen matches their real proportion.
1. You can now click on the arrows beside the text description of their proportion to change its form.


### Analogy Mode ###
1. Click "Analogy Mode" from the mode options in the bottom left.
1. Click the dimension you want to compare from the choices in the top left.
1. Scroll through the left list and click on the first object you would like to compare.
1. Scroll through the right list and click on the second object you would like to compare.
1. The top of your screen will change to describe the proportion between these first two objects.
1. Scroll through the left list and click on the third object you would like to compare.
    * this should be the object that you think is similar to the first object.
1. Scroll through the right list and click on the fourth object you would like to compare.
    * this should be the object that you feel is similar to the second object
1. You will now see the third and fourth objects, and the smaller will be scaled down such that the proportion between it and the larger on the screen matches their real proportion, and you will can see how their ratio compares to the first two objects.

### Prediction Mode ###
1. Click "Prediction Mode" from the mode options in the bottom left.
1. Click the dimension you want to compare from the choices in the top left.
1. Scroll through the left list and click on the first object you would like to compare.
1. Scroll through the right list and click on the second object you would like to compare.
1. You will now see only these two objects side-by-side. 
1. Click on the three parallel, slanted lines (the "handle") in the bottom right of the object you believe to be smaller.
1. Drag this handle up and to the left until you believe this smaller object is in correct proportion to the larger. 
1. Optionally click "Check me!" for feedback on whether you got it right.

### The Data Table ###
1. Click on "Data Table" on the right.
1. You can see a data table where each row shows the details of one item.
1. You can click on the flag beside an item to indicate that you think it may be incorrect.

#### Adding a New Item ####
1. Think of the new item you would like to add
1. Search the web (or your computer) for an image of the item.
1. Click Add New Item on the right
1. Enter in the information about your item (you may need to search the web for the information.
1. Click the Create Item button at the bottom.

## Developer Guide ##

### Installing Astronomical Proportions locally ###
We developed Astronomical-Proportions in the open. We used GitHub as our repository (and would recommend any future developers do the same). [Our GitHub](https://github.com/VT-CHCI/Astronomical-Proportions/) repository belongs to the [VT-CHCI Organization on GitHub](https://github.com/VT-CHCI/). 

1. Install ruby, and rails. [Michael](https://github.com/thegreatmichael/) used a mac (though [Collin](https://github.com/SemperRuminare) used Windows which was just fine), and used [rvm](https://rvm.io/) to manage his ruby and rails instances.
1. Acquire the source code for Astronomical-Proportions by cloning the GitHub Project, or downloading an archive from GitHub:
    * Cloning the source (you must have git installed on your system)
        1. Clone git@github.com:VT-CHCI/Astronomical-Proportions.git
            * for example by running the following in the terminal: 
                * `git clone git@github.com:VT-CHCI/Astronomical-Proportions.git`
    * Downloading the archive:
        1. Download and extract 
            * [https://github.com/VT-CHCI/Astronomical-Proportions/archive/master.zip](https://github.com/VT-CHCI/Astronomical-Proportions/archive/master.zip)
1. Install the rails dependencies by navigating to the Astronomical-Proportions directory in a terminal and running the following: `bundle install`
1. Create the empty, unstructured database
    1. Astronomical-Proportions expects to use a postgres database. It is fairly simple to change this by modifying `Astronomical-Proportions/config/database.yml` and making sure that `Astronomical-Proportions/Gemfile` has a line requiring the gem that supports whatever database you want (mysql2 or sqlite3 are common alternatives). Read elsewhere about how to do this if you are new to Rails and can't figure it out.
    1. Look in `Astronomical-Proportions/config/database.yml` and see the username, password, and database name Astronomical-Proportions expects to use. 
    1. Make sure this user exists on your local database server and has the specified password, and **has the permissions to create new database objects**.
    1. In a terminal, navigate to your Astronomical-Proportions folder.
    1. Create the database by running `rake db:create`
1. Give the database the necessary structure
    1. `rake db:migrate`
1. Optionally seed the database with some initial data `rake db:seed`
1. Start the server `rails s`
1. Confirm the application is running by navigating to [http://localhost:3000](http://localhost:3000)n in your browser.

### Getting Astronomical Proportions running on Heroku ###
* We do not detail here how to get a heroku account, so [go figure that out](https://devcenter.heroku.com/articles/quickstart). 
* To put the rails project on Heroku you must have the project in a git repository locally (as far as we understand).
* **BEWARE:** the default usage of CarrierWave involved storing the uploaded pictures in local storage which gets trashed when your heroku instance is stopped [for example due to inactivity
1. [Install heroku tools](https://devcenter.heroku.com/articles/quickstart#step-2-install-the-heroku-toolbelt) on your development machine (usually your local machine) 
1. [Add heroku as a remote to your local git repository](https://devcenter.heroku.com/articles/rails3#deploy-your-application-to-heroku)
1. push your code to heroku `git push heroku master`
    * `master` there refers to the local git branch you wish to push to heroku, if you haven't used any branching then it's `master` otherwise it'd be the branch name you wish to push
1. You need to migrate the database on heroku now `heroku run rake db:migrate`.
1. Optionally seed the db on heroku `heroku run rake db:seed`.
1. Navigate to your heroku app's URL to see the application.
    * The first time you navigate to this app after a longish period of inactivity, heroku will have to start your application, so the very first page load may take a longer time (1 min), but thereafter, it should have much faster response times and page loads.

### Developer Overview ###
The developers of this application were largely learning the technologies within as they developed this application. So very likely they were not following all the best practices.

#### Technology Stack ####
This application stands on the shoulders of giants. There's a lot of neat projects that helped make this one more tractable. We use Rails as our Web Application Framework. Rails runs on top of Rake and Ruby. Postgresql is the relational database that we used. 

On the front end, we employ javascript, and more specifically jQuery and jQuery-ui to do a lot of the interactive parts of the pages, particularly the prediction mode's resizing. Additionally, we use what used to be called twitter bootstrap, and is now just called "[bootstrap](twitter.github.com/bootstrap/)" to give us our baseline CSS and a few html widgets and javascript components. 

There are also a few rails dependencies/libraries/plugins which they call "gems" that are worth mentioning. [Devise](https://github.com/plataformatec/devise/) is what we use to manage "users" logging in (we call them "people"). [CarrierWave](https://github.com/jnicklas/carrierwave) is what we use to manage the photo uploads, **BEWARE:** (as mentioned in the Heroku section above, the default usage of CarrierWave involved storing the uploaded pictures in local storage which gets trashed when your heroku instance is stopped [for example due to inactivity]).

#### Where to find things for the front end ####

##### Main Layout and Styling #####
`Astronomical-Proportions/app/views/layouts/application.html.erb`
* This is where most of the HTML for this web application can be found.

`Astronomical-Proportions/app/assets/stylesheets/screen.css`
* This is where most of the styling is written.

##### Main Javascript (for interactivity) #####
`Astronomical-Proportions/app/assets/javascripts/script.js.erb`
* This file is the most critical in the application. Not only is some of the widgety behavior therein, but this is also what changes the (visible) content of the page for most of the app (all but sign in, data table, and new item).

#### Where to find things on the back end ####
There's really not much to the backend of this project. The main thing that's different than standard rails apps is `Astronomical-Proportions/app/controllers/interaction_logs_controller.rb`. This file is what accepts HTTP **POST** requests and logs the parameters to the table in the database. We overloaded the service to also store data for [Critisearch](https://github.com/VT-CHCI/CritiSearch/) and [Sound of Fractions](https://github.com/VT-CHCI/MusicFractions).

#### Database Structure ####

### Welcome to Rails ###
*This last section is automatically generated for new Rails applications, I left it here in case it helps a developer later (probably one who's less familiar with Rails)*

Rails is a web-application framework that includes everything needed to create
database-backed web applications according to the Model-View-Control pattern.

This pattern splits the view (also called the presentation) into "dumb"
templates that are primarily responsible for inserting pre-built data in between
HTML tags. The model contains the "smart" domain objects (such as Account,
Product, Person, Post) that holds all the business logic and knows how to
persist themselves to a database. The controller handles the incoming requests
(such as Save New Account, Update Product, Show Post) by manipulating the model
and directing data to the view.

In Rails, the model is handled by what's called an object-relational mapping
layer entitled Active Record. This layer allows you to present the data from
database rows as objects and embellish these data objects with business logic
methods. You can read more about Active Record in
link:files/vendor/rails/activerecord/README.html.

The controller and view are handled by the Action Pack, which handles both
layers by its two parts: Action View and Action Controller. These two layers
are bundled in a single package due to their heavy interdependence. This is
unlike the relationship between the Active Record and Action Pack that is much
more separate. Each of these packages can be used independently outside of
Rails. You can read more about Action Pack in
link:files/vendor/rails/actionpack/README.html.


#### Getting Started ####

1. At the command prompt, create a new Rails application:
       <tt>rails new myapp</tt> (where <tt>myapp</tt> is the application name)

2. Change directory to <tt>myapp</tt> and start the web server:
       <tt>cd myapp; rails server</tt> (run with --help for options)

3. Go to http://localhost:3000/ and you'll see:
       "Welcome aboard: You're riding Ruby on Rails!"

4. Follow the guidelines to start developing your application. You can find
the following resources handy:

* The Getting Started Guide: http://guides.rubyonrails.org/getting_started.html
* Ruby on Rails Tutorial Book: http://www.railstutorial.org/


#### Debugging Rails ####

Sometimes your application goes wrong. Fortunately there are a lot of tools that
will help you debug it and get it back on the rails.

First area to check is the application log files. Have "tail -f" commands
running on the server.log and development.log. Rails will automatically display
debugging and runtime information to these files. Debugging info will also be
shown in the browser on requests from 127.0.0.1.

You can also log your own messages directly into the log file from your code
using the Ruby logger class from inside your controllers. Example:

  class WeblogController < ActionController::Base
    def destroy
      @weblog = Weblog.find(params[:id])
      @weblog.destroy
      logger.info("#{Time.now} Destroyed Weblog ID ##{@weblog.id}!")
    end
  end

The result will be a message in your log file along the lines of:

  Mon Oct 08 14:22:29 +1000 2007 Destroyed Weblog ID #1!

More information on how to use the logger is at http://www.ruby-doc.org/core/

Also, Ruby documentation can be found at http://www.ruby-lang.org/. There are
several books available online as well:

* Programming Ruby: http://www.ruby-doc.org/docs/ProgrammingRuby/ (Pickaxe)
* Learn to Program: http://pine.fm/LearnToProgram/ (a beginners guide)

These two books will bring you up to speed on the Ruby language and also on
programming in general.


#### Debugger ####

Debugger support is available through the debugger command when you start your
Mongrel or WEBrick server with --debugger. This means that you can break out of
execution at any point in the code, investigate and change the model, and then,
resume execution! You need to install ruby-debug to run the server in debugging
mode. With gems, use <tt>sudo gem install ruby-debug</tt>. Example:

  class WeblogController < ActionController::Base
    def index
      @posts = Post.all
      debugger
    end
  end

So the controller will accept the action, run the first line, then present you
with a IRB prompt in the server window. Here you can do things like:

    >> @posts.inspect
    => "[#<Post:0x14a6be8
          @attributes={"title"=>nil, "body"=>nil, "id"=>"1"}>,
       #<Post:0x14a6620
          @attributes={"title"=>"Rails", "body"=>"Only ten..", "id"=>"2"}>]"
    >> @posts.first.title = "hello from a debugger"
    => "hello from a debugger"

...and even better, you can examine how your runtime objects actually work:

    >> f = @posts.first
    => #<Post:0x13630c4 @attributes={"title"=>nil, "body"=>nil, "id"=>"1"}>
    >> f.
    Display all 152 possibilities? (y or n)

Finally, when you're ready to resume execution, you can enter "cont".


#### Console ####

The console is a Ruby shell, which allows you to interact with your
application's domain model. Here you'll have all parts of the application
configured, just like it is when the application is running. You can inspect
domain models, change values, and save to the database. Starting the script
without arguments will launch it in the development environment.

To start the console, run <tt>rails console</tt> from the application
directory.

Options:

* Passing the <tt>-s, --sandbox</tt> argument will rollback any modifications
  made to the database.
* Passing an environment name as an argument will load the corresponding
  environment. Example: <tt>rails console production</tt>.

To reload your controllers and models after launching the console run
<tt>reload!</tt>

More information about irb can be found at:
link:http://www.rubycentral.org/pickaxe/irb.html


#### dbconsole ####

You can go to the command line of your database directly through <tt>rails
dbconsole</tt>. You would be connected to the database with the credentials
defined in database.yml. Starting the script without arguments will connect you
to the development database. Passing an argument will connect you to a different
database, like <tt>rails dbconsole production</tt>. Currently works for MySQL,
PostgreSQL and SQLite 3.

#### Description of Contents ####

The default directory structure of a generated Ruby on Rails application:

    |-- app
    |   |-- assets
    |       |-- images
    |       |-- javascripts
    |       `-- stylesheets
    |   |-- controllers
    |   |-- helpers
    |   |-- mailers
    |   |-- models
    |   `-- views
    |       `-- layouts
    |-- config
    |   |-- environments
    |   |-- initializers
    |   `-- locales
    |-- db
    |-- doc
    |-- lib
    |   `-- tasks
    |-- log
    |-- public
    |-- script
    |-- test
    |   |-- fixtures
    |   |-- functional
    |   |-- integration
    |   |-- performance
    |   `-- unit
    |-- tmp
    |   |-- cache
    |   |-- pids
    |   |-- sessions
    |   `-- sockets
    `-- vendor
      |-- assets
          `-- stylesheets
      `-- plugins

app
  Holds all the code that's specific to this particular application.

app/assets
  Contains subdirectories for images, stylesheets, and JavaScript files.

app/controllers
  Holds controllers that should be named like weblogs_controller.rb for
  automated URL mapping. All controllers should descend from
  ApplicationController which itself descends from ActionController::Base.

app/models
  Holds models that should be named like post.rb. Models descend from
  ActiveRecord::Base by default.

app/views
  Holds the template files for the view that should be named like
  weblogs/index.html.erb for the WeblogsController#index action. All views use
  eRuby syntax by default.

app/views/layouts
  Holds the template files for layouts to be used with views. This models the
  common header/footer method of wrapping views. In your views, define a layout
  using the <tt>layout :default</tt> and create a file named default.html.erb.
  Inside default.html.erb, call <% yield %> to render the view using this
  layout.

app/helpers
  Holds view helpers that should be named like weblogs_helper.rb. These are
  generated for you automatically when using generators for controllers.
  Helpers can be used to wrap functionality for your views into methods.

config
  Configuration files for the Rails environment, the routing map, the database,
  and other dependencies.

db
  Contains the database schema in schema.rb. db/migrate contains all the
  sequence of Migrations for your schema.

doc
  This directory is where your application documentation will be stored when
  generated using <tt>rake doc:app</tt>

lib
  Application specific libraries. Basically, any kind of custom code that
  doesn't belong under controllers, models, or helpers. This directory is in
  the load path.

public
  The directory available for the web server. Also contains the dispatchers and the
  default HTML files. This should be set as the DOCUMENT_ROOT of your web
  server.

script
  Helper scripts for automation and generation.

test
  Unit and functional tests along with fixtures. When using the rails generate
  command, template test files will be generated for you and placed in this
  directory.

vendor
  External libraries that the application depends on. Also includes the plugins
  subdirectory. If the app has frozen rails, those gems also go here, under
  vendor/rails/. This directory is in the load path.

## Acknowledgments ##
Thanks are due to all the people who made all the technologies and dependencies we use, but I cannot possibly figure out what ll those are with so many dependencies being automatically included. 

We would like to thank our teacher partners and their students and administrators in Henrico County, our advisors at Virginia Tech (Deborah Tatar, Steve Harrison, and Manuel P&eacute;rez-Qui&ntilde;ones), and the team that worked on the first iteration which included Sharon Chu and [Diego Netto](https://github.com/diegonetto/).

[StackOverflow](http://stackoverflow.com/) was also extremely helpful.
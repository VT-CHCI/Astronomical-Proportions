// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.

require.config(
  {
    paths: {
      jquery: 'libs/jquery-1.7.2.min',
      underscore: 'libs/underscore.min',
      backbone: 'libs/backbone-min',
      bbone: 'backbone',
      text: 'libs/text.min',
      templates: 'backbone/templates',
      bootstrap: 'libs/bootstrap/bootstrap.min'
    },

    shim: {
      'underscore': {
        deps: ['jquery'], //dependencies
        exports: '_' //the exported symbol
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  }
);

require(
  [
    // Load our app module and pass it to our definition function
    'app'

    // Some plugins have to be loaded in order due to their non AMD compliance
    // Because these scripts are not "modules" they do not pass any values to the definition function below
  ], 
  function(App) {
    console.log("App loading...");
    // The "app" dependency is passed in as "App"
    // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
    App.initialize();
     console.log("App initialized...");
  }
);

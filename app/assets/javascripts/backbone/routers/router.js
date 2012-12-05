// Filename: router.js
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'bbone/views/homeView',
    'bbone/views/leftNavView',
    'bbone/views/rightNavView',
    'bbone/views/navView',
    'bbone/views/footerView'
  ], 
  function($, _, Backbone, mainHomeView, leftNavView, rightNavView, navView, footerView) {
    var AppRouter = Backbone.Router.extend({
      routes: {
        // Default
        '*actions': 'defaultAction'
      },
      defaultAction: function(actions) {
        // We have no matching route, lets display the home page
        
        console.log("This is happening.");
        console.log(gon.items)
        leftNavView.render();
        mainHomeView.render();
        rightNavView.render();
        //navView.render();
        footerView.render();
      }
    });

    var initialize = function() {
      var app_router = new AppRouter;
      Backbone.history.start({pushState:true});
    };
    return {
      initialize: initialize
    };
  }
);

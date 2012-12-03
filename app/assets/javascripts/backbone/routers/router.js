// Filename: router.js
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'views/home/homeView',
    // 'views/slider/sliderView',
    // 'views/beatBars/beatBarsView'
    'views/nav/navView'
  ], 
  function($, _, Backbone, mainHomeView, navView) {//sliderView, beatBarsView) {
    var AppRouter = Backbone.Router.extend({
      routes: {
        // Default
        '*actions': 'defaultAction'
      },
      defaultAction: function(actions) {
        // We have no matching route, lets display the home page
        mainHomeView.render();
        // sliderView.render();
        // beatBarsView.render();
        navView.render();
      }
    });

    var initialize = function() {
      // console.log("hey here we are");
      var app_router = new AppRouter;
      Backbone.history.start({pushState:true});
    };
    return {
      initialize: initialize
    };
  }
);

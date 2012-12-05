// Filename: views/home/main
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/main.html'
  ], 
  function($, _, Backbone, mainHomeTemplate) {
    var mainHomeView = Backbone.View.extend({
      el: $("#centerColumn"),
      render: function() {
        $(this.el).append(mainHomeTemplate);
        this.initialize();
        return this;
      },
      initialize: function() {
        console.log("Main view initializing.");
        $("#animateObjects").hide();
        $("#analogyObjects").hide();
        $("#predictionObjects").hide();
      }
    });
    return new mainHomeView();
  }
);

// Filename: views/home/main
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/rightNav.html',
  ], 
  function($, _, Backbone, rightNavTemplate) {
    var rightNavView = Backbone.View.extend({
      el: $("#rightColumn"),
      render: function() {
        $(this.el).prepend(rightNavTemplate);
        return this;
      }
    });
    return new rightNavView();
  }
);

// Filename: views/home/main
define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/leftNav.html'
  ], 
  function($, _, Backbone, leftNavTemplate) {
    var leftNavView = Backbone.View.extend({
      el: $("#leftColumn"),
      events : {
            "click" : "onClick",
        },
      render: function() {
        $(this.el).append(leftNavTemplate);
        return this;
      }, 
      onClick: function(ev) {
        if($(ev.target).parents("#dimension-list").length ==1 ) {
          $("#dimension-list li.active").toggleClass("active");
          $(ev.target).parent().toggleClass("active");
        }
        else if($(ev.target).parents("#selector-list").length ==1) {
          $("#selector-list li.active").toggleClass("active");
          $(ev.target).parent().toggleClass("active");
        }
        
      }
    });
    return new leftNavView();
  }
);

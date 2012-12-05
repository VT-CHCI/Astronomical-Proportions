// Filename: views/nav/nav

//Do work below here
var loadPage = function(page) {
  console.log(page);
  
}

define(
  [
    'jquery',
    'underscore',
    'backbone',
    'text!templates/nav.html'
  ], 
  function($, _, Backbone, navTemplate) {
    var navView = Backbone.View.extend({
      el: $("body"),
      render: function() {
        $(this.el).prepend(navTemplate);
        this.addLinks();
        return this;
      },
      initialize: function() {
        // console.log("hey");
        // this.;
      },
      addLinks: function (event) {
        console.log("hey");
        $(".nav-link").click(function() {
          var target = $(this).find("a").attr("href");
          if (target == "#") {
            target = "home";
          }
          target = target.replace("#","");
          loadPage(target);
        });
        // event.preventDefault();
      }
      
    });
    return new navView();
  }
);

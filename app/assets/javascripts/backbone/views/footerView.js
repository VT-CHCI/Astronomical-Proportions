// Filename: views/footer/footerView
define(
  [
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above
    'text!templates/footer.html'
  ], 
  function($, _, Backbone, footerTemplate) {
    var footerView = Backbone.View.extend({
      el: $("#footer"),
      render: function() {
        $(this.el).append(footerTemplate);
        return this;
      }
    });
    return new footerView();
  }
);

$(document).ready(function(){

  //make the links in the items page send async request to add flag

  $(".flag-it").click(function(){
    var $this = $(this);
    // console.log("flag-it" + $this.prev(".dim-val").text());
    $this.addClass("active");
    $.post("/flags", 
      {
        
        item: $this.data("item-id"),
        person: $("#current_person_id").text(),
        dimension: $this.data("dimension"),
        value: $this.prev(".dim-val").text()
      }, 
      function() {
        //callback after post
      }
    );
  });

});
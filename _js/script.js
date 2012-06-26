$(document).ready(function(){
	var objects = {};

	$("#animateObjects").hide();

	if (location.hash.replace("#","").length == 0) {
		location.hash = "#diameter";
	}
	else {
		//nothing to do when page is first loaded with different dimension?
	}

	var urlDimension = location.hash.replace("#","");

	$.ajax({
	  url: '_files/objects.json',
	  dataType: 'json',
	  success: function(data) {
			objects = data.objects;
			// console.log(objects);
			$("#chooseObjects").trigger("objectsLoaded");
	  },
	  error: function(data){
			console.log(arguments);
	  }
	});

	$("#chooseObjects").bind("objectsLoaded", function() {
		
		$.each(objects, function(idx, val) {
			
			var dt = "<dl><dt>" + idx + "</dt>";		
			
			for (var j = 0; j < val.length; j++) {
				var dd = '<dd id="' + objects[idx][j]['id'] + '"><p>' + objects[idx][j]['name'] + '</p><img class="iosListImage" src="_img/objects/' + objects[idx][j]['file'] + '" ' + urlDimension + '="' + objects[idx][j][urlDimension] + '" width="250" init-width="250" name="' + objects[idx][j]['name'] + '" article="' + objects[idx][j]['article'] + '" />' + "</dd>";
				dt += dd;
			}

			dt += "</dl>";
			$(".listContainer").append(dt);

		});

		$(".listContainer").ioslist();

		$(".listContainer").each(function(){
			var id = $(this).attr("id");
			
			$("#"+id+" dd").click(function(){
				var oldSelection = $("#"+id+" dd.selectedObject");
				
				oldSelection.toggleClass("selectedObject");
				if (oldSelection.attr("id") != $(this).attr("id")) {
					$(this).toggleClass("selectedObject");
				}
				if ($(".selectedObject").length == 2) {
					$("#leftObject").append($("#list1 dd.selectedObject img").clone());
					$("#rightObject").append($("#list2 dd.selectedObject img").clone());
					scale(urlDimension, $("#leftObject img"), $("#rightObject img"));
					$("#animateObjects").trigger("animate", {"selectedObjects" : $(".selectedObject")});

				}
			});
		});
	});

	$(".nav li").click(function(){
		$(".nav li.active").toggleClass("active");
		$(this).toggleClass("active");
	});

	$("#animateObjects").bind("animate", function(event, data) {
		$("#chooseObjects").toggle();
		$("#animateObjects").toggle();
	});
});

function scale(dimension, a, b) {
	function verboseDescription(smaller, larger) {
		$("#verboseDescription").text("The " + dimension + " of " + larger.attr("article") + " " + larger.attr("name") + " is " + parseFloat(larger.attr(dimension))/parseFloat(smaller.attr(dimension)) + " times larger than that of " + smaller.attr("article") + " " + smaller.attr("name") + ".");
	}

	if (parseFloat(b.attr(dimension)) > parseFloat(a.attr(dimension))) {
		window.setTimeout(
			function () {
				var aWidth = Math.max(b.width()*parseFloat(a.attr(dimension))/parseFloat(b.attr(dimension)), 5);
				var marginLeft = 650-aWidth;
				a.animate({
					width: aWidth, 
					marginLeft: marginLeft+"px"
				}, 1000);
			}
		, 1000);

		verboseDescription(a, b);
	}
	else {
		//a > b
		window.setTimeout(
			function () {
				var bWidth = Math.max(a.width()*parseFloat(b.attr(dimension))/parseFloat(a.attr(dimension)), 5);
				var marginRight = 650-bWidth;
				b.animate({
					width: bWidth, 
					marginRight: marginRight+"px"
				}, 1000);
			}
		, 1000);
		verboseDescription(b, a);
	}
}
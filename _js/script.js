$(document).ready(function(){
	var objects = {};
	var DEFAULT_LOCATION = "diameter";
	var displayedExp = 0;

	$("#animateObjects").hide();


	var urlDimension = location.hash.replace("#","");
	if (urlDimension.length == 0) {
		location.hash = "#" + DEFAULT_LOCATION;
		urlDimension = DEFAULT_LOCATION;
		$("#"+DEFAULT_LOCATION).addClass("active");
		clog("started with no dimension, defaulted to " + DEFAULT_LOCATION);
	}
	else {
		$("#"+urlDimension).toggleClass("active");
		clog("started with dimension: " + urlDimension);
	}

	$.ajax({
	  url: '_files/objects.json',
	  dataType: 'json',
	  success: function(data) {
			objects = data.objects;
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
				var dimensions = "";
				for (var objProperty in objects[idx][j]) {
					dimensions += "attr" + objProperty + '="' + objects[idx][j][objProperty] + '" ';
				}
				var dd = '<dd id="' + objects[idx][j]['id'] + '"><p>' + objects[idx][j]['name'] + '</p><img class="iosListImage" src="_img/objects/' + objects[idx][j]['file'] + '" ' + urlDimension + '="' + objects[idx][j][urlDimension] + '" width="250" init-width="250" ' + dimensions + '/></dd>';
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
					clog("from list 1, user selected: " + $("#list1 dd.selectedObject img").attr("attrname"));
					clog("from list 2, user selected: " + $("#list2 dd.selectedObject img").attr("attrname"));
					$("#leftObject").append($("#list1 dd.selectedObject img").clone());
					$("#rightObject").append($("#list2 dd.selectedObject img").clone());
					scale(urlDimension, $("#leftObject img"), $("#rightObject img"));
					$("#animateObjects").trigger("activate", {"selectedObjects" : $(".selectedObject")});

				}
			});
		});
	});

	$(".nav li").click(function() {
		urlDimension = $(this).attr("id");
		clog("changed dimension to: " + $(this).attr("id"));
		$(".nav li.active").toggleClass("active");
		$(this).toggleClass("active");
		if ($("#chooseObjects").is(":hidden")) {
			$("#chooseObjects").trigger("activate");
		}

	});

	$("#animateObjects").bind("activate", function(event, data) {
		$("#chooseObjects").toggle();
		$("#animateObjects").toggle();
		$("#reverseDescription").trigger("resetDescriptions");
	});

	$("#chooseObjects").bind("activate", function(event, data) {
		$("#chooseObjects").toggle();
		$("#animateObjects").toggle();
		$(".selectedObject").removeClass("selectedObject");
		$("#leftObject").empty();
		$("#rightObject").empty();
		$(".scaleExplanation").toggleClass("hidden");
	});

	$("#reverseDescription").click(function() {
		$("#expl"+displayedExp++%3).toggleClass("hidden");
		$("#expl"+displayedExp%3).toggleClass("hidden");
	});

	$("#reverseDescription").bind("resetDescriptions", function() {
		displayedExp = 0;
		$(".scaleExplanation").addClass("hidden");
		$("#expl0").removeClass("hidden");
	});
});

function scale(dimension, a, b) {
	function verboseDescription(left, right, factor) {
		//   users selects L <--> S                                       users selects S <--> L
		// * The diameter of L is 7 times larger than the diameter of S. 	The diameter of S is 7 times smaller than the diameter of L.
		// * The diameter of S is 1/7 of the diameter of L.              	The diameter of S is 1/7 of the diameter of L.
		// * The diameter of S is 7 times smaller than the diameter of L. The diameter of L is 7 times larger than the diameter of S.

		function respLarger(a, b, factor, dimension) {
			return "The " + dimension + " of " + a.attr("attrarticle") + " " + a.attr("attrname") + " is " + factor + " times larger than the " + dimension + " of " + b.attr("attrarticle") + " " + b.attr("attrname") + ".";
		}

		function respFraction(a, b, factor, dimension) {
			return "The " + dimension + " of " + b.attr("attrarticle") + " " + b.attr("attrname") + " is 1/" + factor + " (" + 1/factor + ") of the " + dimension + " of " + a.attr("attrarticle") + " " + a.attr("attrname") + ".";
		}

		function respSmaller(a, b, factor, dimension) {
			return "The " + dimension + " of " + b.attr("attrarticle") + " " + b.attr("attrname") + " is " + factor + " times smaller than the " + dimension + " of " + a.attr("attrarticle") + " " + a.attr("attrname") + ".";
		}

		function respEqual(a, b, dimension) {
			return "The " + dimension + " of " + a.attr("attrarticle") + " " + a.attr("attrname") + " is equal to the " + dimension + " of " + b.attr("attrarticle") + " " + b.attr("attrname") + ".";
		}		

		var result = "";
		if (Math.round(factor) ==1 ) {
			result += '<span class="scaleExplanation">';
			result += respEqual(left, right);
			result += '</span>';
		}
		else if (factor < 1) {
			result += '<span id="expl0" class="scaleExplanation">';
			result += respSmaller(right, left, Math.round(1/factor), dimension);
			result += '</span><span id="expl1" class="scaleExplanation hidden">';
			result += respFraction(right, left, Math.round(1/factor), dimension);
			result += '</span><span id="expl2" class="scaleExplanation hidden">';
			result += respLarger(right, left, Math.round(1/factor), dimension);
			result += '</span>';
		}
		else {
			result += '<span id="expl0" class="scaleExplanation">';
			result += respLarger(left, right, Math.round(factor), dimension);
			result += '</span><span id="expl1" class="scaleExplanation hidden">';
			result += respFraction(left, right, Math.round(factor), dimension);
			result += '</span><span id="expl2" class="scaleExplanation hidden">';
			result += respSmaller(left, right, Math.round(factor), dimension);
			result += '</span>';
		}

		$("#verboseDescription").children().remove();
		$("#verboseDescription").append(result);
	}
	var factor = parseFloat(a.attr("attr"+dimension))/parseFloat(b.attr("attr"+dimension));
	if (parseFloat(b.attr("attr"+dimension)) > parseFloat(a.attr("attr"+dimension))) {
		window.setTimeout(
			function () {
				var aWidth = Math.max(b.width()*factor, 5);
				var marginLeft = 705-aWidth;
				a.animate({
					width: aWidth, 
					marginLeft: marginLeft+"px"
				}, 1000);
			}
		, 1000);
	}
	else {
		//a > b
		window.setTimeout(
			function () {
				var bWidth = Math.max(a.width()/factor, 5);
				var marginRight = 705-bWidth;
				b.animate({
					width: bWidth, 
					marginRight: marginRight+"px"
				}, 1000);
			}
		, 1000);
		
	}
	verboseDescription(a, b, factor);
}

var logging = true;

function clog(msg) {
	if (logging) {
		console.log(msg);
	}
}
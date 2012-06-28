$(document).ready(function(){
	var objects = {};
	var DEFAULT_LOCATION = "diameter";

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
	});

	$("#chooseObjects").bind("activate", function(event, data) {
		$("#chooseObjects").toggle();
		$("#animateObjects").toggle();
		$(".selectedObject").removeClass("selectedObject");
		$("#leftObject").empty();
		$("#rightObject").empty();
		$(".scaleExplanation").toggleClass("hidden");
	});
});

function scale(dimension, a, b) {
	function verboseDescription(left, right, factor) {
		var prefix = '<span class="scaleExplanation">The ' + dimension + ' of ' + left.attr('attrarticle') + ' ' + left.attr('attrname') + ' is ';
		var middle = "";
		var suffix = " that of " + right.attr("attrarticle") + " " + right.attr("attrname") + ".</span>";
		var revPrefix = '<span class="scaleExplanation hidden">The ' + dimension + ' of ' + right.attr('attrarticle') + ' ' + right.attr('attrname') + ' is ';
		var revMiddle = "";
		var revSuffix = left.attr("attrarticle") + " " + left.attr("attrname") + "'s.";
		
		if (factor > 1) {
			middle = factor + " times larger than";
			revMiddle = 1/factor + " of ";
		}
		else if (factor < 1) {
			middle = 1/factor + " times smaller than";
			revMiddle = factor + " of ";
		}
		else {
			middle = "equal to";
			revMiddle = "equal to";
		}

		var reverse = revPrefix + revMiddle + revSuffix + '</span><img id="reverseDescription" class ="pull-right" src="_img/objects/arrows-double-reversed.svg" width="50"/>';

		$("#verboseDescription").children().remove();
		$("#verboseDescription").append(prefix + middle + suffix + reverse);
		$("#reverseDescription").click(function(){
			$(".scaleExplanation").toggleClass("hidden");
		});
		// $("#verboseDescription").append(reverse);
	}
	var factor = parseFloat(a.attr("attr"+dimension))/parseFloat(b.attr("attr"+dimension));
	if (parseFloat(b.attr("attr"+dimension)) > parseFloat(a.attr("attr"+dimension))) {
		window.setTimeout(
			function () {
				var aWidth = Math.max(b.width()*factor, 5);
				var marginLeft = 650-aWidth;
				a.animate({
					width: aWidth, 
					marginLeft: marginLeft+"px"
				}, 1000);
			}
		, 1000);

		// verboseDescription(a, b);
	}
	else {
		//a > b
		window.setTimeout(
			function () {
				var bWidth = Math.max(a.width()/factor, 5);
				var marginRight = 650-bWidth;
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
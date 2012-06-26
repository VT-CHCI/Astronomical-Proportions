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

	$("#chooseObjects").bind("objectsLoaded", function() {
		// console.log(objects.length);
		$.each(objects, function(idx, val) {
			// console.log(idx);
			var dt = "<dl><dt>" + idx + "</dt>";		
			// $(".listContainer dl").append(dt);	
			// var dds = [];
			for (var j = 0; j < val.length; j++) {
				var dd = '<dd id="' + objects[idx][j]['id'] + '"><p>' + objects[idx][j]['name'] + '</p><img class="iosListImage" src="_img/objects/' + objects[idx][j]['file'] + '" ' + urlDimension + '="' + objects[idx][j][urlDimension] + '" width="250" init-width="250" name="' + objects[idx][j]['name'] + '" article="' + objects[idx][j]['article'] + '" />' + "</dd>";
				// console.log(dd);
				dt += dd;
			}
			dt += "</dl>";
			// console.log(dt);
			$(".listContainer").append(dt);
			// console.log(dt.children());
			
		});
		// $.each(objects, function(idx, val) { //for each person who created an object
		// 	console.log(idx + " " + val);
		// 	var dds = (function(){
		// 		var dds = [];
		// 		$.each(val, function(idxInner, valInner) { //for each object they created
		// 			console.log(idxInner + " " + valInner + " " + valInner['file']);
		// 			dds.push($('<dd>' + idxInner + ' <img src ="' + valInner['file'] + '" width="' + 250 + '"/></dd>'));
		// 		});
		// 		console.log(dds);
		// 		return dds;
		// 	})();
		// 	console.log(dds);
		// 	var dt = $("<dt>"+idx+"</dt>").append();
		// 	console.log(dt);
		// 	$(".listContainer dl").append(dt);
		// });
		// debugger;
		$(".listContainer").ioslist();

		$(".listContainer").each(function(){
		var id = $(this).attr("id");
		// console.log(id);
		// console.log("#"+id+" dd");
		$("#"+id+" dd").click(function(){
			// console.log("clicked");
			var oldSelection = $("#"+id+" dd.selectedObject");
			// if (oldSelection.length > 0) {
			// 	console.log("oldSelection");
			// }
			// else {
			// 	console.log("else");
			// }
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
		// alert("loaded");
		// $("#leftObject").attr("diameter", objects["earth"]["diameter"]);
		// $("#rightObject").attr("diameter", objects["soccer"]["diameter"]);
		// $("#rightObject").attr("img_width", objects["soccer"]["img_width"]);
		// scale("diameter", $("#leftObject"), $("#rightObject"));

	});

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

	



	$(".nav li").click(function(){
		$(".nav li.active").toggleClass("active");
		$(this).toggleClass("active");
	});

	$("#animateObjects").bind("animate", function(event, data) {
		// alert("animation time!");
		$("#chooseObjects").toggle();
		$("#animateObjects").toggle();

		// var left = $(data["selectedObjects"][0]).children()[0];
		// var right = $(data["selectedObjects"][1]).children()[0];
		// $("#leftObject").append(left);
		// $("#rightObject").append(right);
		// $("#chooseObjects").toggleClass("hidden");
		// $("#animateObjects").toggleClass("hidden");
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
				// 	marginRight: "225px"
				// }, 1000).animate({
					width: aWidth, 
					marginLeft: marginLeft+"px"
				}, 1000);
			}
		, 1000);

		// b.click(
		// 	function () {
		// 		a.animate({
		// 			width: parseFloat(b.attr("init-width")), 
		// 			marginLeft: "0px"
		// 		}, 1000);
		// 	}
		// );

		verboseDescription(a, b);
	}
	else {
		//a > b
		window.setTimeout(
			function () {
				var bWidth = Math.max(a.width()*parseFloat(b.attr(dimension))/parseFloat(a.attr(dimension)), 5);
				var marginRight = 650-bWidth;
				b.animate({
				// 	marginRight: "225px"
				// }, 1000).animate({
					width: bWidth, 
					marginRight: marginRight+"px"
				}, 1000);
			}
		, 1000);

		// a.click(
		// 	function () {
		// 		b.animate({
		// 			width: parseFloat(b.attr("init-width")), 
		// 			marginRight: "0px"
		// 		}, 1000);
		// 	}
		// );

		verboseDescription(b, a);
	}
}
$(document).ready(function(){
	var objects = {};
	// $.ajax({
	//   url: '_files/objects.json',
	//   dataType: 'json',
	//   success: function(data) {
	// 		objects = data.objects;
	// 		$("#earth").attr("diameter", objects["earth"]["diameter"]);
	// 		$("#soccer").attr("diameter", objects["soccer"]["diameter"]);
	// 		$("#soccer").attr("img_width", objects["soccer"]["img_width"]);
	// 		scale("diameter", $("#earth"), $("#soccer"));
	//   },
	//   error: function(data){
	// 		console.log(arguments);
	//   }
	// });	
	$(".listContainer").ioslist();
	// $(".listContainer dd").click(function(){
		
	// });

	$(".listContainer").each(function(){
		var id = $(this).attr("id");
		$("#"+id+" dd").click(function(){
			var oldSelection = $("#"+id+" dd.selectedObject");
			oldSelection.toggleClass("selectedObject");
			if (oldSelection.attr("id") != $(this).attr("id")) {
				$(this).toggleClass("selectedObject");
			}
			if ($(".selectedObject").length == 2) {
				alert("animation time!");
			}
		});
	});
});

function scale(dimension, a, b) {
	b.click(
		function () {
			b.animate({
				width: Math.max(a.width()*parseFloat(b.attr(dimension))/parseFloat(a.attr(dimension)), 1)
			}, 1000);
		}
	);

	a.click(
		function () {
			b.animate({
				width: parseFloat(b.attr("img_width"))
			}, 1000);		
		}
	);
}
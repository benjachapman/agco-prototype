
var speed = 1.8;

$(document).ready(function(){
	$(window).scroll(function() {
		var st = $(this).scrollTop();

		//parallax hero
			var yPos = (-(st / speed) + "px");   	
			$(".parallax-overlay").css({top: yPos});
	});	

});
(function ($) {

	
	$(document).ready(function() {



	$('#wedding-parking').click(function(){
		$(this).parent().addClass("is-open");
	});

	$('#rec-parking').click(function(){
		$(this).parent().addClass("is-open");
	});

	$('.cover').click(function(){ s
		$(this).parent().removeClass("is-open");
	});

	$('.section--sigil').waypoint(function(direction) {
		$(this).toggleClass("is-out");
	});

	});


})(jQuery);

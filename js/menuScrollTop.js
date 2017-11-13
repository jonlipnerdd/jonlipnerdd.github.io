$(document).ready(function () {
	$(window).scroll(function () {
		var s = $(window).scrollTop();	
		if(s>=1){
			$(".menu").addClass("fixed");
		} else {
			$(".menu").removeClass("fixed");
		}
	});

	$(window).scroll(function () {
		var s = $(window).scrollTop();	
		if(s>=100){
			$(".introtag").addClass("visible");
		} else {
			$(".introtag").removeClass("visible");
		}
	});
})
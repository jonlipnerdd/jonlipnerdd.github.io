$(document).ready(function () {
	$(window).scroll(function () {
		var s = $(window).scrollTop();	
		if(s>=1){
			$(".menu").addClass("fixed");
		} else {
			$(".menu").removeClass("fixed");
		}
	});
})
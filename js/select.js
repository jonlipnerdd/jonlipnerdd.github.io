$(document).ready(function() {
	$('.button').on('click', function(){
  		var projectSelected = $(this).data("project");
  		$('.img').fadeOut(1000);
  		$('.button, .img').removeClass('selected');
   		$(this).addClass('selected');
    	$(".img[data-project='" + projectSelected + "']").addClass("selected");
    	$(".img[data-project='" + projectSelected + "']").fadeIn(600);
	});
});
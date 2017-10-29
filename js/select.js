$(document).ready(function() {
	$('.button').on('click', function(){
  		var projectSelected = $(this).data("project");
  		$('.button, .img').removeClass('selected');
   		$(this).addClass('selected');
    	$(".img[data-project='" + projectSelected + "']").addClass("selected");
	});
});
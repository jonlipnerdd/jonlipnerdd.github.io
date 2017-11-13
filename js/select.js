$(document).ready(function() {
	$('.button').on('click', function(){
  		var projectSelected = $(this).data("project");
  		$('.img').fadeOut(1000);
  		$('.button, .img, .descript, .title').removeClass('selected');
   		$(this).addClass('selected');
    	$(".img[data-project='" + projectSelected + "']").addClass("selected");
    	$(".img[data-project='" + projectSelected + "']").fadeIn(600);
    	$(".descript[data-project='" + projectSelected + "']").addClass("selected");
    	$(".title[data-project='" + projectSelected + "']").addClass("selected");
	});

  $('.view').on('click', function(){
      var viewSelected = $(this).data("view");
      $('.img').fadeOut(1000);
      $('.img').removeClass('selected');
      $(this).addClass('selected');
      $(".img[data-view='" + viewSelected + "']").addClass("selected");
      $(".img[data-view='" + viewSelected + "']").fadeIn(600);
  });
});
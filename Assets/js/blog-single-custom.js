$(".reply-button-3").click(function(){
    $(".post-media-1").slideToggle(1000);
})
$(".reply-button-3").click(function(){
    $(".post-media-2").slideToggle(1000);
})

$( document ).ready(function () {
    $(".media-hidden").slice(0, 3).show(); 
      $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".media-hidden:hidden").slice(0, 2).slideDown();
      });
    });

    //navbar background change js	
$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll > 706) {
		  $(".navbar").css({"background-color":"yellow", "transition":"0.5s"}); 
		}
  
		else{
			$(".navbar").css("background", "transparent") 	
		}
	})
  })
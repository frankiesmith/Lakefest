jQuery(document).ready(function($) {
	    /* Modal */
$('.show').click(function(e){
        $(e.currentTarget).siblings('.modal-overlay').addClass('active').find('.modal').addClass('active');
    });

    $('.close-modal, .modal-overlay').click(function(e){
        $('.modal, .modal-overlay').removeClass('active');
    });


$(document).ready(function() {
jQuery('header').on('click','a',function(e){
  if(e.target.href.indexOf('#') !== -1 ){
    e.preventDefault();
    jQuery('html,body').animate(
      {scrollTop: jQuery('#'+e.target.href.split('#')[1]).offset().top -90},
      600
    );
  }
  return true;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop() +320;
	
		// Assign active class to nav links while scolling
		$('.menu-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.desktop-menu a.active').removeClass('active');
						$('.desktop-menu a').eq(i).addClass('active');
				}
		});
        $('.menu-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.desktop-menu a.active').removeClass('active');
            $('.desktop-menu a').eq(i).addClass('active');
        }
    });
}).scroll();

$(".read-more").click(function(){
  $(".full-text").addClass("show").removeClass("hide");
  $(".excerpt").addClass("hide").removeClass("show");
  $(".full-text").removeClass("hide");
  $(".excerpt").removeClass("show");
});

$(".read-less").click(function(){
  $(".excerpt").addClass("show");
  $(".full-text").addClass("hide");
  $(".excerpt").removeClass("hide");
  $(".full-text").removeClass("show");

});

});
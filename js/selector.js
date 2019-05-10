// for slick
	$( document ).ready(function() {
    $('.for-slick').slick({
 	dots:true,
 	arrows:false,
 	autoplay:false,
 	dots:true,
 	autoplaySpeed:5000
});

// lightslider
$("#content-slider").lightSlider({
					loop:true,
					auto:true,
					pager: false,


					pause: 3000,
					speed:700,
					responsive : [
					 {
							 breakpoint:800,
							 settings: {
									 item:2,
									 slideMove:1,
									 slideMargin:6,
								 }
					 },
					 {
							 breakpoint:480,
							 settings: {
									 item:1,
									 slideMove:1
								 }
					 }
			 ]
			});

    // for wow
    new WOW().init();

    // for dropdown

    $('.nav-item').hover(function(){
 	$(this).children('.dropdown-menu').stop(true,false,true).slideToggle(300);
 })

 // for nav color change
	var offset=550;
  $(window).on('scroll',function(){
 if($(window).scrollTop()>offset){

 	$('.navbar').css('background', '#0f0f0f').css( 'transition-duration','1s');


 	}
 	else{

 		$('.navbar').css('background', 'black').css( 'transition-duration','1s');

 	}
 })

    // for to top
 var offset=250;
	var duration=1000;

	$('.to-top').hide();

	$(window).scroll(function(){
		if($(this).scrollTop()>offset){
			$('.to-top').fadeIn(duration);
		}else{
		$('.to-top').fadeOut(duration);
	}
	});
	$('.to-top').click(function(){
		$('body,html').animate({scrollTop:0},duration);
	});




$('.contact').click(function(){
	$('html, body').animate({
					 scrollTop: $("footer").offset().top
			 }, 1000);
			 })

			 $('.map').click(function(){
			 	$('html, body').animate({
			 					 scrollTop: $("#map").offset().top
			 			 }, 1000);
			 			 })

 });

$(document).ready(function(){
	window.onload = function() {
		var mySwiper = $('.swiper-container').swiper({
			mode:'vertical',
			pagination: '.pagination',
			createPagination: true,
			paginationClickable: true,
			speed: 1500
		});
		var mySwiper = $('.slider-bottom .swiper-container').swiper({
		});
		$('.slider-bottom .arrow-left').on('click', function(e){
			e.preventDefault()
			mySwiper.swipePrev()
		})
		$('.slider-bottom .arrow-right').on('click', function(e){
			e.preventDefault()
			mySwiper.swipeNext()
		});
	}
	$('.panel .panel-heading ').on('click', function(){
		$(this).find('.fa').toggleClass('fa-minus');
	});
	$(".fancybox").fancybox();
});

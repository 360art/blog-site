;(function() {

	//Filtr urojen slider
	var filtr_slider = $('.filtr__slider').slick({
		vertical: true,
		centerMode: true,
		swipe: false,
		slidesToShow: 3,
		arrows: true,
		onInit: function() {
			$('.slick-active').eq(1).css('color', 'white')
			.siblings().css('color', 'gray');

			var full_text = $('.slick-active').eq(1).data('full');
			var excerpt = $('.slick-active').eq(1).data('excerpt');
			$('.slick-active').eq(1).empty().append('<span>'+full_text+'</span>')
			.siblings().css('color', 'gray');
		},
		onBeforeChange: function(current, target) {
			var full_text = $('.slick-active').eq(2).data('full');
			var active = $('.slick-slide').not(':eq(' + target + ')');

			//Zamien wszystkie pozostałe tresci na excerpt
			active.each(function(){
				var item_excerpt = $(this).data('excerpt');
				$(this).empty().append('<span>'+item_excerpt+'</span>');
			});

			$('.slick-active').eq(2).empty().append('<span>'+full_text+'</span>').css('color','white')
			.siblings().css('color', 'gray');
		}
	});
	//EOF Filtr urojen slider

	//Opinie slider
	$('.opinion__slider').slick({
		dots: true,
		arrows: false
	});
	//EOF Opinie slider

	//News modal
	$('.news__more').magnificPopup({
		type: 'iframe',
		tClose: 'Zamknij (Esc)',
		tLoading: 'Ładowanie...',
		iframe: {
			markup:'<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',
		}
	});

	//Sticky menu
	 $(".nav__menu").scrollFix();
})();

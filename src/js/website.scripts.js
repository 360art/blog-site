;(function() {

	//Filtr urojen slider
	var filtr_slider = $('.filtr__slider').slick({
		vertical: true,
		centerMode: true,
		swipe: false,
		slidesToShow: 3,
		arrows: true,
		onInit: function() {

			var current = $('.slick-active').eq(1);
			var full = current.data('full');

			current
				.empty()
				.append('<span>' + full + '</span>')
				.css('color', 'white')
				.siblings()
				.css('color', 'gray');

		},
		onAfterChange: function() {

			var current = $('.slick-active').eq(1);
			var siblings = $('.slick-slide').not(current);
			var full = current.data('full');

			siblings.each(function () {
				$(this)
					.empty()
					.append('<span>' + $(this).data('excerpt') + '</span>')
					.css('color', 'gray');
			})

			current.empty()
				.append('<span>' + full + '</span>')
				.css('color','white');
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

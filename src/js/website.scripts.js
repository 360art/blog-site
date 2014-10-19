;(function() {

	//Filtr urojen slider
	var filtr_slider = $('.filtr__slider').slick({
		vertical: true,
		centerMode: true,
		swipe: false,
		slidesToShow: 3,
		arrows: false
	});

	//Dim even sections
	function dimText(filtr_set) {
		filtr_set.filter( ":even" ).css('color','gray');
		filtr_set.eq(1)	.css('color','#fff').fadeIn();
	}

	//Dim
	dimText($('.slick-active'));

	$('.filtr__arrow-up').click(function(){
		filtr_slider.slickPrev();
		dimText($('.slick-active'));
	});

	$('.filtr__arrow-down').click(function(){
		filtr_slider.slickNext();
		dimText($('.slick-active'));
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

})();
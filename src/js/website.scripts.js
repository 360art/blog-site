;(function() {

	//Filtr urojen
	var filtr_slider = $('.filtr__slider').slick({
		vertical: true,
		centerMode: true,
	  	//centerPadding: '250px',
	  	slidesToShow: 3,
	  	arrows: false
  	});

	//Dim even sections
	function dimText(filtr_set) {
		filtr_set.filter( ":even" ).css('color','gray');
		filtr_set.eq(1)	.css('color','#fff').fadeIn();
	}

	//Hide more section
	//$('.filtr__more').hide();
	//Problemy z ponownym wyliczeniem slidera

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
})();
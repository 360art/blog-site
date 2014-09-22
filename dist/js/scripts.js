;(function() {

	Detectizr.detect();

	$('#nav').hidescroll({
		offset: 0
	});

	$('.track__item').stick_in_parent();

	$('#progressMessage').readingTime();

	$('#commentsWrapper').on('hide.bs.collapse', function () {
		$('#commentsToggle').find('span').html('Rozwiń komentarze');
	}).on('show.bs.collapse', function () {
		$('#commentsToggle').find('span').html('Zwiń komentarze');
	});

	$('#menuToggle, #overlay').on('click touchstart', function(event){
		event.preventDefault();
		$('#wrapper, #nav, #overlay, #footer, html, body').toggleClass('is-close is-open');

		if ($('#menu').hasClass('is-open')) {
			setTimeout(function () {
				$('#menu').toggleClass('is-close is-open');
			}, 750);
		} else {
			$('#menu').toggleClass('is-close is-open');
		}

	});

	var slickOptions = {
		dots: false,
		speed: 600,
		swipe: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		cssEase: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'
	};

	$('.slick--oneitem').slick($.extend({}, slickOptions, {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true
	}));
	$('.slick--fouritem').slick($.extend({}, slickOptions, {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		// responsive: [
		// 	{
		// 		breakpoint: 768,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	},
		// 	{
		// 		breakpoint: 480,
		// 		settings: {
		// 			slidesToShow: 4,
		// 			slidesToScroll: 4,
		// 			arrows: false
		// 		}
		// 	}
		// ]
	}));

	if ($('html').hasClass('no-touch')) {
		var s = skrollr.init({
			forceHeight: false
		});
	}

})();



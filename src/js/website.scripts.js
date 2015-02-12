;(function() {

	//Filtr urojen slider
	var filtr_slider = $('.filtr__slider').slick({
		vertical: true,
		centerMode: true,
		swipe: false,
		slidesToShow: 3,
		arrows: true,
		onInit: function() {

			var current = $('.filtr__slider .slick-active').eq(1);
			var full = current.data('full');

			current
				.empty()
				.append('<span>' + full + '</span>')
				.css('color', 'white')
				.siblings()
				.css('color', 'gray');

		},
		onAfterChange: function() {

			var current = $('.filtr__slider .slick-active').eq(1);
			var siblings = $('.filtr__slider .slick-slide').not(current);
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
		},
		closeMarkup: '<button class="mfp-close" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAAAAABXO2kQAAABIElEQVQY02XPW0ojQRSA4bP/DfgwaFJVp6r6kqQhGETJzAJUvKAYiUo7OKBGGWZEpWNX9++Dj347+ITvBF7ruiG10NPc3L6B9Pc+2t2GRMtzFbVaIx8HPtiw+8o7T1NnfpRnSLuf6cQM5i+sKudHZnSM9HfGbuWqO3dTdaXfjCuEdlEZXw409y4rtKgTAt1Jpi6orzYKr7cdSNfTX0SbZ96MTahhjQB0J8YFE21xCS1IlzpWleaam8LP/pFA6HmYBc28i8Hp3v+v22o724r50DgzCsOdFxD+ToOPmut+ZrOJNbM10pw6q07L6/UyDkw1HC6Q5rAwwRW/gXOv0Y6PEJbBu/KGBO2Vdc49IrCYz/9AAprlz181CJA+gJQAuraDT7zvKB95TocIAAAAAElFTkSuQmCC);background-repeat: no-repeat;
						background-position: 14px 10px">
		</button>'
	});

	// Modal inspiracje
	$('.inspiration__link').magnificPopup({
		type: 'iframe',
		tClose: 'Zamknij (Esc)',
		tLoading: 'Ładowanie...',
		iframe: {
			markup:'<div class="mfp-iframe-scaler">'+
			'<div class="mfp-close"></div>'+
			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			'</div>',
		},
		closeMarkup: '<button class="mfp-close" style="background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAAAAABXO2kQAAABIElEQVQY02XPW0ojQRSA4bP/DfgwaFJVp6r6kqQhGETJzAJUvKAYiUo7OKBGGWZEpWNX9++Dj347+ITvBF7ruiG10NPc3L6B9Pc+2t2GRMtzFbVaIx8HPtiw+8o7T1NnfpRnSLuf6cQM5i+sKudHZnSM9HfGbuWqO3dTdaXfjCuEdlEZXw409y4rtKgTAt1Jpi6orzYKr7cdSNfTX0SbZ96MTahhjQB0J8YFE21xCS1IlzpWleaam8LP/pFA6HmYBc28i8Hp3v+v22o724r50DgzCsOdFxD+ToOPmut+ZrOJNbM10pw6q07L6/UyDkw1HC6Q5rAwwRW/gXOv0Y6PEJbBu/KGBO2Vdc49IrCYz/9AAprlz181CJA+gJQAuraDT7zvKB95TocIAAAAAElFTkSuQmCC);background-repeat: no-repeat;
						background-position: 14px 10px">
		</button>'
	});


	//Sticky menu
	 $(".nav__menu").scrollFix();
})();

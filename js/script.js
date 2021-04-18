$(function(){
	$('.slider').slick({
		dots: true,
		pauseOnDotsHover: true,
		prevArrow: '<button type="button" class="arrow-left" aria-label="СЃС‚СЂРµР»РєР°-РЅР°Р·Р°Рґ"></button>',
		nextArrow: '<button type="button" class="arrow-right" aria-label="СЃС‚СЂРµР»РєР°-РІРїРµСЂРµРґ"></button>',
		autoplay: true,
		autoplaySpeed: 5000,
	});

	// modal logic
	let IN_FOCUS = !1;
	$('.modal__call-me').on('mouseover', function(){
		IN_FOCUS = !0;
	});
	$('.modal__call-me').on('mouseout', function(){
		IN_FOCUS = !1;
	});
	$('.modal__wrapper').click(function(){
		if (!IN_FOCUS) {
			modal(this, 'hide');
		}
	});
	$('.btn-close').click(function(){
		modal($(this).closest('.modal__wrapper'), 'hide');
	});

	// mobile menu button
	$('.burger').click(function(){
		menu($('.mobile-menu'), 'show');
	});
	$('.mobile-menu-close').click(function(){
		menu($(this).closest('.mobile-menu'), 'hide');
	});

	// add menu
	$('.main-nav__list.site-list').clone().appendTo('.mobile-menu-content');
	$('.phone-numbers').clone().appendTo('.mobile-menu-content');

	$('.modal-show').click(function(){
		modal($('.modal__wrapper'), 'show');
	});

	function modal(element, action) {
		switch(action) {
			case 'hide':
				$(element).removeClass('show');
			break;
			case 'show':
				$(element).addClass('show');
			break;
		}
	}

	function menu(element, action) {
		switch(action) {
			case 'hide':
				$(element).animate({left:'-100%'}, 250, 'swing', function(){
					$(element).hide();
				});
				document.body.style.overflow = 'auto';
			break;
			case 'show':
				$(element).show();
				$(element).animate({left:'0'}, 250);
				document.body.style.overflow = 'hidden';
			break;
		}
	}

    $('.mobile-menu-content .site-list__link').click(() => {
        $('.mobile-menu-close').trigger('click');
    });
});

$(document).ready(function () {
	var slider_delay = 3000; // задержка между слайдами, секунды
	var slider_circle = 3 * slider_delay;
	var slider = function() {
		setTimeout(function(){
			$('.b-slider__wrapper').animate({
				'opacity': 0
			}, 400);
			$('.b-slider__wrapper_bg_2').animate({
				'opacity': 1
			}, 400);
			setTimeout(function(){
				$('.b-slider__wrapper').animate({
					'opacity': 0
				}, 400);
				$('.b-slider__wrapper_bg_3').animate({
					'opacity': 1
				}, 400);
				setTimeout(function(){
					$('.b-slider__wrapper').animate({
						'opacity': 0
					}, 400);
					$('.b-slider__wrapper_bg_1').animate({
						'opacity': 1
					}, 400);
				}, slider_delay);
			}, slider_delay);
		}, slider_delay);
	}
	slider();
	setInterval(function() {
		slider();
	}, slider_circle);

	// bottom slider
	var partners_width = 0,
		partners_step = 500, // pixels
		partners_left = 0;
	$('.b-partners__content img').each(function(){
		partners_width += $(this).outerWidth(true);
	});
	partners_width += 30;
	$('.b-partners__content').css('width', partners_width);
	$('.b-partners__arrow').on('click', function(){
		partners_left = parseInt($('.b-partners__content').css('left'));
		if ($(this).hasClass('b-partners__arrow_dir_left')) {
			if (Math.abs(partners_left) < partners_step) {
				partners_left = 0;
			} else {
				partners_left += partners_step;
			}
		} else {
			if (partners_width + partners_left < 960) {
				partners_left = 0;
			} else {
				partners_left -= partners_step;
			}
		}
		$('.b-partners__content').animate({
			'left': partners_left + 'px'
		});
	});
});
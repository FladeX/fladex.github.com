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
});
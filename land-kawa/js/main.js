$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'horizontal',
        nextSelector: '.b-slider-slider__arrow_side_right',
        prevSelector: '.b-slider-slider__arrow_side_left',
        nextText: '',
        prevText: '',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 1500,
        randomStart: true,
        infiniteLoop: true,
        auto: true,
        autoStart: true,
        pager: false
    });
});
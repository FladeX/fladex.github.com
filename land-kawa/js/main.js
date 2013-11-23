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

    function unloadPopupBox() {
        $('.b-popup').fadeOut("slow");
        $(".b-page").css({
            "opacity": "1" 
        });
        $('body').css({
            'overflow': 'visible',
            'position': 'static'
        });
    }   
       
    function loadPopupBox() {
        $('.b-popup').fadeIn("slow");
        $(".b-page").css({
        });
        $('body').css({
            'overflow': 'hidden',
            'position': 'relative'
        });
    }

    $('.b-catalog__item-more').on('click', function(){
        loadPopupBox();
        return false;
    });

    $('.b-popup__close').on('click', function(){
        unloadPopupBox();
    });
});
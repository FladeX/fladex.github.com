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

    function unloadPopupBox() {    // TO Unload the Popupbox
        $('.b-popup').fadeOut("slow");
        $(".b-page").css({ // this is just for style       
            "opacity": "1" 
        });
    }   
       
    function loadPopupBox() {    // To Load the Popupbox
        $('.b-popup').fadeIn("slow");
        $(".b-page").css({ // this is just for style
        });
    }

    loadPopupBox();

    $('.b-popup__close').on('click', function(){
        unloadPopupBox();
    });
});
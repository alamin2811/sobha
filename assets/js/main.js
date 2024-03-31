(function ($) {
    ("use strict");
    
    /*-- v6 quote slider Start --*/
    var sliderQuoteFor = $(".slider-for");
    if (sliderQuoteFor.length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            asNavFor: '.slider-nav'
        });
    }
    var sliderQuoteFor = $(".slider-nav");
    if (sliderQuoteFor.length) {
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                    }
                },
            ]
        });
    }

})(jQuery);

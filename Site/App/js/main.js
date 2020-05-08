$(function() {

    var owl = $('.slider1');
    owl.owlCarousel({
        items: 2,
        nav:false,
        dots: true,
        mouseDrag:false,
        loop:true,
        margin: 15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    // Переключаем слайд вперед
    $('.left-row').click(function() {
        owl.trigger('prev.owl.carousel');
    })

    // Переключаем слайд вперед
    $('.right-row').click(function() {
        owl.trigger('next.owl.carousel');
    })

});







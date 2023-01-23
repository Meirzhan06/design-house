
$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.bars').toggleClass('active');
        $('.burger-menu').toggleClass('active');
    });
});




$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll:1
              }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

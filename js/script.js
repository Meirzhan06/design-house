
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
    });
});

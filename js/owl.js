$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
       items:2,
        nav:true,
        loop:true,
        margin:53,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2
            }
        }
    });
});


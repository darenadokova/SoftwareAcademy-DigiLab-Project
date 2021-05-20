$(document).ready(function(){
    $(".our-project-wrapper").owlCarousel({
        loop:true,
        margin: 30,
        nav:true,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});
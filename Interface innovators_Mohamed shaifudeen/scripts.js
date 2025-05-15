$(document).ready(function(){
    $('.slider').slick({
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay speed in milliseconds
        dots: true, // Show dots navigation
        arrows: true, // Show arrows navigation
        infinite: true, // Enable infinite loop
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1 // Number of slides to scroll at once
    });
});

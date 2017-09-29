
$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $(window).on("load resize", function () {

        var carouselHeight = window.innerHeight - 50;
        $(".fill-screen-carousel .item").css("max-height", carouselHeight);
        $(".carousel-caption").css("bottom", carouselHeight*0.001);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    // smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    new WOW().init();

   


});
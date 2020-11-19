$(window).scroll(function() {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("scroll-color");
    } else {
        $("#menu").removeClass("scroll-color");
        $("#menu").addClass("scroll-color2");
    }
});

ScrollReveal().reveal('.about', {delay: 500});
ScrollReveal().reveal('.proyecto', {delay: 500});
ScrollReveal().reveal('.arduino', {delay: 500});
ScrollReveal().reveal('.coleg', {delay: 500});
ScrollReveal().reveal('.team', {delay: 500});


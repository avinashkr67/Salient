// For preloader

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})


// For menubar
$(document).ready(function () {
    $('.menu-down').click(function () {
        $('.n-center').toggle();
    })
})



$(document).ready(function () {

    // For banner --> carousel
    $('.custom-carousel1').owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateIn: 'fadeIn',
        slideSpeed: 2000,
        touchDrag: false,
        pullDrag: false,
        mouseDrag: false
    })


    // For services-video
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
})

// For works-section ---> screenshot carousel 
$(document).ready(function () {
    $('.custom-carousel2').owlCarousel({
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 4000,
        loop: true,


        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 4,
                nav: true
            }
        }
    })
})

// For works-section ---> screenshot gallery 
$(document).ready(function () {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });
});


// For Review section
$('.custom-carousel3').owlCarousel({
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    items: 1,
    nav: true,
    dots: false,
})



// For BackToTop button
$(function () {
    $('.bck').backToTop({
        iconName: 'fas fa-chevron-up',
        trigger: 300,
        fxName: 'fade',
        fxTransitionDuration: 300,
        scrollDuration: 300

    });

});


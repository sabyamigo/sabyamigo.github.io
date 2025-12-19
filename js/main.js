$(window).on('load', function() {
    $(".auto-type").each(function() {
        var items = $(this).attr('title') + ';' + $(this).text();
        $(this).empty().attr('title', '').teletype({
            text: $.map(items.split(';'), $.trim),
            typeDelay: 1,
            backDelay: 2,
            cursor: '|',
            delay: 2000,
            preserve: false,
            //prefix: '[teletype ~]# ',
            loop: 0 // '0' for unlimited strings
        });
    });
});


// Stop Pace after page load
$(window).on('load', function () {
    if (window.Pace) {
        Pace.stop();
        Pace.options.restartOnRequestAfter = false;
    }
});



jQuery(document).ready(function() {
    var $container = jQuery(".filter-container ul");
    jQuery(".filter-controls-wrap li").on('click', function() {
        var filterValue = jQuery(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
        //return false;
    });

    $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: ".filter-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".filter-item"
            }
        });
    });


    $(".filter-controls-wrap li").click(function(e) {
        $(".filter-controls-wrap li.active").removeClass('active');
        $(this).addClass('active');
    });

    //nav scroll
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 300, 'linear');
    });

    //on scroll nav class change
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0) {
            //$('nav').addClass('fixed');
            $(".scrolled").each(function(i) {
                if ($(this).position().top <= windscroll + 1) {
                    $("nav li.active").removeClass('active');
                    $("nav li").eq(i).addClass('active');
                }
            });

        } else {

            //$('nav').removeClass('fixed');
            $("nav li.active").removeClass('active');
            $("nav li:first").addClass('active');
        }

    }).scroll();


    //nav active class
    $(".ham").click(function(e){
        $("body").toggleClass('toggled');
        e.preventDefault();
    });


    $(".main-body").click(function() {
        $("body").removeClass('toggled');
    });
    

    // Stop Pace when Fancybox opens
    $(document).on('beforeShow.fb', function () {
        if (window.Pace) {
            //console.log('Fancybox clicked');
            Pace.stop();
        }
    });



});




particlesJS('banner-canvas',

    {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

);
(function($) {
"use strict";
    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width(),
            siteHeader = $('#site_header');

        if (windowWidth < 1025) {
            siteHeader.addClass('mobile-menu-hide');
            $('.menu-toggle').removeClass('open');
            setTimeout(function(){
                siteHeader.addClass('animate');
            }, 500);
        } else {
            siteHeader.removeClass('animate');
        }
    }
    // /Hide Mobile menu

    //On Window load & Resize
    $(window)
        .on('load', function() { //Load
            // Animation on Page Loading
            $(".preloader").fadeOut( 800, "linear" );

            // initializing page transition.
            var ptPage = $('.animated-sections');
            // if (ptPage[0]) {
            //     PageTransitions.init({
            //         menu: 'ul.main-menu',
            //     });
            // }
        })
        .on('resize', function() { //Resize
             mobileMenuHide();
        });


    // On Document Load
    $(document).ready(function () {
        var movementStrength = 23;
        var height = movementStrength / $(document).height();
        var width = movementStrength / $(document).width();
        $("body").on('mousemove', function(e){
            var pageX = e.pageX - ($(document).width() / 2),
                pageY = e.pageY - ($(document).height() / 2),
                newvalueX = width * pageX * -1,
                newvalueY = height * pageY * -1,
                elements = $('.lm-animated-bg');

            elements.addClass('transition');
            elements.css({
                "background-position": "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )",
            });

            setTimeout(function() {
                elements.removeClass('transition');
            }, 300);
        })

        // Mobile menu
        $('.menu-toggle').on("click", function () {
            $('#site_header').addClass('animate');
            $('#site_header').toggleClass('mobile-menu-hide');
            $('.menu-toggle').toggleClass('open');
        });

        // Mobile menu hide on main menu item click
        $('.main-menu').on("click", "a", function (e) {
            mobileMenuHide();
        });

        // Sidebar toggle
        $('.sidebar-toggle').on("click", function () {
            $('#blog-sidebar').toggleClass('open');
        });

        // Blog grid init
        // var $container = $(".blog-masonry");
        // $container.imagesLoaded(function(){
        //     $container.masonry();
        // });


        // Lightbox init
        // $('body').magnificPopup({
        //     delegate: 'a.lightbox',
        //     type: 'image',
        //     removalDelay: 300,

        //     // Class that is added to popup wrapper and background
        //     // make it unique to apply your CSS animations just to this exact popup
        //     mainClass: 'mfp-fade',
        //     image: {
        //         // options for image content type
        //         titleSrc: 'title',
        //         gallery: {
        //             enabled: true
        //         },
        //     },

        //     iframe: {
        //         markup: '<div class="mfp-iframe-scaler">'+
        //                 '<div class="mfp-close"></div>'+
        //                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
        //                 '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
        //               '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

        //         patterns: {
        //             youtube: {
        //               index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

        //               id: null, // String that splits URL in a two parts, second part should be %id%
        //               // Or null - full URL will be returned
        //               // Or a function that should return %id%, for example:
        //               // id: function(url) { return 'parsed id'; }

        //               src: '%id%?autoplay=1' // URL that will be set as a source for iframe.
        //             },
        //             vimeo: {
        //               index: 'vimeo.com/',
        //               id: '/',
        //               src: '//player.vimeo.com/video/%id%?autoplay=1'
        //             },
        //             gmaps: {
        //               index: '//maps.google.',
        //               src: '%id%&output=embed'
        //             }
        //         },

        //         srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
        //     },

        //     callbacks: {
        //         markupParse: function(template, values, item) {
        //          values.title = item.el.attr('title');
        //         }
        //     },
        // });
    });

})(jQuery);

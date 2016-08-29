/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var $document = $(document),
        $window = $(window),
        isMobileDevice, vh, vw;

    var setup = function () {
        // Background Pattern
        backgroundResize();


        // Hello Animation
        TweenMax.to('.background', 1.5, {
            opacity: 1
        });

        TweenMax.to('.background video', 1.5, {
            opacity: 1,
            delay: 0.5
        });

        TweenMax.to('.logo', 0.5, {
            opacity: 1,
            top: 0,
            delay: 0.5
        });

        TweenMax.to('.hello .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 1.5,
            onComplete: function () {
                $('.hello h1').typist({
                    speed: 12,
                    text: 'Hello world...'
                });
            }
        });

        TweenMax.to('.hello h1', 1.5, {
            'borderLeft' : '14px solid #2196f3',
            ease: Expo.easeOut,
            delay: 1.75
        });


        TweenMax.to('.hello p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1.75
        });

        TweenMax.to('.hello hr', 1, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 2
        });

        TweenMax.staggerTo('.hello li', 1, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 2.25
        }, 0.1);


        // About Animation
        TweenMax.to('.about .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut
        });

        TweenMax.to('.about .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.about h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.about .col-l p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.staggerTo('.skills__bar', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1
        }, 0.1);

        setTimeout(function() {
            $('.skills__bar').each(function (i) {
                var $this = $(this),
                    $percent = $this.data('percent');

                setTimeout(function () {
                    $this.find('.skills__percent-number').countTo({
                        from: 0.0,
                        to: $percent,
                        speed: 1500,
                        decimals: 1,
                        formatter: function (value, options) {
                            return value.toFixed(options.decimals);
                        }
                    });
                }, 250 * i);

                TweenMax.to($this, 1, {
                    width: $percent + '%',
                    ease: Expo.easeInOut,
                    delay: 0.25 * i
                });

                TweenMax.to($this.find('.skills__label'), 1, {
                    opacity: 1,
                    ease: Expo.easeInOut,
                    delay: 0.25 * i
                });
            });
        }, 750);

        TweenMax.to('.about hr', 1, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 1
        });

        TweenMax.to('.logos p', 1, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1.5
        });

        TweenMax.staggerTo('.about .logos li', 1, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1.75
        }, 0.1);


        // Achievements Animation
        TweenMax.to('.achievements .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut
        });

        TweenMax.to('.achievements .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.achievements h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.achievements .col-l p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.to('.achievements .col-l a', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1
        });

        TweenMax.staggerTo('.nominations li', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1
        }, 0.1);


        // contact Animation
        TweenMax.to('.contact .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut
        });

        TweenMax.to('.contact .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.contact h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.contact p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.staggerTo('.contact-icons li', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 1
        }, 0.1);


        $window.on('resize', debounce(function () {
            vw = $document.width();
            vh = $document.height();

            backgroundResize();
        }, 250));

        // Hello Section: nav animations
        $('.hello nav a').on('mouseover', function (e) {
            e.preventDefault();

            TweenMax.to($(this).find('.text'), 0.25, {
                autoAlpha: 0,
                scale: 1.5,
                ease: Expo.easeOut
            });
        }).on('mouseout', function (e) {
            e.preventDefault();

            TweenMax.to($(this).find('.text'), 0.25, {
                autoAlpha: 1,
                scale: 1,
                ease: Expo.easeOut
            });
        });
    };

    var check = function () {
        return $window.width() < 1024 ? true : false;
    };

    function backgroundResize() {
        isMobileDevice = $window.width() < 1024 ? 1 : 0;

        if (isMobileDevice) {
            vw = $document.width();
            vh = $document.height();
        } else {
            vw = $window.width();
            vh = $window.height();
        }

        $('.background').css({
            width: vw + 'px',
            height: vh + 'px'
        });
    };

    // Export module method
    parent.listeners = {
        setup: setup,
        check: check
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});

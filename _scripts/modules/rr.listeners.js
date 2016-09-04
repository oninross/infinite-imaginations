/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var $document = $(document),
        $window = $(window),
        currPage = 'hello',
        $data = 'hello',
        isFirstLoad = true,
        isMobileDevice, vh, vw;

    var setup = function () {
        // Set 3D environment
        TweenLite.set('#main', {
            perspective: 700
        });


        // Hello Animation
        TweenMax.to('.logo', 0.5, {
            opacity: 1,
            top: 0
        });

        TweenMax.to('.menu', 0.5, {
            autoAlpha: 1,
            top: 16,
            ease: Expo.easeOut,
            delay: 0.25
        });

        enterHome(isFirstLoad);

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


        // Navigation Listeners
        $('.hello nav a, .primary-nav a').on('click', function () {
            // e.preventDefault();

            var $this = $(this);

            $data = $this.data('name');

            // Create a clone of box
            $('body').append('<div class="element-clone" style="height: ' + $this.outerHeight() + 'px; width: ' + $this.outerWidth() + 'px;"/>');
            $this.clone().appendTo('.element-clone');

            // Set box same position as nav element
            TweenMax.set('.element-clone', {
                left: $this.offset().left,
                top: $this.offset().top
            });

            // Outro current slide
            exitCurrentSlide(currPage, $data);

            // Mobile menu click
            if ($this.closest('.primary-nav').length) {
                $('.header .menu').trigger('click');
            }
        });

        $('.header a').on('click', function () {
            // e.preventDefault();

            $data = 'hello';

            // Outro current slide
            exitCurrentSlide(currPage, $data);
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

    function exitCurrentSlide(currentPage, $data) {
        TweenMax.to('.' + currentPage, 0.5, {
            transform: 'translateZ(-100px)',
            opacity: 0,
            ease: Expo.easeOut,
            onComplete: function () {
                $('.' + currentPage).hide();
                resetSlide(currentPage);

                RR.history.pushState($data);

                $('.' + $data).show()
                    .find('h1 .text').html('&nbsp;');

                if ($data != 'hello') {
                    var $gotoElem = $('.' + $data + ' h1');
                    TweenMax.to('.element-clone', 0.75, {
                        left: $gotoElem.offset().left,
                        top: $gotoElem.offset().top,
                        height: $gotoElem.outerHeight(),
                        width: 15,
                        ease: Expo.easeInOut
                    });

                    TweenMax.to('.element-clone .icon', 0.75, {
                        opacity: 0,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                            $('.element-clone').remove();

                            TweenMax.set('.' + $data + ' h1', {
                                'borderLeft' : '15px solid #2196f3'
                            });

                            switch ($data) {
                                case 'about':
                                    enterAbout();
                                    break;

                                case 'achievements':
                                    enterAchievements();
                                    break;

                                case 'contact':
                                    enterContact();
                                    break;
                            }
                        }
                    });
                } else {
                    enterHome();
                }

                currPage = $data;
            }
        });
    };

    function resetSlide(slide) {
        $('.' + slide + ' h1 .text').html('&nbsp;');

        TweenMax.set('.' + slide, {
            transform: 'translateZ(0)',
            opacity: 1
        });

        TweenMax.set('.' + slide + ' .bar', {
            width: 0
        });

        TweenMax.set('.' + slide + ' h1', {
            'borderLeft': '0 solid #2196f3'
        });

        TweenMax.set('.' + slide + ' p', {
            opacity: 0,
            top: 50
        });

        TweenMax.set('.' + slide + ' hr', {
            width: 0
        });

        TweenMax.set('.' + slide + ' li', {
            opacity: 0,
            top: 50
        });

        switch (slide) {
        }
    };

    function enterHome(isFirstLoad) {
        $('.hello h1 .text').html('&nbsp;');

        TweenMax.to('.hello .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            delay: isFirstLoad == true ? 0.5 : 0,
            onComplete: function () {
                $('.hello h1 .text').typist({
                    speed: 12,
                    text: 'Hello world...'
                });
            }
        });

        TweenMax.to('.hello h1', 1.5, {
            'borderLeft' : '14px solid #2196f3',
            ease: Expo.easeOut,
            delay: isFirstLoad == true ? 0.75 : 0.25
        });

        TweenMax.to('.hello p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: isFirstLoad == true ? 0.75 : 0.25
        });

        TweenMax.to('.hello hr', 1, {
            width: '100%',
            ease: Expo.easeOut,
            delay: isFirstLoad == true ? 1 : 0.5
        });

        TweenMax.staggerTo('.hello li', 1, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: isFirstLoad == true ? 1.25 : 0.75
        }, 0.1);
    };

    function enterAbout() {
        TweenMax.to('.about .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.about h1 .text').typist({
                    speed: 12,
                    text: 'about'
                });
            }
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

        setTimeout(function () {
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
    };

    function enterAchievements() {
        TweenMax.to('.achievements .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.achievements h1 .text').typist({
                    speed: 12,
                    text: 'achievements'
                });
            }
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
    };

    function enterContact() {
        TweenMax.to('.contact .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.contact h1 .text').typist({
                    speed: 12,
                    text: 'contact'
                });
            }
        });

        TweenMax.to('.contact .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.contact p', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });

        TweenMax.staggerTo('.contact-icons li', 0.75, {
            opacity: 1,
            top: 0,
            ease: Expo.easeOut,
            delay: 0.5
        }, 0.1);
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

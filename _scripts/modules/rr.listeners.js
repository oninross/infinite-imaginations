/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var $document = $(document),
        $window = $(window),
        $main = $('#main'),
        $header = $('.header'),
        currentPage = 'hello',
        $data = 'hello',
        bSkillsLabel = [],
        isMobileDevice, vh, vw;

    var setup = function () {
        // Background Pattern
        // backgroundResize();

        // Set 3D environment
        TweenMax.set('#main', {
            perspective: 700
        });


        // Hello Animation
        TweenMax.to('.ui-corner', 0.5, {
            x: 0,
            y: 0,
            opacity: 1,
            delay: 0.25,
            ease: Expo.easeOut
        });

        TweenMax.to('.ui-pattern', 1, {
            opacity: 0.3,
            scale: 1,
            delay: 0.5,
            ease: Expo.easeOut
        });

        TweenMax.to('.logo', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });

        TweenMax.to('.menu', 0.5, {
            autoAlpha: 1,
            y: -10,
            ease: Expo.easeOut,
            delay: 0.75
        });


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
            var $this = $(this);

            $data = $this.data('name');

            if ($data == currentPage) {
                return false;
            }

            // Create a clone of box
            $('body').append('<div class="element-clone" style="height: ' + $this.outerHeight() + 'px; width: ' + $this.outerWidth() + 'px;"/>');
            $this.clone().appendTo('.element-clone');

            // Set box same position as nav element
            TweenMax.set('.element-clone', {
                left: $this.offset().left,
                top: $this.offset().top
            });

            // Mobile menu click
            if ($this.closest('.primary-nav').length) {
                $('.header .menu').trigger('click');
            }
        });

        $('.header .logo a').on('click', function () {
            $data = 'hello';
        });

        var b = baffle('p a', {
            characters: '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟'
        });

        $('.skills__bar').each(function(i, v) {
            bSkillsLabel.push(baffle('.skills__bar:nth-child(' + (i + 1) + ') .skills__label', { characters: '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟' }));
        });

        // bSkillsLabel = baffle('.skills__label', {
        //     characters: '▀▁▂▃▄▅▆▇█▉▊▋▌▍▎▏▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟'
        // });

        $('p a').on('mouseover', function() {

            // $(this)[0].start().reveal(750);
        });

        $window.on('resize', debounce(function () {
            vw = $document.width();
            vh = $document.height();

            backgroundResize();
        }, 250));
    };

    var check = function () {
        return $window.width() < 1024 ? true : false;
    };

    var exitCurrentSlide = function($url) {
        TweenMax.to('.' + currentPage, 0.75, {
            transform: 'translateZ(-100px)',
            opacity: 0,
            ease: Expo.easeOut,
            onComplete: function () {
                $('.' + currentPage).hide();

                if ($url == '') {
                    $url = 'hello';
                } else if (!$('.' + $url).length) {
                    $url = '404';
                }

                if ($url == '404') {
                    $url = 'error';
                }

                // backgroundResize();

                $('.' + $url).show()
                    .find('h1 .text').html('&nbsp;');

                resetSlide(currentPage);

                var $gotoElem = $('.' + $url + ' h1');
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

                        if ($url !== 'hello') {
                            TweenMax.set('.' + $url + ' h1', {
                                'borderLeft' : '15px solid #2196f3'
                            });
                        }

                        switch ($url) {
                            case 'hello':
                                enterHello();
                                break;
                            case 'about':
                                enterAbout();
                                break;

                            case 'achievements':
                                enterAchievements();
                                break;

                            case 'coding':
                                enterCoding();
                                break;

                            case 'design':
                                enterDesign();
                                break;

                            case 'contact':
                                enterContact();
                                break;

                            case 'case-study':
                                enterCaseStudy();
                                break;

                            case 'error':
                                enterError();
                                break;
                        }
                    }
                });

                currentPage = $url;
            }
        });
    };

    // function backgroundResize() {
    //     isMobileDevice = $window.width() < 1024 ? 1 : 0;

    //     if (isMobileDevice) {
    //         vh = $document.height() - $header.outerHeight() + 'px'
    //     } else {
    //         vh = 'auto'
    //     }
    // };

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

        TweenMax.set('.' + slide + ' .bar .icon', {
            opacity: 0
        });

        TweenMax.set('.' + slide + ' p', {
            opacity: 0,
            y: 50
        });

        TweenMax.set('.' + slide + ' hr', {
            width: 0
        });

        TweenMax.set('.' + slide + ' li', {
            opacity: 0,
            y: 50
        });

        switch (slide) {
            case 'about':
                TweenMax.set('.skills__bar', {
                    opacity: 0,
                    y: 50,
                    width: 0
                });

                TweenMax.set('.skills__label', {
                    opacity: 0
                });
                break;

            case 'achievements':
                TweenMax.set('.achievements .col-l a', {
                    opacity: 0,
                    y: 50
                });
                break;

            case 'coding':
                TweenMax.set('.coding .card', {
                    opacity: 0,
                    y: 50
                });
                break;

            case 'design':
                TweenMax.set('.design .card', {
                    opacity: 0,
                    y: 50
                });
                break;
        }
    };

    function enterHello() {
        $('.hello h1 .text').html('&nbsp;');

        TweenMax.to('.hello .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 0,
            onComplete: function () {
                $('.hello h1 .text').typist({
                    speed: 12,
                    text: 'Hello world...'
                });
            }
        });

        TweenMax.to('.hello h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.hello p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.hello hr', 1, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 0.5
        });

        TweenMax.staggerTo('.hello li', 1, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        }, 0.1);
    };

    function enterAbout() {
        TweenMax.to('.about .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.about h1 .text').typist({
                    speed: 12,
                    text: '// about'
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
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.staggerTo('.skills__bar', 0.75, {
            opacity: 1,
            y: 0,
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
                    delay: 0.25 * i,
                    onStart: function () {
                        bSkillsLabel[i].start().reveal(1000);
                    }
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
            y: 0,
            ease: Expo.easeOut,
            delay: 1.5
        });

        TweenMax.staggerTo('.about .logos li', 1, {
            opacity: 1,
            y: 0,
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
                    text: '// achievements'
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
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.to('.achievements .col-l a', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 1
        });

        TweenMax.staggerTo('.nominations li', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 1
        }, 0.1);
    };

    function enterCoding() {
        TweenMax.to('.coding .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.coding h1 .text').typist({
                    speed: 12,
                    text: '// coding'
                });
            }
        });

        TweenMax.to('.coding .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.coding h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.staggerTo('.coding .card', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        }, 0.1);
    };

    function enterDesign() {
        TweenMax.to('.design .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.design h1 .text').typist({
                    speed: 12,
                    text: '// design'
                });
            }
        });

        TweenMax.to('.design .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.design h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.staggerTo('.design .card', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        }, 0.1);
    };

    function enterCaseStudy() {
        TweenMax.to('.case-study .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.case-study h1 .text').typist({
                    speed: 12,
                    text: '// case study'
                });
            }
        });

        TweenMax.to('.case-study .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.case-study h1', 1.5, {
            'borderLeft' : '15px solid #2196f3',
            ease: Expo.easeOut,
            delay: 0.25
        });

        TweenMax.to('.case-study p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });
    };

    function enterContact() {
        TweenMax.to('.contact .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.contact h1 .text').typist({
                    speed: 12,
                    text: '// contact'
                });
            }
        });


        TweenMax.to('.contact .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.contact p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });

        TweenMax.staggerTo('.contact-icons li', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        }, 0.1);
    };

    function enterError() {
        TweenMax.to('.error .bar', 0.75, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                $('.error h1 .text').typist({
                    speed: 12,
                    text: '// error'
                });
            }
        });

        TweenMax.to('.error h1', 1.5, {
            'borderLeft' : '15px solid #cc0000',
            ease: Expo.easeOut,
        });

        TweenMax.to('.error .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.error p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });
    };

    var setActiveNav = function (navEl) {
        $('.primary-nav')
            .find('.active').removeClass('active').end()
            .find('.element-box[data-name=' + navEl + ']').addClass('active');
    };

    // Export module method
    parent.listeners = {
        setup: setup,
        check: check,
        exitCurrentSlide: exitCurrentSlide,
        setActiveNav: setActiveNav
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});

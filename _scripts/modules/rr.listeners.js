/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var $document = $(document),
        $window = $(window),
        $header = $('.header'),
        currentPage = 'hello',
        $data = 'hello',
        syncTime = 0,
        bSkillsLabel = [],
        bHello,
        bAbout,
        bAchievements,
        bCoding,
        bDesign,
        bContact,
        bCaseStudy,
        skillsWatcher,
        logosWatcher,
        nominationsWatcher,
        bError, vh, vw;

    var setup = function () {

        // Hello Animation
        syncTime = isMobile() == true ? 1 : 0.75;

        TweenMax.to('.logo', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.to('.menu', 0.5, {
            autoAlpha: 1,
            y: 0,
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

                setTimeout(function () {
                    RR.menu.tlHoverReverse();
                }, 500);
            }
        });

        $('.header .logo a').on('click', function () {
            $data = 'hello';
        });


        // Magical Scroll Monitor
        skillsWatcher = scrollMonitor.create(document.getElementsByClassName('skills'), -100);
        logosWatcher = scrollMonitor.create(document.getElementsByClassName('logos'), -100);
        nominationsWatcher = scrollMonitor.create(document.getElementsByClassName('nominations'), -100);

        $('.case-study__section').each(function (i, el) {
            var $this = $(el),
                caseStudyWatcher = scrollMonitor.create(el, -100);

            caseStudyWatcher.enterViewport(function () {
                TweenMax.to($this.find('h2'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });

                TweenMax.to($this.find('hr'), 0.5, {
                    width: '100%',
                    ease: Expo.easeOut,
                    delay: 0.25
                });

                TweenMax.to($this.find('.pattern'), 0.5, {
                    width: '100%',
                    ease: Expo.easeOut,
                    delay: 0.5
                });

                TweenMax.to($this.find('p'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.75
                });

                TweenMax.to($this.find('.cta'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 1
                });
            });
        });


        // Funky decoder
        bHello = baffle('.hello h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bAbout = baffle('.about h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bAchievements = baffle('.achievements h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bCoding = baffle('.coding h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bDesign = baffle('.design h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bContact = baffle('.contact h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bCaseStudy = baffle('.casestudy h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bError = baffle('.error h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        $('.skills__bar').each(function (i, v) {
            bSkillsLabel.push(baffle('.skills__bar:nth-child(' + (i + 1) + ') .skills__label', { characters: '█▓▒░', speed: 40 }));
        });


        // Load ajax
        $.ajax({
            url: '/api/caseStudies',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            success: function (data) {
                console.log(data)
            },
            error: function (error) {
                RR.materialDesign.toaster('Whoops! Something went wrong! Error (' + error.status + ' ' + error.statusText + ')');
            }
        });


        // Blarg
        $window.on('scroll', function () {
            // opacity = (document.body.scrollTop / 100).toFixed(2);
            if (document.body.scrollTop >= 20) {
                $header.addClass('dark shadow-z2');
            } else {
                $header.removeClass('dark shadow-z2');
            }
        });
    };

    var exitCurrentSlide = function ($url) {
        TweenMax.to('.' + currentPage + ' h1', 0.5, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut
        });

        TweenMax.to('.' + currentPage + ' p', 0.5, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut,
            delay: 0.1
        });

        TweenMax.to('.' + currentPage + ' hr', 0.5, {
            opacity: 0,
            y: -50,
            ease: Expo.easeInOut,
            delay: 0.2
        });

        if (currentPage == 'hello') {
            TweenMax.staggerTo('.hello li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });
        } else if (currentPage == 'about') {
            TweenMax.staggerTo('.skills__bar', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1);

            TweenMax.staggerTo('.logos li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });
        } else if (currentPage == 'achievements') {
            TweenMax.staggerTo('.nominations li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2
            }, 0.1, function () {
                $('.nominations li').attr('style', '');
                switchSlide($url);
            });

            TweenMax.to('.achievements a', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            });
        } else if (currentPage == 'coding') {
            TweenMax.staggerTo('.coding .card', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });
        } else if (currentPage == 'design') {
            TweenMax.staggerTo('.design .card', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });
        } else if (currentPage == 'case-study') {
            TweenMax.staggerTo('.case-study h2', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });

            TweenMax.to('.case-study a', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all',
                onComplete: function () {
                    switchSlide($url);
                }
            });
        } else if (currentPage == 'contact') {
            TweenMax.staggerTo('.contact-icons li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.3,
                clearProps: 'all'
            }, 0.1, function () {
                switchSlide($url);
            });
        } else if (currentPage == 'error') {
            TweenMax.to('element', 0.5, {
                delay: 0.2,
                onComplete: function () {
                    switchSlide($url);
                }
            });
        }
    };

    function switchSlide ($url) {
        $('.' + currentPage).hide();

        if ($url == '') {
            $url = 'hello';
        } else if (!$('.' + $url).length) {
            $url = '404';
        }

        if ($url == '404') {
            $url = 'error';
        }

        $('.' + $url)
            .show()
            .find('h1 .text').html('&nbsp;');

        var $gotoElem = $('.' + $url + ' h1');
        TweenMax.to('.element-clone', syncTime  , {
            left: $gotoElem.offset().left,
            top: $gotoElem.offset().top,
            height: $gotoElem.outerHeight(),
            width: 15,
            ease: Expo.easeInOut
        });

        TweenMax.to(window, syncTime, {
            scrollTo: {
                y: 0
            },
            ease: Expo.easeInOut
        });

        TweenMax.to('.element-clone .icon', syncTime, {
            opacity: 0,
            ease: Expo.easeInOut,
            onComplete: function () {
                $('.element-clone').remove();

                resetSlide(currentPage);

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

                currentPage = $url;
            }
        });
    }

    function resetSlide(slide) {
        TweenMax.set('.' + slide, {
            opacity: 1
        });

        TweenMax.set('.' + slide + ' .bar', {
            opacity: 1,
            width: 0
        });

        TweenMax.set('.' + slide + ' hr', {
            y: 0,
            opacity: 1,
            width: 0
        });

        TweenMax.set('.' + slide + ' h1', {
            'borderLeft': '0 solid #2196f3',
            y: 0,
            opacity: 1
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

        $('.' + slide + ' .text').removeClass('glitch');

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

                TweenMax.set('.achievements .ui-pattern', {
                    opacity: 0
                });

                TweenMax.set('.achievements .nominations li', {
                    opacity: 1,
                    y: 0
                });

                $('.achievements .nominations li').removeClass('init');
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

            case 'case-study':
                TweenMax.set('.case-study .case-study__section h2', {
                    opacity: 0,
                    y: 50
                });

                TweenMax.set('.case-study .case-study__section hr', {
                    width: 0
                });

                TweenMax.set('.case-study .case-study__section p', {
                    opacity: 0,
                    y: 50
                });

                TweenMax.set('.case-study .case-study__section .cta', {
                    opacity: 0,
                    y: 50
                });
                break;
        }

        scrollMonitor.recalculateLocations();
    };

    function enterHello() {
        $('.hello h1 .text').html('&nbsp;');

        TweenMax.to('.hello .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bHello.start().reveal(750, 750);
                $('.hello h1 .text').addClass('glitch');
            }
        });

        // TweenMax.to('.hello h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });

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
        TweenMax.to('.about .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bAbout.start().reveal(750, 750);
                $('.about h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.about h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        // TweenMax.to('.about h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });

        TweenMax.to('.about .col-l p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });

        if (isMobile()) {
            skillsWatcher.enterViewport(function () {
                TweenMax.staggerTo('.skills__bar', 0.75, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                }, 0.1);

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
                            bSkillsLabel[i].start().reveal(750, 750);
                        }
                    });
                });
            });

            logosWatcher.enterViewport(function () {
                TweenMax.to('.about hr', 1, {
                    width: '100%',
                    ease: Expo.easeOut
                });

                TweenMax.to('.logos p', 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.25
                });

                TweenMax.staggerTo('.about .logos li', 1, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.5
                }, 0.1);
            });
        } else {
            TweenMax.staggerTo('.skills__bar', 0.75, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.75
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
                            bSkillsLabel[i].start().reveal(750, 750);
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
                delay: 1.25
            });

            TweenMax.staggerTo('.about .logos li', 1, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 1.5
            }, 0.1);
        }
    };

    function enterAchievements() {
        TweenMax.to('.achievements .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bAchievements.start().reveal(750, 750);
                $('.achievements h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.achievements h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        // TweenMax.to('.achievements h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });

        TweenMax.to('.achievements .col-l p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.5
        });

        TweenMax.to('.achievements .col-l a', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        if (isMobile()) {
            nominationsWatcher.enterViewport(function () {
                TweenMax.staggerTo('.nominations .ui-pattern', 0.75, {
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut,
                    onStart: function () {
                        $(this.target).parent().parent().addClass('init');
                    }
                }, 0.1);
            });
        } else {
            TweenMax.staggerTo('.nominations .ui-pattern', 0.75, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut,
                delay: 0.75,
                onStart: function () {
                    $(this.target).parent().parent().addClass('init');
                }
            }, 0.1);
        }
    };

    function enterCoding() {
        TweenMax.to('.coding .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bCoding.start().reveal(750, 750);
                $('.coding h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.coding h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        // TweenMax.to('.coding h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });

        TweenMax.staggerTo('.coding .card', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        }, 0.1);
    };

    function enterDesign() {
        TweenMax.to('.design .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bDesign.start().reveal(750, 750);
                $('.design h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.design h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        // TweenMax.to('.design h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });

        TweenMax.staggerTo('.design .card', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        }, 0.1);
    };

    function enterCaseStudy() {
        TweenMax.to('.case-study .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bCaseStudy.start().reveal(750, 750);
                $('.case h1-study .text').addClass('glitch');
                scrollMonitor.recalculateLocations();
            }
        });

        TweenMax.to('.case-study h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        // TweenMax.to('.case-study h1', 1.5, {
        //     'borderLeft' : '15px solid #2196f3',
        //     ease: Expo.easeOut,
        //     delay: 0.25
        // });
    };

    function enterContact() {
        TweenMax.to('.contact .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bContact.start().reveal(750, 750);
                $('.contact h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.contact h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.contact p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });

        TweenMax.staggerTo('.contact-icons li', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 1
        }, 0.1);
    };

    function enterError() {
        TweenMax.to('.error .bar', 1, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bError.start().reveal(750, 750);
                $('.error h1 .text').addClass('glitch');
            }
        });

        TweenMax.to('.error h1', 1.5, {
            'borderLeft' : '15px solid #383838',
            ease: Expo.easeOut
        });

        TweenMax.to('.error h1 .icon', 1.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.error p', 0.75, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.75
        });
    };

    var setActiveNav = function (navEl) {
        $('.primary-nav')
            .find('.active').removeClass('active').end()
            .find('.element-box[data-name=' + navEl + ']').addClass('active');
    };

    var isMobile = function () {
        return Modernizr.mq('(max-width: 767px)');
    };

    var isTablet = function () {
        return Modernizr.mq('(min-width: 768px)');
    };

    var isDesktop = function () {
        return Modernizr.mq('(min-width: 1024px)');
    };

    // Export module method
    parent.listeners = {
        setup: setup,
        exitCurrentSlide: exitCurrentSlide,
        setActiveNav: setActiveNav,
        isMobile: isMobile,
        isTablet: isTablet,
        isDesktop: isDesktop
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});

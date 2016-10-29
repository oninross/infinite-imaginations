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
        syncTime = 0.5,
        nextInd = 0,
        caseStudies = [],
        bSkillsLabel = [],
        bHello,
        bAbout,
        bAchievements,
        bCoding,
        bDesign,
        bContact,
        bCaseStudy,
        bError,
        skillsWatcher,
        logosWatcher,
        nominationsWatcher,
        caseStudyWatcher,
        caseStudyItem,
        nextCaseStudyItem,
        ind, vh, vw;

    var setup = function () {

        // Hello Animation
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
        if (isDesktop()) {
            $('.hello nav a, .primary-nav a').on('mouseover', function (e) {
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
        }


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
                top: $this.offset().top,
                boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)'
            });

            // Mobile menu click
            if ($this.closest('.primary-nav').length) {
                $('.header .menu').trigger('click');

                setTimeout(function () {
                    RR.menu.tlHoverReverse();
                }, 500);

                // RR.gaListeners.gaClickEvent('Menu', $data);
            } else {
                RR.gaListeners.gaClickEvent('Hello: Nav', $data);
            }
        });

        $('.header .logo a').on('click', function () {
            $data = 'hello';

            RR.gaListeners.gaClickEvent('Logo', null);
        });

        $('section h1 .icon').on('click', function () {
            TweenMax.fromTo(this, 0.5, {
                x: -1
            },
            {
                x: 1,
                ease: RoughEase.ease.config({
                    strength: 4,
                    points: 50,
                    template: Linear.easeNone,
                    randomize: false
                }),
                clearProps: "x"
            })
        })

        $('p a').on('click', function () {
            RR.gaListeners.gaClickEvent('Link', $(this).data('text'));
        });

        $('.achievements a').on('click', function () {
            RR.gaListeners.gaClickEvent('Link', 'infinite imaginations: BETA');
        });

        $('.case-study').on('click', '.navigation a', function () {
            if ($(this).find('span').length) {
                RR.gaListeners.gaClickEvent('Next', $(this).find('.navigation-label span').text());
            } else {
                RR.gaListeners.gaClickEvent('Next', $(this).find('.navigation-label').text());
            }
        });

        $('.contact-icons a').click(function () {
            RR.gaListeners.gaClickEvent('Contact', $(this).find('.vh').text());
        });


        // Magical Scroll Monitor
        skillsWatcher = scrollMonitor.create(document.getElementsByClassName('skills'), -100);
        logosWatcher = scrollMonitor.create(document.getElementsByClassName('logos'), -100);
        nominationsWatcher = scrollMonitor.create(document.getElementsByClassName('nominations'), -100);

        createCaseStudyScrollMonitor();

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

        bCaseStudy = baffle('.case-study h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        bContact = baffle('.contact h1 .text', {
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
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                populateData(data);
            },
            error: function (error) {
                RR.materialDesign.toaster('Whoops! Something went wrong! Error (' + error.status + ' ' + error.statusText + ')');
            }
        });


        // some funky stuff
        var title = $(document).find('title').text(),
            altTitle = 'Don\'t, just leave yet!',
            $docTitle = $(document).find('title');

        document.addEventListener('visibilitychange', function () {
            document.hidden ? $docTitle.text(altTitle) : $docTitle.text(title)
        })


        // Window scroll
        var st, $headerHeight, lastScrollTop;
        $window.on('scroll', function () {
            st = $(this).scrollTop();
            $headerHeight = $header.height();
            lastScrollTop;

            if (st > lastScrollTop) {
                // scroll down
                if (document.body.scrollTop >= 20) {
                    $header.addClass('dark hide shadow-z2');
                }
            } else {
                // scroll up
                if (st <= $headerHeight) {
                    $header.removeClass('dark shadow-z2');
                } else {
                    $header.removeClass('hide');
                }
            }

            lastScrollTop = st;
        });
    };

    function createCaseStudyScrollMonitor() {
        $('.case-study__section').each(function (i, el) {
            var $this = $(el);

            caseStudyWatcher = scrollMonitor.create(el, -100);

            caseStudyWatcher.enterViewport(function () {
                TweenMax.to($this.find('h2'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });

                TweenMax.staggerTo($this.find('.col'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                }, 0.1);

                TweenMax.staggerTo($this.find('h3'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.1
                }, 0.1);

                TweenMax.to($this.find('hr'), 0.5, {
                    width: '100%',
                    ease: Expo.easeOut,
                    delay: 0.2
                });

                TweenMax.to($this.find('.pattern'), 0.5, {
                    width: '100%',
                    ease: Expo.easeOut,
                    delay: 0.3
                });

                TweenMax.staggerTo($this.find('p'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.4
                }, 0.1);

                TweenMax.staggerTo($this.find('li'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.5
                }, 0.1);

                TweenMax.to($this.find('.cta'), 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.6
                });
            });
        });
    };

    function destroyCaseStudyScrollMonitor() {
        caseStudyWatcher.destroy();
    };

    function populateData(json) {
        var caseStudyCoding = $('.coding'),
            caseStudyDesign = $('.design'),
            caseStudyCard,
            nthChild;

        caseStudies = json.caseStudies;

        $('.card-link').each(function (i, v) {
            var $this = $(this);

            if (i == 0 || i < 3) {
                nthChild = i + 1;
            } else {
                nthChild = (i + 1) - 3;
            }

            $this.attr('href', caseStudies[i].url.local);
            $this.data('original', caseStudies[i].images.small);
            $this.find('img').attr('src', caseStudies[i].images.small);
            $this.find('img').attr('alt', caseStudies[i].title);
            $this.find('.card-title').text(caseStudies[i].title);
        }).on('click', function () {
            RR.gaListeners.gaClickEvent('Case Studies', $(this).find('.card-title').text());
        });
    };

    var getData = function (param) {
        switch (param) {
            case 'elements':
                ind = 0;
                break;
            case 'physical-web':
                ind = 1;
                break;
            case 'adelphi-digital':
                ind = 2;
                break;
            case 'infinite-imaginations-beta':
                ind = 3;
                break;
            case 'the-jewel-box':
                ind = 4;
                break;
            case 'envirobot':
                ind = 5;
                break;
            default:
                window.location.href = '#/error';
                break;

        }

        setData(ind);
    };

    function setData(ind) {
        // caseStudies[ind]
        var $caseStudy = $('.case-study'),
            caseStudyTemp = doT.template($('#case-study-template').html()),
            obj = {};

        if (caseStudies[ind] == undefined) {
            setTimeout(function () {
                setData(ind);
            }, 1000);
        } else {
            nextInd = (ind + 1) == caseStudies.length ? 0 : ind + 1;
            caseStudyItem = caseStudies[ind];
            nextCaseStudyItem = caseStudies[nextInd];

            obj = {
                title: caseStudyItem.title,
                image: caseStudyItem.images.large,
                tldr: caseStudyItem.tldr,
                url: {
                    live: caseStudyItem.url.live
                },
                role: caseStudyItem.role,
                challenges: caseStudyItem.challenges,
                solutions: caseStudyItem.solutions,
                technology: caseStudyItem.technology,
                category: caseStudyItem.category,
                nextItem: {
                    url: nextCaseStudyItem.url.local,
                    title: nextCaseStudyItem.title
                }
            };

            $('.primary-nav .active').removeClass('active');
            $('.primary-nav a[data-name="' + caseStudyItem.category + '"]').addClass('active');

            $('.case-study__wrap').html(caseStudyTemp(obj));
        }
    };

    function switchSlide($url) {
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
        TweenMax.to('.element-clone', syncTime, {
            left: $gotoElem.offset().left,
            top: $gotoElem.offset().top,
            height: $gotoElem.outerHeight(),
            width: 15,
            boxShadow: '0',
            ease: Expo.easeInOut
        });

        if ($url == 'case-study') {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        } else {
            TweenMax.to(window, syncTime, {
                scrollTo: {
                    y: 0
                },
                ease: Expo.easeInOut,
                onComplete: function () {
                    $header.removeClass('dark shadow-z2');
                }
            });
        }

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
    };

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

        TweenMax.set('.' + slide + ' h2', {
            opacity: 0,
            y: 50
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
                $('.achievements .nominations li').removeClass('init');

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
                TweenMax.set('.case-study', {
                    opacity: 1,
                    y: 0
                });

                TweenMax.set('.case-study__section h2', {
                    opacity: 0,
                    y: 50
                });

                TweenMax.set('.case-study__section h3', {
                    opacity: 0,
                    y: 50
                });

                TweenMax.set('.case-study__section hr', {
                    width: 0
                });

                TweenMax.set('.case-study__section .pattern', {
                    width: 0
                });

                TweenMax.set('.case-study__section p', {
                    opacity: 0,
                    y: 50
                });

                TweenMax.set('.case-study__section .cta', {
                    opacity: 0,
                    y: 50
                });
                break;
        }
    };

    function enterHello() {
        $('.hello h1 .text').html('&nbsp;');

        TweenMax.to('.hello h1', 0.5, {
            'borderLeft' : '15px solid #2196f3'
        });

        TweenMax.to('.hello .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bHello.start().reveal(750, 750);
                $('.hello h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.hello h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.hello p', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        });

        TweenMax.to('.hello hr', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            delay: 0.2
        });

        TweenMax.staggerTo('.hello li', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.3
        }, 0.1);
    };

    function enterAbout() {
        TweenMax.to('.about .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bAbout.start().reveal(750, 750);
                $('.about h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.about h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.about h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.about .col-l p', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        });

        if (isMobile()) {
            skillsWatcher.enterViewport(function () {
                TweenMax.to('.about h2', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });

                TweenMax.staggerTo('.skills__bar', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
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

                    TweenMax.to($this, 0.75, {
                        width: $percent + '%',
                        ease: Expo.easeInOut,
                        delay: 0.25 * i
                    });

                    TweenMax.to($this.find('.skills__label'), 0.75, {
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
                TweenMax.to('.about hr', 0.5, {
                    width: '100%',
                    ease: Expo.easeOut
                });

                TweenMax.to('.logos p', 0.75, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.25
                });

                TweenMax.staggerTo('.about .logos li', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.5
                }, 0.1);
            });
        } else {
            TweenMax.to('.about h2', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.2
            });

            TweenMax.staggerTo('.skills__bar', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.3
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

                    TweenMax.to($this, 0.75, {
                        width: $percent + '%',
                        ease: Expo.easeInOut,
                        delay: 0.1 * i
                    });

                    TweenMax.to($this.find('.skills__label'), 0.5, {
                        opacity: 1,
                        ease: Expo.easeInOut,
                        delay: 0.1 * i,
                        onStart: function () {
                            bSkillsLabel[i].start().reveal(750, 750);
                        }
                    });
                });
            }, 200);

            TweenMax.to('.about hr', 0.5, {
                width: '100%',
                ease: Expo.easeOut,
                delay: 0.4
            });

            TweenMax.to('.logos p', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.5
            });

            TweenMax.staggerTo('.about .logos li', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.6
            }, 0.1);
        }
    };

    function enterAchievements() {
        TweenMax.to('.achievements .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bAchievements.start().reveal(750, 750);
                $('.achievements h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.achievements h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.achievements h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.achievements .col-l p', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        });

        TweenMax.to('.achievements .col-l a', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.2
        });

        if (isMobile()) {
            nominationsWatcher.enterViewport(function () {
                TweenMax.to('.achievements h2', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                });

                TweenMax.staggerTo('.nominations .ui-pattern', 0.5, {
                    opacity: 1,
                    scale: 1,
                    ease: Expo.easeOut,
                    onStart: function () {
                        $(this.target).parent().parent().addClass('init');
                    }
                }, 0.1);
            });
        } else {
            TweenMax.to('.achievements h2', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.3
            });

            TweenMax.staggerTo('.nominations .ui-pattern', 0.5, {
                opacity: 1,
                scale: 1,
                ease: Expo.easeOut,
                delay: 0.4,
                onStart: function () {
                    $(this.target).parent().parent().addClass('init');
                }
            }, 0.1);
        }
    };

    function enterCoding() {
        TweenMax.to('.coding .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bCoding.start().reveal(750, 750);
                $('.coding h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.coding h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.coding h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.staggerTo('.coding .card', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        }, 0.1);
    };

    function enterDesign() {
        TweenMax.to('.design .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bDesign.start().reveal(750, 750);
                $('.design h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.design h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.design h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.staggerTo('.design .card', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        }, 0.1);
    };

    function enterCaseStudy() {
        createCaseStudyScrollMonitor();

        TweenMax.to('.case-study .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bCaseStudy.text(function () {
                    return '// case study: ' + caseStudyItem.title;
                }).start().reveal(750, 750);

                $('.case-study h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.case-study h1 .text').removeClass('glitch');
                }, 5000);
                caseStudyWatcher.recalculateLocation();
            }
        });

        TweenMax.to('.case-study h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });
    };

    function enterContact() {
        TweenMax.to('.contact .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bContact.start().reveal(750, 750);
                $('.contact h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.contact h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.contact h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.contact p', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        });

        TweenMax.staggerTo('.contact-icons li', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.2
        }, 0.1);
    };

    function enterError() {
        TweenMax.to('.error .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                bError.start().reveal(750, 750);
                $('.error h1 .text').addClass('glitch');

                setTimeout(function () {
                    $('.error h1 .text').removeClass('glitch');
                }, 5000);
            }
        });

        TweenMax.to('.error h1', 1.5, {
            'borderLeft' : '15px solid #383838',
            ease: Expo.easeOut
        });

        TweenMax.to('.error h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });

        TweenMax.to('.error p', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.1
        });
    };

    var exitCurrentSlide = function ($url) {
        if (currentPage != 'case-study') {
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

            TweenMax.to('.' + currentPage + ' h2', 0.5, {
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
        }

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
            destroyCaseStudyScrollMonitor();

            TweenMax.to('.case-study', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
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
        getData: getData,
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

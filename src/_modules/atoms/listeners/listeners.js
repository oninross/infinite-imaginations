'use strict';

import baffle from 'baffle';
import scrollMonitor from 'scrollMonitor';
import scrollTo from 'ScrollToPlugin';
import countTo from 'countTo';
import GaListeners from '../GaListeners/GaListeners'
import { isDesktop, isMobile } from '../../../_assets/infiniteimaginations/js/_helper.js'
import { toaster } from '../../../_assets/infiniteimaginations/js/_material.js'
import { TweenMax } from 'gsap';

export default class Listeners {
    constructor() {
        const that = this,
            $window = $(window);

        let $data = 'hello';

        that.GaListeners = new GaListeners();
        that.$header = $('.header');
        that.currentPage = 'hello';
        that.syncTime = 0.5
        that.caseStudies = [];
        that.articles = [];
        that.bSkillsLabel = [];
        that.ind;
        that.nextInd = 0;
        that.caseStudyItem;
        that.nextCaseStudyItem;
        that.articleItem;
        that.nextArticleItem;
        that.bHello;
        that.bAbout;
        that.bAchievements;
        that.bCoding;
        that.bDesign;
        that.bContact;
        that.bCaseStudy;
        that.bArticle;
        that.bError;
        that.skillsWatcher;
        that.logosWatcher;
        that.ribbonsWatcher;
        that.nominationsWatcher;
        that.listingsWatcher;
        that.caseStudyWatcher;
        that.articleWatcher;

        TweenMax.to('.loader', 1, {
            opacity: 0,
            scale: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
                $('.loader').remove();
            }
        });

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
            const $this = $(this);

            $data = $this.data('name');

            if ($data == that.currentPage) {
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

                that.GaListeners.gaClickEvent('Menu: Nav', $data);
            } else {
                that.GaListeners.gaClickEvent('Hello: Nav', $data);
            }
        });

        $('.header .logo a').on('click', function () {
            $data = 'hello';

            that.GaListeners.gaClickEvent('Logo', null);
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
            that.GaListeners.gaClickEvent('Link', $(this).data('text'));
        });

        $('.achievements a').on('click', function () {
            that.GaListeners.gaClickEvent('Link', 'infinite imaginations: BETA');
        });

        $('.case-study').on('click', '.navigation a', function () {
            if ($(this).find('span').length) {
                that.GaListeners.gaClickEvent('Next', $(this).find('.navigation-label span').text());
            } else {
                that.GaListeners.gaClickEvent('Next', $(this).find('.navigation-label').text());
            }
        });

        $('.contact-icons a').click(function () {
            that.GaListeners.gaClickEvent('Contact', $(this).find('.sr-only').text());
        });


        // Magical Scroll Monitor
        that.skillsWatcher = scrollMonitor.create(document.getElementsByClassName('skills'), -100);
        that.logosWatcher = scrollMonitor.create(document.getElementsByClassName('logos'), -100);
        that.ribbonsWatcher = scrollMonitor.create(document.getElementsByClassName('ribbons'), -100);
        that.nominationsWatcher = scrollMonitor.create(document.getElementsByClassName('nominations'), -100);
        that.listingsWatcher = scrollMonitor.create(document.getElementsByClassName('listing'), -100);

        that.createCaseStudyScrollMonitor();

        // Funky decoder
        that.bHello = baffle('.hello h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bAbout = baffle('.about h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bAchievements = baffle('.achievements h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bCoding = baffle('.coding h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bDesign = baffle('.design h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bCaseStudy = baffle('.case-study h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bArticle = baffle('.article h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bContact = baffle('.contact h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        that.bError = baffle('.error h1 .text', {
            characters: '█▓▒░',
            speed: 40
        });

        $('.skills__bar').each(function (i, v) {
            that.bSkillsLabel.push(baffle('.skills__bar:nth-child(' + (i + 1) + ') .skills__label', { characters: '█▓▒░', speed: 40 }));
        });


        // Load Case Studies and Articles
        $.ajax({
            url: '/api/content',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                that.articles = data.articles;
                that.populateData(data);
            },
            error: function (error) {
                toaster('Whoops! Something went wrong! Error (' + error.status + ' ' + error.statusText + ')');
            }
        });


        // some funky stuff
        const altTitle = 'Don\'t just leave yet!';

        let title = $(document).find('title').text(),
            $docTitle = $(document).find('title');

        document.addEventListener('visibilitychange', function () {
            document.hidden ? $docTitle.text(altTitle) : $docTitle.text(title)
        });


        // Window scroll
        let st, $headerHeight, lastScrollTop;
        $window.on('scroll', function () {
            st = $(this).scrollTop();
            that.$headerHeight = that.$header.height();
            lastScrollTop;

            if (st > lastScrollTop) {
                // scroll down
                if (document.body.scrollTop >= 20) {
                    that.$header.addClass('dark hide shadow-z2');
                }
            } else {
                // scroll up
                if (st <= $headerHeight) {
                    that.$header.removeClass('dark shadow-z2');
                } else {
                    that.$header.removeClass('hide');
                }
            }

            lastScrollTop = st;
        });
    }

    createCaseStudyScrollMonitor() {
        const that = this;

        $('.case-study__section').each(function (i, el) {
            const $this = $(el);

            that.caseStudyWatcher = scrollMonitor.create(el, -100);

            that.caseStudyWatcher.enterViewport(function () {
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
    }

    destroyCaseStudyScrollMonitor() {
        const that = this;

        that.caseStudyWatcher.destroy();
    }

    createArticleScrollMonitor() {
        const that = this;

        $('.article__section').each(function (i, el) {
            const $this = $(el);

            that.articleWatcher = scrollMonitor.create(el, -100);

            that.articleWatcher.enterViewport(function () {
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
    }

    destroyArticleScrollMonitor() {
        const that = this;

        that.articleWatcher.destroy();
    }

    populateData(json) {
        const that = this;

        let nthChild;

        that.caseStudies = json.caseStudies;

        $('.card-link').each(function (i, v) {
            const $this = $(this);

            if (i == 0 || i < 3) {
                nthChild = i + 1;
            } else {
                nthChild = (i + 1) - 3;
            }

            $this.attr('href', that.caseStudies[i].url.local);
            $this.find('.lazy').css('background-image', 'url(' + that.caseStudies[i].images.small + ')');
            $this.find('.card-title').text(that.caseStudies[i].title);
        }).on('click', function () {
            that.GaListeners.gaClickEvent('Case Studies', $(this).find('.card-title').text());
        });
    }

    getCaseStudy(param) {
        const that = this;

        switch (param) {
            case 'elements':
                that.ind = 0;
                break;
            case 'physical-web':
                that.ind = 1;
                break;
            case 'adelphi-digital':
                that.ind = 2;
                break;
            case 'infinite-imaginations-beta':
                that.ind = 3;
                break;
            case 'the-jewel-box':
                that.ind = 4;
                break;
            case 'envirobot':
                that.ind = 5;
                break;
            default:
                window.location.href = '#/error';
                break;

        }

        that.setCaseStudy(that.ind);
    }

    setCaseStudy(ind) {
        // caseStudies[ind]
        const that = this,
            caseStudyTemp = doT.template($('#case-study-template').html());

        let obj = {};

        if (that.caseStudies[ind] == undefined) {
            setTimeout(function () {
                setCaseStudy(ind);
            }, 1000);
        } else {
            that.nextInd = (ind + 1) == that.caseStudies.length ? 0 : ind + 1;
            that.caseStudyItem = that.caseStudies[ind];
            that.nextCaseStudyItem = that.caseStudies[that.nextInd];

            obj = {
                title: that.caseStudyItem.title,
                image: that.caseStudyItem.images.large.url,
                padding: that.caseStudyItem.images.large.padding,
                tldr: that.caseStudyItem.tldr,
                url: {
                    live: that.caseStudyItem.url.live
                },
                role: that.caseStudyItem.role,
                challenges: that.caseStudyItem.challenges,
                solutions: that.caseStudyItem.solutions,
                technology: that.caseStudyItem.technology,
                category: that.caseStudyItem.category,
                nextItem: {
                    url: that.nextCaseStudyItem.url.local,
                    title: that.nextCaseStudyItem.title
                }
            };

            $('.primary-nav .active').removeClass('active');
            $('.primary-nav a[data-name="' + that.caseStudyItem.category + '"]').addClass('active');

            $('.case-study__wrap').html(caseStudyTemp(obj));
        }
    }

    getArticle(param) {
        const that = this;

        switch (param) {
            case '2018-the-year-of-artificial-intelligence':
                that.ind = 0;
                break;
            case 'vr-and-ar-in-the-mobile-web':
                that.ind = 1;
                break;
            case 'are-qr-codes-making-a-comeback':
                that.ind = 2;
                break;
            case 'identifying-objects-using-your-browser-with-tensorflowjs':
                that.ind = 3;
                break;
            case 'the-art-of-minimalism-with-ux':
                that.ind = 4;
                break;
            case 'service-workers-on-ios':
                that.ind = 5;
                break;
            case 'through-the-looking-glass-an-overview-of-visual-recognition':
                that.ind = 6;
                break;
            case 'an-app-but-not-progressive-web-apps':
                that.ind = 7;
                break;
            case 'what-i-have-learned-from-building-a-chatbot':
                that.ind = 8;
                break;
            case 'ux-beacons-and-the-physical-web':
                that.ind = 9;
                break;
            default:
                window.location.href = '#/error';
                break;
        }

        that.setArticle(that.ind);
    }

    setArticle(ind) {
        // articles[ind]
        const that = this,
            articleTemp = doT.template($('#article-template').html());

        let obj = {};

        if (that.articles[ind] == undefined) {
            setTimeout(function () {
                setArticle(ind);
            }, 1000);
        } else {
            that.nextInd = (ind + 1) == that.articles.length ? 0 : ind + 1;
            that.articleItem = that.articles[ind];
            that.nextArticleItem = that.articles[that.nextInd];

            obj = {
                title: that.articleItem.title,
                content: that.articleItem.content,
                nextItem: {
                    url: that.nextArticleItem.url,
                    title: that.nextArticleItem.title
                }
            };

            $('.article__wrap').html(articleTemp(obj));
        }
    }

    switchSlide($url) {
        const that = this;

        $('.' + that.currentPage).hide();

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

        let $gotoElem = $('.' + $url + ' h1');
        TweenMax.to('.element-clone', that.syncTime, {
            left: $gotoElem.offset().left,
            top: $gotoElem.offset().top,
            height: $gotoElem.outerHeight(),
            width: 15,
            boxShadow: '0',
            ease: Expo.easeInOut
        });

        if ($url == 'case-study') {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            that.$header.removeClass('dark hide shadow-z2');
        } else {
            TweenMax.to(window, that.syncTime, {
                scrollTo: {
                    y: 0
                },
                ease: Expo.easeInOut,
                onComplete: function () {
                    that.$header.removeClass('dark hide shadow-z2');
                }
            });
        }

        TweenMax.to('.element-clone .icon', that.syncTime, {
            opacity: 0,
            ease: Expo.easeInOut,
            onComplete: function () {
                $('.element-clone').remove();

                that.resetSlide(that.currentPage);

                if ($url !== 'hello') {
                    TweenMax.set('.' + $url + ' h1', {
                        'borderLeft': '15px solid #2196f3'
                    });
                }

                switch ($url) {
                    case 'hello':
                        that.enterHello();
                        break;

                    case 'about':
                        that.enterAbout();
                        break;

                    case 'achievements':
                        that.enterAchievements();
                        break;

                    case 'coding':
                        that.enterCoding();
                        break;

                    case 'design':
                        that.enterDesign();
                        break;

                    case 'contact':
                        that.enterContact();
                        break;

                    case 'case-study':
                        that.enterCaseStudy();
                        break;

                    case 'article':
                        that.enterArticle();
                        break;

                    case 'error':
                        that.enterError();
                        break;
                }

                that.currentPage = $url;
            }
        });
    }

    resetSlide(slide) {
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

                TweenMax.set('.achievements .col-l .link', {
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
    }

    enterHello() {
        const that = this;

        $('.hello h1 .text').html('&nbsp;');

        TweenMax.to('.hello h1', 0.5, {
            'borderLeft': '15px solid #2196f3'
        });

        TweenMax.to('.hello .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bHello.start().reveal(750, 750);
                $('.hello h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.hello h1 .text').removeClass('glitch');
                // }, 5000);
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
    }

    enterAbout() {
        const that = this;

        TweenMax.to('.about .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bAbout.start().reveal(750, 750);
                $('.about h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.about h1 .text').removeClass('glitch');
                // }, 5000);
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
            that.skillsWatcher.enterViewport(function () {
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
                    const $this = $(this),
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
                            that.bSkillsLabel[i].start().reveal(750, 750);
                        }
                    });
                });
            });

            that.logosWatcher.enterViewport(function () {
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
                    const $this = $(this),
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
                            that.bSkillsLabel[i].start().reveal(750, 750);
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
    }

    enterAchievements() {
        const that = this;

        TweenMax.to('.achievements .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bAchievements.start().reveal(750, 750);
                $('.achievements h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.achievements h1 .text').removeClass('glitch');
                // }, 5000);
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

        TweenMax.to('.achievements .col-l .link', 0.5, {
            opacity: 1,
            y: 0,
            ease: Expo.easeOut,
            delay: 0.2
        });

        that.nominationsWatcher.enterViewport(function () {
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

            TweenMax.to('.achievements hr', 0.5, {
                width: '100%',
                ease: Expo.easeOut
            });
        });

        that.ribbonsWatcher.enterViewport(function () {
            TweenMax.to('.ribbons p', 0.75, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.25
            });

            TweenMax.staggerTo('.achievements .ribbons li', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.5
            }, 0.1);
        });

        if (isMobile()) {
            that.listingsWatcher.enterViewport(function () {
                TweenMax.staggerTo('.listing h2', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut
                }, 0.1);

                TweenMax.staggerTo('.listing li', 0.5, {
                    opacity: 1,
                    y: 0,
                    ease: Expo.easeOut,
                    delay: 0.2
                }, 0.1);
            });
        } else {
            TweenMax.staggerTo('.listing h2', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut
            }, 0.1);

            TweenMax.staggerTo('.listing li', 0.5, {
                opacity: 1,
                y: 0,
                ease: Expo.easeOut,
                delay: 0.2
            }, 0.1);
        }
    }

    enterCoding() {
        const that = this;

        TweenMax.to('.coding .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bCoding.start().reveal(750, 750);
                $('.coding h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.coding h1 .text').removeClass('glitch');
                // }, 5000);
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
    }

    enterDesign() {
        const that = this;

        TweenMax.to('.design .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bDesign.start().reveal(750, 750);
                $('.design h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.design h1 .text').removeClass('glitch');
                // }, 5000);
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
    }

    enterCaseStudy() {
        const that = this;

        that.createCaseStudyScrollMonitor();

        TweenMax.to('.case-study .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bCaseStudy.text(function () {
                    return '// case study: ' + that.caseStudyItem.title;
                }).start().reveal(750, 750);

                $('.case-study h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.case-study h1 .text').removeClass('glitch');
                // }, 5000);
                that.caseStudyWatcher.recalculateLocation();
            }
        });

        TweenMax.to('.case-study h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });
    }

    enterArticle() {
        const that = this;

        $('title').text(that.articleItem.title);
        $('meta[property="og:title"]').attr('content', that.articleItem.title + ' | infinite imaginations');
        $('meta[property="og:type"]').attr('content', 'article');
        $('meta[property="og:url"]').attr('content', window.location.href);
        $('meta[property="og:description"]').attr('content', '');

        $('meta[property="twitter:title"]').attr('content', that.articleItem.title + ' | infinite imaginations');
        $('meta[property="twitter:url"]').attr('content', window.location.href);
        $('meta[property="twitter:description"]').attr('content', '');

        that.createArticleScrollMonitor();

        TweenMax.to('.article .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bArticle.text(function () {
                    return '// article: ' + that.articleItem.title;
                }).start().reveal(750, 750);

                $('.article h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.article h1 .text').removeClass('glitch');
                // }, 5000);
                that.articleWatcher.recalculateLocation();
            }
        });

        TweenMax.to('.article h1 .icon', 0.5, {
            opacity: 1,
            ease: Expo.easeOut
        });
    }

    enterContact() {
        const that = this;

        TweenMax.to('.contact .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bContact.start().reveal(750, 750);
                $('.contact h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.contact h1 .text').removeClass('glitch');
                // }, 5000);
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
    }

    enterError() {
        const that = this;

        TweenMax.to('.error .bar', 0.5, {
            width: '100%',
            ease: Expo.easeOut,
            onComplete: function () {
                that.bError.start().reveal(750, 750);
                $('.error h1 .text').addClass('glitch');

                // setTimeout(function () {
                //     $('.error h1 .text').removeClass('glitch');
                // }, 5000);
            }
        });

        TweenMax.to('.error h1', 1.5, {
            'borderLeft': '15px solid #383838',
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
    }

    exitCurrentSlide($url) {
        const that = this;

        if (that.currentPage != 'case-study' || that.currentPage != 'article') {
            TweenMax.to('.' + that.currentPage + ' h1', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut
            });

            TweenMax.to('.' + that.currentPage + ' p', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.1
            });

            TweenMax.to('.' + that.currentPage + ' h2', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.1
            });

            TweenMax.to('.' + that.currentPage + ' hr', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2
            });
        }

        if (that.currentPage == 'hello') {
            TweenMax.staggerTo('.hello li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'about') {
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
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'achievements') {
            TweenMax.staggerTo('.nominations li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2
            }, 0.1, function () {
                $('.nominations li').attr('style', '');
            });

            TweenMax.to('.achievements .link', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            });

            TweenMax.staggerTo('.ribbons li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1);

            TweenMax.staggerTo('.listing li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'coding') {
            TweenMax.staggerTo('.coding .card', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'design') {
            TweenMax.staggerTo('.design .card', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                clearProps: 'all'
            }, 0.1, function () {
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'case-study') {
            that.destroyCaseStudyScrollMonitor();

            TweenMax.to('.case-study', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                onComplete: function () {
                    that.switchSlide($url);
                }
            });
        } else if (that.currentPage == 'article') {
            that.destroyArticleScrollMonitor();

            $('title').text('UX Developer | infinite imaginations');
            $('meta[property="og:title"]').attr('content', 'Senior UX Developer | infinite imaginations');
            $('meta[property="og:type"]').attr('content', 'website');
            $('meta[property="og:url"]').attr('content', window.location.href);
            $('meta[property="og:description"]').attr('content', 'I\'m Niño Ross Rodriguez, a Senior UX developer based in Canberra, Australia. I specialise in developing pixel perfect websites quickly without sacrificing code quality.');

            $('meta[property="twitter:title"]').attr('content', 'Senior UX Developer | infinite imaginations');
            $('meta[property="twitter:url"]').attr('content', window.location.href);
            $('meta[property="twitter:description"]').attr('content', 'I\'m Niño Ross Rodriguez, a Senior UX developer based in Canberra, Australia. I specialise in developing pixel perfect websites quickly without sacrificing code quality.');

            TweenMax.to('.article', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.2,
                onComplete: function () {
                    that.switchSlide($url);
                }
            });
        } else if (that.currentPage == 'contact') {
            TweenMax.staggerTo('.contact-icons li', 0.5, {
                opacity: 0,
                y: -50,
                ease: Expo.easeInOut,
                delay: 0.3,
                clearProps: 'all'
            }, 0.1, function () {
                that.switchSlide($url);
            });
        } else if (that.currentPage == 'error') {
            TweenMax.to('element', 0.5, {
                delay: 0.2,
                onComplete: function () {
                    that.switchSlide($url);
                }
            });
        }
    }

    setActiveNav(navEl) {
        $('.primary-nav')
            .find('.active').removeClass('active').end()
            .find('.element-box[data-name=' + navEl + ']').addClass('active');
    }
}

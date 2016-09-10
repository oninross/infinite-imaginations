/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';
    var $document = $(document),
        $window = $(window),
        $primaryNav = $('.primary-nav'),
        $menu = $('.header .menu'),
        $headerWrap = $('.header-wrap'),
        vh, vw;

    var setup = function () {
        var tlClick = new TimelineMax(),
            tlHover = new TimelineMax(),
            tl = '.box.tl',
            tr = '.box.tr',
            bl = '.box.bl',
            br = '.box.br';

        tlClick.to(tl, 0.25, { backgroundColor: '#fff',left: 0, top: 0, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { backgroundColor: '#fff',right: 0, top: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { backgroundColor: '#fff',left: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { backgroundColor: '#fff',right: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');


        tlClick.to(tl, 0.25, { height: 30, rotation: 45, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { height: 30, rotation: -45, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.pause();

        tlHover.to(tl, 0.25, { left: -16, top: -16, ease: Expo.easeOut });
        tlHover.to(tr, 0.25, { right: -16, top: -16, ease: Expo.easeOut }, '-=0.25');

        tlHover.to(bl, 0.25, { left: -16, bottom: -16, ease: Expo.easeOut }, '-=0.25');
        tlHover.to(br, 0.25, { right: -16, bottom: -16, ease: Expo.easeOut }, '-=0.25');

        tlHover.pause();

        $menu.on('click', function (e) {
            e.preventDefault();

            var $this = $(this);

            $this.toggleClass('active');
            $primaryNav.toggleClass('active');

            if ($this.hasClass('active')) {
                tlClick.play();

                TweenMax.staggerTo($primaryNav.find('li'), 0.75, {
                    autoAlpha: 1,
                    scale: 1,
                    ease: Expo.easeOut,
                    delay: 0.2
                }, 0.1);
            } else {
                tlClick.reverse();

                TweenMax.staggerTo($primaryNav.find('li'), 0.5, {
                    autoAlpha: 0,
                    scale: 1.25,
                    ease: Expo.easeOut,
                    delay: 0.2
                }, 0.1);
            }
        }).on('mouseover', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.play();
            }
        }).on('mouseout', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.reverse();
            }
        });

        $primaryNav
            .append('<i class="overlay"></i>')
            .on('click', '.overlay', function (e) {
                e.preventDefault();

                $menu.trigger('click');
            });

        vw = $document.outerWidth();
        vh = $document.outerHeight();

        backgroundResize();

        $window.on('resize scroll', debounce(function () {
            vw = $document.outerWidth();
            vh = $document.outerHeight();

            backgroundResize();
        }, 250));
    };

    function backgroundResize() {
        $headerWrap.css({
            width: vw + 'px',
            height: vh + 'px'
        });
    };

    // Export module method
    parent.menu = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.menu.setup();
});

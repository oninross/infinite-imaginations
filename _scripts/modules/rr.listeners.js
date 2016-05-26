/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        var $window = $(window),
            isMobileDevice = $window.width() < 768 ? true : false,
            tlClick = new TimelineMax(),
            tlHover = new TimelineMax(),
            tl = '.box.tl',
            tm = '.box.tm',
            tr = '.box.tr',
            ml = '.box.ml',
            mm = '.box.mm',
            mr = '.box.mr',
            bl = '.box.bl',
            bm = '.box.bm',
            br = '.box.br';

        tlClick.to(tl, 0.25, { left: 0, top: 0, ease: Expo.easeOut });
        tlClick.to(tm, 0.25, { top: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(tr, 0.25, { right: 0, top: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(ml, 0.25, { left: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(mr, 0.25, { right: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { left: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(bm, 0.25, { bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { right: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');


        tlClick.to(tl, 0.25, { autoAlpha: 0, ease: Expo.easeOut });
        tlClick.to(tm, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(tr, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(ml, 0.25, { height: 45, rotation: 45, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(mm, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(mr, 0.25, { height: 45, rotation: -45, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(bm, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.pause();


        tlHover.to(tl, 0.25, { left: -32, top: -32, ease: Expo.easeOut });
        tlHover.to(tm, 0.25, { top: -32, ease: Expo.easeOut }, '-=0.25');
        tlHover.to(tr, 0.25, { right: -32, top: -32, ease: Expo.easeOut }, '-=0.25');

        tlHover.to(ml, 0.25, { left: -32, ease: Expo.easeOut }, '-=0.25');
        tlHover.to(mr, 0.25, { right: -32, ease: Expo.easeOut }, '-=0.25');

        tlHover.to(bl, 0.25, { left: -32, bottom: -32, ease: Expo.easeOut }, '-=0.25');
        tlHover.to(bm, 0.25, { bottom: -32, ease: Expo.easeOut }, '-=0.25');
        tlHover.to(br, 0.25, { right: -32, bottom: -32, ease: Expo.easeOut }, '-=0.25');

        tlHover.pause();


        $('.menu').on('click', function (e) {
            e.preventDefault();

            var $this = $(this);

            $this.toggleClass('active');

            if ($this.hasClass('active')) {
                tlClick.play();
            } else {
                tlClick.reverse();
            }
        }).on('mouseover', function () {
            if (!$(this).hasClass('active')) {
                tlHover.play();
            }
        }).on('mouseout', function () {
            if (!$(this).hasClass('active')) {
                tlHover.reverse();
            }
        });
    };

    // Export module method
    parent.listeners = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.listeners.setup();
});

/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';
    var $window = $(window);

    var setup = function () {
        var tlClick = new TimelineMax(),
            tlHover = new TimelineMax(),
            tl = '.box.tl',
            tr = '.box.tr',
            bl = '.box.bl',
            br = '.box.br';

        tlClick.to(tl, 0.25, { left: 0, top: 0, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { right: 0, top: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { left: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { right: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');


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
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.play();
            }
        }).on('mouseout', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.reverse();
            }
        });
    };

    var check = function () {
        return $window.width() < 1024 ? true : false;
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

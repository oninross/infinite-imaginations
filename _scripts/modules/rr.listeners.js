/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - Listeners
 */
var RR = (function (parent, $) {
    'use strict';

    var $document = $(document),
        $window = $(window),
        vh, vw;

    var setup = function () {
        // Background Pattern
        vw = $document.width();
        vh = $document.height();

        backgroundResize();

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

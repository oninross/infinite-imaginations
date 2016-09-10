/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        var $url = window.location.href;

        $url = window.location.hash;
        $url = $url.replace('#/', '');
        $url = $url.replace('/', '');

        RR.listeners.exitCurrentSlide($url);

        $(window).on('hashchange', function (e) {
            $url = window.location.hash;
            $url = $url.replace('#/', '');
            $url = $url.replace('/', '');

            RR.listeners.exitCurrentSlide($url);
        });
    };

    var pushState = function ($data) {
        window.history.pushState({}, $data, '/#/' + $data + '/');
    };

    // Export module method
    parent.history = {
        setup: setup,
        pushState: pushState
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.history.setup();
});

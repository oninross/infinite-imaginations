/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        var $url = window.location.href;

        if ($url.indexOf('/#/') < 0) {
            // console.log('no hash');
            window.history.pushState({}, 'hello', '/#/hello/');
        }
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

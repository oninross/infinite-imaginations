/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        Path.root("#/hello/");

        Path.map('#/hello/').to(function() {
            RR.listeners.exitCurrentSlide('hello');
            RR.listeners.setActiveNav('hello');
        });

        Path.map('#/about/').to(function() {
            RR.listeners.exitCurrentSlide('about');
            RR.listeners.setActiveNav('about');
        });

        Path.map('#/achievements/').to(function() {
            RR.listeners.exitCurrentSlide('achievements');
            RR.listeners.setActiveNav('achievements');
        });

        Path.map('#/coding/').to(function() {
            RR.listeners.exitCurrentSlide('coding');
            RR.listeners.setActiveNav('coding');
        });

        Path.map('#/design/').to(function() {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
        });

        Path.map('#/contact/').to(function() {
            RR.listeners.exitCurrentSlide('contact');
            RR.listeners.setActiveNav('contact');
        });

        Path.listen();
    };

    // Export module method
    parent.history = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.history.setup();
});

/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        Path.root("#/hello/");

        Path.map('#/hello/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('hello');
            RR.listeners.setActiveNav('hello');
        });

        Path.map('#/about/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('about');
            RR.listeners.setActiveNav('about');
        });

        Path.map('#/achievements/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('achievements');
            RR.listeners.setActiveNav('achievements');
        });

        Path.map('#/coding/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('coding');
            RR.listeners.setActiveNav('coding');
        });

        Path.map('#/design/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
        });

        Path.map('#/design/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
        });

        Path.map('#/case-study/:param').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('case-study');

            var param = this.params['param'];

            setTimeout(function () {
                RR.listeners.getData(param);
            }, 500);
        });

        Path.map('#/contact/').enter(updateAnalytics).to(function () {
            RR.listeners.exitCurrentSlide('contact');
            RR.listeners.setActiveNav('contact');
        });

        Path.rescue(function () {
            RR.listeners.exitCurrentSlide('error');
        });

        Path.listen();
    };

    // Define our update method.
    function updateAnalytics() {
        RR.gaListeners.gaPageView();
    }

    // Export module method
    parent.history = {
        setup: setup
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.history.setup ();
});

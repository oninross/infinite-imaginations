/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        Path.root("#/hello/");

        Path.map('#/hello/').to(function () {
            RR.listeners.exitCurrentSlide('hello');
            RR.listeners.setActiveNav('hello');
            RR.gaListeners.gaPageView('hello');
        });

        Path.map('#/about/').to(function () {
            RR.listeners.exitCurrentSlide('about');
            RR.listeners.setActiveNav('about');
            RR.gaListeners.gaPageView('about');
        });

        Path.map('#/achievements/').to(function () {
            RR.listeners.exitCurrentSlide('achievements');
            RR.listeners.setActiveNav('achievements');
            RR.gaListeners.gaPageView('achievements');
        });

        Path.map('#/coding/').to(function () {
            RR.listeners.exitCurrentSlide('coding');
            RR.listeners.setActiveNav('coding');
            RR.gaListeners.gaPageView('coding');
        });

        Path.map('#/design/').to(function () {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
            RR.gaListeners.gaPageView('design');
        });

        Path.map('#/design/').to(function () {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
            RR.gaListeners.gaPageView('design');
        });

        Path.map('#/case-study/:param').to(function () {
            RR.listeners.exitCurrentSlide('case-study');
            RR.gaListeners.gaPageView('case-study');

            var param = this.params['param'];

            setTimeout(function () {
                RR.listeners.getData(param);
            }, 500);
        });

        Path.map('#/contact/').to(function () {
            RR.listeners.exitCurrentSlide('contact');
            RR.listeners.setActiveNav('contact');
            RR.gaListeners.gaPageView('contact');
        });

        Path.rescue(function () {
            RR.listeners.exitCurrentSlide('error');
            RR.gaListeners.gaPageView('contact');
        });

        Path.listen();
    };

    // Define our update method.
    function updateAnalytics() {
        // ga('send', 'pageview', document.location.href);
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

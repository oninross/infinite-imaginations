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

        Path.map('#/design/').to(function() {
            RR.listeners.exitCurrentSlide('design');
            RR.listeners.setActiveNav('design');
        });

        Path.map('#/case-study/:param').to(function() {
            RR.listeners.exitCurrentSlide('case-study');
            RR.listeners.getData(this.params['param']);
            // RR.listeners.setActiveNav('contact');
        });

        Path.map('#/contact/').to(function() {
            RR.listeners.exitCurrentSlide('contact');
            RR.listeners.setActiveNav('contact');
        });

        Path.rescue(function() {
            RR.listeners.exitCurrentSlide('error');
        });

        // Path.map("#/users/:id").enter(updateAnalytics).to(function(){
            // Code here
        // });

        Path.listen();
    };

    // Define our update method.
    function updateAnalytics(){
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
    RR.history.setup();
});

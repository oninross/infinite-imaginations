/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true */
/* jshint unused: false */

/**
 * RR - menu
 */
var RR = (function (parent, $) {
    'use strict';

    var setup = function () {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-63786641-1', 'auto');      // DEVELOPMENT
        // ga('create', 'UA-77788698-2', 'auto');   // PRODUCTION
        // ga('send', 'pageview');
    };

    var gaPageView = function () {
        // ga('set', {
        //     page: 'page',
        //     title: '/' + title
        // });
        // ga('send', 'pageview');

        ga('send', 'pageview', document.location.hash);
    };

    var cat = null,
        lab = null;

    var gaClickEvent = function (c, l) {
        // ga('send', 'event', 'category', 'action', 'label', 'value');
        // ex: ga('send', 'event', 'image', 'click', 'image click', 'filename.jpg');
        ga('send', 'event', c, 'click', l);
    };

    // Export module method
    parent.gaListeners = {
        setup: setup,
        gaPageView: gaPageView,
        gaClickEvent: gaClickEvent
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    // Self-init Call
    RR.gaListeners.setup ();
});

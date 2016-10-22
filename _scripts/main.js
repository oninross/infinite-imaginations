/* global RR: true, TweenMax: true, jQuery: true, Modernizr: true, jRespond: true, Expo: true */
/* jshint unused: false */

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
};

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
*/

(function ($, undefined) {
    'use strict';

    // document ready begin
    // Using the shorthand method to save characters
    $(function () {

        // Set framerate to 60fps
        TweenMax.ticker.fps(60);

        /* Background-size: cover Fallback */
        (function () {
            if ($('.no-bgsizecover').length) {
                $('.backstretch').each(function () {
                    var $this = $(this),
                        $dataOriginal = $this.data('original');

                    $this.backstretch($dataOriginal);
                });
            }
        })();


        /* JRespond Breakpoints */
        var jRes = jRespond([
            {
                label: 'mobile',
                enter: 0,
                exit: 767
            },{
                label: 'tablet',
                enter: 768,
                exit: 1023
            },{
                label: 'desktop',
                enter: 1024,
                exit: 10000
            }
        ]);

        /* JRespond Functions(Desktop) */
        jRes.addFunc({
            breakpoint: ['desktop'],
            enter: function () {
            },
            exit: function () {
            }
        });

        /* JRespond Functions(Tablet) */
        jRes.addFunc({
            breakpoint: ['tablet'],
            enter: function () {
            },
            exit: function () {
            }
        });

        /* JRespond Functions(Mobile) */
        jRes.addFunc({
            breakpoint: ['mobile'],
            enter: function () {
            },
            exit: function () {
            }
        });
    });
}(jQuery));

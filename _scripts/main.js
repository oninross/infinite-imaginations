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
            if (!Modernizr.backgroundsize) {
                $('.backstretch').each(function () {
                    var $this = $(this),
                        $dataOriginal = $this.data('original');

                    $this.backstretch($dataOriginal);
                });
            }
        })();

        /* object-fit: cover fallback */
        (function () {
            if (!Modernizr.objectfit) {
                setTimeout(function() {
                    $('.card-wrap').each(function () {
                        var $this = $(this),
                            $parent = $this.parent(),
                            $img = $this.find('img');

                        $this.css({
                            'background-image' :'url(' + $img.attr('src') + ')'
                        });
                    });
                }, 700);
            }
        })();
    });
}(jQuery));

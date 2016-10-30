/* global RR: true, TweenMax: true, TimelineMax: true, jQuery: true, ripple: true, Ease: true, Expo: true, scrollMonitor: true */
/* jshint unused: false, strict: false */

/**
 * RR - Material Design Components
 */
var RR = (function (parent, $) {
    'use strict';

    var $body = $('body'),
        $window = $(window);

    var setup = function () {

        // Ripple Effect
        var $rippleEffect = $('button, .cta');

        $rippleEffect.on('click', function (e) {
            var $this = $(this);

            if (!$this.hasClass('disabled')) {
                ripple(e, $this);
            }
        });


        // Hamburger Menu
        var $materialMenu = $('.material-menu');

        // TimelineMax the menu-icon animation for easier control on Touch/Mouse Events
        var tl = new TimelineMax();

        tl.to('.material-menu .top', 0.2, { top: 4, ease: Expo.easeInOut });
        tl.to('.material-menu .bot', 0.2, { top: -4, ease: Expo.easeInOut }, '-=0.2');

        tl.to('.material-menu .mid', 0.2, { opacity: 0, ease: Expo.easeInOut });
        tl.to('.material-menu .top', 0.2, { rotation: 45, ease: Expo.easeInOut }, '-=0.2');
        tl.to('.material-menu .bot', 0.2, { rotation: -45, ease: Expo.easeInOut }, '-=0.2');


        // Stop the Timeline at 0 else the animation will play after initiation
        tl.pause();

        $materialMenu.on('click', function () {
            var $this = $(this);

            $this.toggleClass('active');

            if ($this.hasClass('active')) {
                tl.reverse();
            } else {
                tl.play();
            }
        });


        // Floating Label Input Box
        $('.floating-input').each(function () {
            var $this = $(this);

            $this
                .wrap('<div class="floating"></div>')
                .before('<span class="placeholder">' + $this.attr('placeholder') + '</span>')
                .attr('placeholder', '')
                .on('focus', function () {
                    var $this = $(this);

                    $this.parent().addClass('focus');
                }).on('blur', function () {
                    var $this = $(this);

                    if ($this.val() === '') {
                        $this.parent().removeClass('focus');
                    }
                });

            if ($this.data('hint') !== undefined && $this.data('hint') !== '') {
                $this.after('<span class="hint"><strong>*Hint: </strong>' + $this.data('hint') + '</span>');
            }

            $('.placeholder').on('click', function () {
                $(this).next().focus();
            });
        });
    };

    /* Toaster */
    var toasterInd = 0;
    var toaster = function (msg) {
        // Alert Toaster
        var popupAlert = doT.template($('#toaster-template').html()),
            obj = {
                ind: toasterInd,
                message: msg
            };

        if (!$('.toaster-wrap').length) {
            $('#main').after('<div class="toaster-wrap" />');
        }

        $('.toaster-wrap').append(popupAlert(obj));

        var toaster = '.toaster' + toasterInd;

        TweenMax.to(toaster, 0.75, {
            scale: 1,
            ease: Expo.easeOut
        });

        TweenMax.to(toaster, 0.75, {
            scale: 0.75,
            opacity: 0,
            ease: Expo.easeOut,
            delay: 5,
            onComplete: function () {
                $(toaster).remove();
            }
        });

        $(toaster).on('click', function (e) {
            e.preventDefault();

            TweenMax.to($(this), 0.75, {
                scale: 0,
                ease: Expo.easeOut,
                onComplete: function () {
                    $(toaster).remove();
                }
            });
        });

        toasterInd++;
    };

    /* Ripple Effect */
    var inc = 0;
    var ripple = function (e, el) {
        if ($('.no-svg').length) {
            return false;
        }

        // create SVG element
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            g = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
            circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
            x = e.offsetX,
            y = e.offsetY;

        if (x == undefined || y == undefined) {
            return false;
        }

        svg.setAttributeNS(null, 'class', 'ripple ripple' + inc);
        g.setAttributeNS(null, 'transform', 'translate(' + x + ', ' + y + ')');
        circle.setAttributeNS(null, 'r', (parseInt(el.outerWidth()) + x));

        svg.appendChild(g);
        g.appendChild(circle);
        el.append(svg);

        var $ripple = el.find('.ripple' + inc);
        TweenMax.from($ripple.find('circle'), 1.5, {
            attr: { r: 0 },
            opacity: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
                $ripple.remove();
            }
        });

        inc++;
    };


    // Export module method
    parent.materialDesign = {
        setup: setup,
        ripple: ripple,
        toaster: toaster
    };

    return parent;

}(RR || {}, jQuery));

jQuery(function ($) {
    'use strict';
    // Self-init Call
    RR.materialDesign.setup();
});

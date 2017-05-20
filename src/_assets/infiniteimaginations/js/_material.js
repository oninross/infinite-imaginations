'use strict';

import scrollMonitor from 'scrollMonitor';
import mCustomScrollbar from 'mCustomScrollbar';

import { debounce, isMobile } from './_helper';

let $body = $('body'),
    $window = $(window),
    isMobileDevice = isMobile();

$(() => {
    // Ripple Effect
    let $rippleEffect = $('button, .cta');

    $rippleEffect.on('click', function (e) {
        let $this = $(this);

        if (!$this.hasClass('disabled')) {
            ripple(e, $this);
        }
    });

    $window.on('resize', debounce(function () {
        isMobileDevice = isMobile();
    }, 250));
});



//////////////
// Toaster  //
//////////////
let toasterInd = 0;
let toaster = function (msg) {
    // Alert Toaster
    let popupAlert = doT.template($('#toaster-template').html()),
        obj = {
            ind: toasterInd,
            message: msg
        };

    if (!$('.toaster-wrap').length) {
        $('#main').after('<div class="toaster-wrap" />');
    }

    $('.toaster-wrap').append(popupAlert(obj));

    let toaster = '.toaster' + toasterInd;

    TweenMax.to(toaster, 0.75, {
        opacity: 1,
        scale: 1,
        ease: Expo.easeOut
    });

    TweenMax.to(toaster, 0.75, {
        opacity: 0,
        scale: 0.75,
        ease: Expo.easeOut,
        delay: 5,
        onComplete: function () {
            $(toaster).remove();
        }
    });

    $(toaster).on('click', function (e) {
        e.preventDefault();

        TweenMax.to($(this), 0.75, {
            opacity: 0,
            scale: 0.75,
            ease: Expo.easeOut,
            onComplete: function () {
                $(toaster).remove();
            }
        });
    });

    toasterInd++;
};



///////////////////
// Ripple Effect //
///////////////////
let inc = 0;
let ripple = function (e, el) {
    if ($('.no-svg').length || el.find('svg').length) {
        return false;
    }

    // create SVG element
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
        g = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
        circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
        x = e.offsetX,
        y = e.offsetY;

    if (x == undefined) {
        return false;
    }

    svg.setAttributeNS(null, 'class', 'ripple ripple' + inc);
    g.setAttributeNS(null, 'transform', 'translate(' + x + ', ' + y + ')');
    circle.setAttributeNS(null, 'r', (parseInt(el.outerWidth()) + x));

    svg.appendChild(g);
    g.appendChild(circle);
    el.append(svg);

    let $ripple = el.find('.ripple' + inc);
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

export { toaster, ripple };

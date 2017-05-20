'use strict';

import { ripple } from '../../../_assets/infiniteimaginations/js/_material';
import { debounce, isMobile, easeOutExpo } from '../../../_assets/infiniteimaginations/js/_helper';

var $document = $(document),
    $window = $(window),
    $primaryNav = $('.primary-nav'),
    $menu = $('.header .menu'),
    $headerWrap = $('.header-wrap'),
    vh, vw, tlHover;

export default class Navigation {
    constructor() {
        var that = this;
    }

    init() {
        var that = this,
            tlClick = new TimelineMax(),
            tl = '.box.tl',
            tr = '.box.tr',
            bl = '.box.bl',
            br = '.box.br';

        tlHover = new TimelineMax();

        tlClick.to(tl, 0.25, { backgroundColor: '#fff',left: 0, top: 0, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { backgroundColor: '#fff',right: 0, top: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { backgroundColor: '#fff',left: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { backgroundColor: '#fff',right: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');


        tlClick.to(tl, 0.25, { height: 30, rotation: 45, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { height: 30, rotation: -45, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.pause();
        tlClick.eventCallback('onReverseComplete', function () {
            setTimeout(function () {
                $('.menu .box').attr('style', '');
            }, 200);
        });

        tlHover.to(tl, 0.2, { left: -20, top: -20, ease: Expo.easeOut });
        tlHover.to(tr, 0.2, { right: -20, top: -20, ease: Expo.easeOut }, '-=0.2');

        tlHover.to(bl, 0.2, { left: -20, bottom: -20, ease: Expo.easeOut }, '-=0.2');
        tlHover.to(br, 0.2, { right: -20, bottom: -20, ease: Expo.easeOut }, '-=0.2');

        tlHover.pause();

        $menu.on('click', function (e) {
            e.preventDefault();

            var $this = $(this);

            $this.toggleClass('active');
            $primaryNav.toggleClass('active');
            $headerWrap.toggleClass('active');

            if ($this.hasClass('active')) {
                tlClick.play();

                $primaryNav.find('ul').css({
                    height: $window.height() - parseInt($primaryNav.find('ul').css('margin-top'))
                });
            } else {
                $primaryNav.find('ul').css({
                    height: 'auto'
                });
                tlClick.reverse();
            }
        }).on('mouseover', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.play();
            }
        }).on('mouseout', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                tlHover.reverse();
            }
        });

        $primaryNav
            .append('<i class="overlay"></i>')
            .on('click', '.overlay', function (e) {
                e.preventDefault();

                $menu.trigger('click');
            });

        vw = $document.outerWidth();
        vh = $document.outerHeight();

        that.backgroundResize();

        $window.on('resize scroll', debounce(function () {
            that.backgroundResize();
        }, 250));
    }

    tlHoverReverse() {
        tlHover.reverse();
    }

    backgroundResize() {
        vw = $window.outerWidth();
        vh = $window.outerHeight();

        $headerWrap.css({
            width: vw + 'px',
            height: vh + 'px'
        });
    }
}

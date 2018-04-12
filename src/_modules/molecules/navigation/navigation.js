'use strict';

import { ripple } from '../../../_assets/infiniteimaginations/js/_material';
import { debounce, isMobile, easeOutExpo } from '../../../_assets/infiniteimaginations/js/_helper';
import { TimelineLite } from 'gsap';

export default class Navigation {
    constructor() { }

    init() {
        const that = this,
            $document = $(document),
            $primaryNav = $('.primary-nav'),
            $menu = $('.header .menu'),
            tlClick = new TimelineLite(),
            tl = '.box.tl',
            tr = '.box.tr',
            bl = '.box.bl',
            br = '.box.br';

        that.tlHover = new TimelineLite();
        that.$window = $(window);
        that.$headerWrap = $('.header-wrap');
        that.vh;
        that.vw;


        tlClick.to(tl, 0.25, { backgroundColor: '#fff', left: 0, top: 0, ease: Expo.easeOut });
        tlClick.to(tr, 0.25, { backgroundColor: '#fff', right: 0, top: 0, ease: Expo.easeOut }, '-=0.25');

        tlClick.to(bl, 0.25, { backgroundColor: '#fff', left: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');
        tlClick.to(br, 0.25, { backgroundColor: '#fff', right: 0, bottom: 0, ease: Expo.easeOut }, '-=0.25');


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

        that.tlHover.to(tl, 0.2, { left: -20, top: -20, ease: Expo.easeOut });
        that.tlHover.to(tr, 0.2, { right: -20, top: -20, ease: Expo.easeOut }, '-=0.2');

        that.tlHover.to(bl, 0.2, { left: -20, bottom: -20, ease: Expo.easeOut }, '-=0.2');
        that.tlHover.to(br, 0.2, { right: -20, bottom: -20, ease: Expo.easeOut }, '-=0.2');

        that.tlHover.pause();

        $menu.on('click', function (e) {
            e.preventDefault();

            const $this = $(this);

            $this.toggleClass('active');
            $primaryNav.toggleClass('active');
            that.$headerWrap.toggleClass('active');

            if ($this.hasClass('active')) {
                tlClick.play();

                $primaryNav.find('ul').css({
                    height: that.$window.height() - parseInt($primaryNav.find('ul').css('margin-top'))
                });
            } else {
                $primaryNav.find('ul').css({
                    height: 'auto'
                });
                tlClick.reverse();
            }
        }).on('mouseover', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                that.tlHover.play();
            }
        }).on('mouseout', function () {
            if (!$(this).hasClass('active') && $('.no-touchevents').length) {
                that.tlHover.reverse();
            }
        });

        $primaryNav
            .append('<i class="overlay"></i>')
            .on('click', '.overlay', function (e) {
                e.preventDefault();

                $menu.trigger('click');
            });

        that.vw = $document.outerWidth();
        that.vh = $document.outerHeight();

        that.backgroundResize();

        that.$window.on('resize scroll', debounce(function () {
            that.backgroundResize();
        }, 250));
    }

    tlHoverReverse() {
        const that = this;

        that.tlHover.reverse();
    }

    backgroundResize() {
        const that = this;

        that.vw = that.$window.outerWidth();
        that.vh = that.$window.outerHeight();

        that.$headerWrap.css({
            width: that.vw + 'px',
            height: that.vh + 'px'
        });
    }
}

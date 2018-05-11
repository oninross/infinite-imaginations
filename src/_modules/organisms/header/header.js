'use strict';

import { debounce, isMobile } from '../../../_assets/infiniteimaginations/js/_helper';

export default class Header {
    constructor() {
        const that = this;

        $(window).on('resize scroll', debounce(that.toggleHeader, 250));
    }

    toggleHeader() {
        const $header = $('header');

        let isMobileDevice = false,
            lastScrollTop = 0,
            st = $(this).scrollTop(),
            $headerHeight = $header.height();

        isMobileDevice = isMobile();

        if (!isMobileDevice) {
            if (st > lastScrollTop) {
                // scroll down
                if (st > $headerHeight) {
                    $header.addClass('hide').removeClass('compact');
                }
            } else {
                // scroll up
                if (st <= $headerHeight) {
                    $header.removeClass('compact hide');
                } else {
                    $header.addClass('compact');
                }
            }
        }

        lastScrollTop = st;
    };
}

// Main javascript entry point
'use strict';

import $ from 'jquery';
import 'lazyload';
import 'doT';
import './_modernizr';

import Header from '../../../_modules/organisms/header/header';

import Navigation from '../../../_modules/molecules/navigation/navigation';

import ServiceWorkers from '../../../_modules/atoms/serviceworkers/serviceworkers';
import History from '../../../_modules/atoms/history/history';
import GaListeners from '../../../_modules/atoms/gaListeners/gaListeners';

import { debounce, isMobile } from './_helper';
import { toaster } from './_material';
import { TweenMax } from 'gsap';

// Variable declaration
let gaListeners = new GaListeners(),
    navigation = new Navigation();

$(() => {
    gaListeners.init();
    new Header();
    new History();
    navigation.init();

    /*
     * Set framerate to 60fps
     */
    TweenMax.ticker.fps(60);



    /*
     * Init Lazy Loading
     */
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });




    console.log("i am infinite imaginations!");
});


/*
 * Simple Service Worker to make App Install work (OPTIONAL)
 */
// new ServiceWorkers();
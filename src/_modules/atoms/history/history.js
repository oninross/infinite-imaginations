'use strict';

import Path from 'pathjs';
import GaListeners from '../gaListeners/gaListeners';
import Listeners from '../listeners/listeners';

export default class History {
    constructor() {
        let that = this,
            listeners = new Listeners();

        that.gaListeners = new GaListeners();

        Path.root("#/hello/");

        Path.map('#/hello/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('hello');
            listeners.setActiveNav('hello');
        });

        Path.map('#/about/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('about');
            listeners.setActiveNav('about');
        });

        Path.map('#/achievements/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('achievements');
            listeners.setActiveNav('achievements');
        });

        Path.map('#/coding/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('coding');
            listeners.setActiveNav('coding');
        });

        Path.map('#/design/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/design/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/case-study/:param').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('case-study');

            const param = this.params.param;

            setTimeout(() => {
                listeners.getData(param);
            }, 500);
        });

        Path.map('#/contact/').enter(() => {
            that.updateAnalytics();
        }).to(() => {
            listeners.exitCurrentSlide('contact');
            listeners.setActiveNav('contact');
        });

        Path.rescue(() => {
            listeners.exitCurrentSlide('error');
        });

        Path.listen();
    }

    updateAnalytics() {
        this.gaListeners.gaPageView();
    }
}

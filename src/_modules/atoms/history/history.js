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

        Path.map('#/hello/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('hello');
            listeners.setActiveNav('hello');
        });

        Path.map('#/about/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('about');
            listeners.setActiveNav('about');
        });

        Path.map('#/achievements/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('achievements');
            listeners.setActiveNav('achievements');
        });

        Path.map('#/coding/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('coding');
            listeners.setActiveNav('coding');
        });

        Path.map('#/design/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/design/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/case-study/:param').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('case-study');

            const param = this.params.param;

            setTimeout(() => {
                listeners.getCaseStudy(param);
            }, 500);
        });

        Path.map('#/article/:param').enter(function () {
            that.updateAnalytics();
        }).to(function () {
            listeners.exitCurrentSlide('article');

            const param = this.params.param;

            setTimeout(() => {
                listeners.getArticle(param);
            }, 500);
        });

        Path.map('#/contact/').enter(function () {
            that.updateAnalytics();
        }).to(function () {
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

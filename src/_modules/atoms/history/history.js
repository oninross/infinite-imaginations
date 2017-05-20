'use strict';

import Path from 'pathjs';
import GaListeners from '../galisteners/galisteners';
import Listeners from '../listeners/listeners';

var gaListeners = new GaListeners();
var listeners = new Listeners();

export default class History {
    constructor() {
        var that = this;

        Path.root("#/hello/");

        Path.map('#/hello/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('hello');
            listeners.setActiveNav('hello');
        });

        Path.map('#/about/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('about');
            listeners.setActiveNav('about');
        });

        Path.map('#/achievements/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('achievements');
            listeners.setActiveNav('achievements');
        });

        Path.map('#/coding/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('coding');
            listeners.setActiveNav('coding');
        });

        Path.map('#/design/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/design/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('design');
            listeners.setActiveNav('design');
        });

        Path.map('#/case-study/:param').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('case-study');

            var param = this.params.param;

            setTimeout(function () {
                listeners.getData(param);
            }, 500);
        });

        Path.map('#/contact/').enter(that.updateAnalytics).to(function () {
            listeners.exitCurrentSlide('contact');
            listeners.setActiveNav('contact');
        });

        Path.rescue(function () {
            listeners.exitCurrentSlide('error');
        });

        Path.listen();
    }

    updateAnalytics() {
        gaListeners.gaPageView();
    }
}

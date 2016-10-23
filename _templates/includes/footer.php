        <script id="toaster-template" type="text/template">
            <div class="toaster toaster{{= it.ind }}">
                <div class="container">
                    <p>{{! it.message }}</p>

                    <button class="js-dismiss">
                        <span class="vh">Close</span>
                        <i class="icon icon-cross"></i>
                    </button>
                </div>
            </div>
        </script>

        <script id="case-study-template" type="text/template">
            <div class="case-study__section tldr">
                <div class="wrap">
                    <div class="col col-12">
                        <h2>TLDR;</h2>

                        <hr />

                        <i class="pattern"></i>

                        <p>{{! it.tldr }}</p>

                        {{? it.url.live }}
                        <a href="{{! it.url.live }}" class="cta" data-text="visit website">visit website</a>
                        {{? }}
                    </div>

                    <div class="tldr-sub col col-6">
                        <div class="case-study__section technology">
                            <h3>Technology Used</h3>

                            <hr />

                            <i class="pattern"></i>

                            <ul>
                                {{~it.technology :value:index }}
                                <li>{{=value}}</li>
                                {{~}}
                            </ul>
                        </div>
                    </div>

                    <div class="tldr-sub col col-6">
                        <div class="case-study__section role">
                            <h3>Role</h3>

                            <hr />

                            <i class="pattern"></i>

                            <p>{{! it.role }}</p>
                        </div>
                    </div>
                </div>
            </div>

            {{? it.challenges }}
            <div class="case-study__section challenges">
                <h2>Challenges</h2>

                <hr />

                <i class="pattern"></i>

                {{~it.challenges :value:index }}
                <p>{{=value}}</p>
                {{~}}
            </div>
            {{? }}

            {{? it.solutions }}
            <div class="case-study__section solutions">
                <h2>Solutions</h2>

                <hr />

                <i class="pattern"></i>

                {{~it.solutions :value:index }}
                <p>{{=value}}</p>
                {{~}}
            </div>
            {{? }}

            <div class="case-study__section navigation">
                <div class="wrap">
                    <div class="col col-12">
                        <a href="{{! it.nextItem.url}}">
                            <div class="navigation-label">next: <span>{{! it.nextItem.title }}</span></div>

                            <i class="line"></i>
                            <i class="navigation-shadow"></i>

                            <div class="navigation-icon">
                                <i class="icon icon-chevron-right"></i>
                                <i class="icon icon-chevron-right"></i>
                            </div>
                        </a>
                    </div>

                    <div class="col col-12">
                        <a href="/#/{{! it.category }}/">
                            <div class="navigation-label">back to listing</div>

                            <i class="line"></i>
                            <i class="navigation-shadow"></i>

                            <div class="navigation-icon">
                                <i class="icon icon-chevron-right"></i>
                                <i class="icon icon-chevron-right"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </script>

        <!-- build:js //ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js -->
        <script src="/assets/infiniteimaginations/js/vendor/jquery-1.11.3.min.js"></script>
        <!-- /build -->

        <!--[if lt IE 9]>
            <script src="//cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>
        <![endif]-->

        <!-- build:js /assets/infiniteimaginations/js/main.min.js -->
        <script src="/assets/infiniteimaginations/js/plugins.js"></script>
        <script src="/assets/infiniteimaginations/js/modules.js"></script>
        <script src="/assets/infiniteimaginations/js/main.js"></script>
        <!-- /build -->

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            // (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            // function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            // e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            // e.src='https://www.google-analytics.com/analytics.js';
            // r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            // ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>

    </body>
</html>
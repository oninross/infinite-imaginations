<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main">
    <section class="hello">
        <div class="container">
            <div class="wrap">
                <div class="col-10 col-offset-1">
                    <h1>
                        <span class="text" data-text="Hello World...">Hello World...</span>
                        <span class="bar"></span>
                    </h1>

                    <p>I'm <a href="/#/about/" data-text="Niño Ross Rodriguez,"><span>Niño Ross Rodriguez,</span></a> a Senior User Experience (UX) Developer with nine years of industry experience, specializing in developing pixel perfect websites quickly without sacrificing code quality and ensuring that users have the best UX they can get in a site. Get to know a bit more <a href="/#/about/" data-text="about my skills"><span>about my skills</span></a> or feel free to look around my <a href="/#/coding/" data-text="coding"><span>coding</span></a> and <a href="/#/design/" data-text="design"><span>design</span></a> works.</p>

                    <hr />

                    <nav>
                        <ul>
                            <li>
                                <a href="/#/about/" class="element-box" data-name="about">
                                    <span class="text">
                                        <span class="abbr" aria-hidden="true">Ab</span>
                                        <span class="full">about</span>
                                    </span>

                                    <span class="icon icon-about"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/achievements/" class="element-box" data-name="achievements">
                                    <span class="text">
                                        <span class="abbr" aria-hidden="true">Ac</span>
                                        <span class="full">achievements</span>
                                    </span>

                                    <span class="icon icon-achievements"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/coding/" class="element-box" data-name="coding">
                                    <span class="text">
                                        <span class="abbr" aria-hidden="true">Co</span>
                                        <span class="full">coding</span>
                                    </span>

                                    <span class="icon icon-coding"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/design/" class="element-box" data-name="design">
                                    <span class="text">
                                        <span class="abbr" aria-hidden="true">De</span>
                                        <span class="full">design</span>
                                    </span>

                                    <span class="icon icon-design"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/contact/" class="element-box" data-name="contact">
                                    <span class="text">
                                        <span class="abbr" aria-hidden="true">Ct</span>
                                        <span class="full">contact</span>
                                    </span>

                                    <span class="icon icon-contact"></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <section class="about">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// about">// about</span>

                        <span class="bar">
                            <i class="icon icon-about"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                        <div class="col-l col-6">
                            <p>As a <strong>Senior UX Developer</strong>, I love being challenged.  I like to <strong>create</strong> solutions to user experience problems, <strong>imagine</strong> fun interaction and animation, and <strong>develop</strong> the best web experience.</p>
                            <p>Most of the time I hand-code everything from scratch using my <a href="https://www.github.com/oninross/firestarter" target="_blank" data-text="Firestarter framework">Firestarter framework.</a>  I use HTML5 Boilerplate and Twitter Bootstrap for rapid development if it is only necessary.</p>
                        </div>

                        <div class="col-r col-6">
                            <h2>Skillset Breakdown</h2>

                            <div class="skills">
                                <div class="skills__bar" data-percent="95.0">
                                    <div class="skills__label">HTML5 / HTML</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>

                                <div class="skills__bar" data-percent="90.0">
                                    <div class="skills__label">CSS3 / CSS</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>

                                <div class="skills__bar" data-percent="80.0">
                                    <div class="skills__label">JavaScript / jQuery / TweenMax</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>

                                <div class="skills__bar" data-percent="70.0">
                                    <div class="skills__label">ActionScript 3.0 / 2.0</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>

                                <div class="skills__bar" data-percent="90.0">
                                    <div class="skills__label">Adobe PhotoShop</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>

                                <div class="skills__bar" data-percent="75.0">
                                    <div class="skills__label">Web Design</div>
                                    <div class="skills__percent">
                                        <span class="skills__percent-number">00.0</span><span class="skills__percent-unit">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div class="logos">
                        <p>Some of the companies I’ve worked on projects for:</p>

                        <ul>
                            <li><img src="/assets/infiniteimaginations/images/svg/logo-ogilvy.svg" alt="OgilvyOne"></li>
                            <li><img src="/assets/infiniteimaginations/images/svg/logo-sony.svg" alt="Sony"></li>
                            <li><img src="/assets/infiniteimaginations/images/svg/logo-singtel.svg" alt="SingTel"></li>
                            <li><img src="/assets/infiniteimaginations/images/svg/logo-holiday-inn.svg" alt="Holiday Inn"></li>
                            <li><img src="/assets/infiniteimaginations/images/svg/logo-abacus.svg" alt="Abacus"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="achievements">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// achievements">// achievements</span>

                        <span class="bar">
                            <i class="icon icon-achievements"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                        <div class="col-l col-6">
                            <p>I have been fortunate enough to be featured in <a href="http://www.webdesignerdepot.com/2017/01/the-best-new-portfolio-sites-january-2017/" target="_blank" itemprop="url" data-text="Web Designer Depot">Web Designer Depot</a> and <strong>Web Designer Magazine</strong> when I least expected it. I also have received User Approved from Awwwards, Fox Favorite from CSS Fox, Site of the Day from Design Nominees, and nominations from CSS Winner, CSS Nectar, CSS Reel, CSS Light, Best CSS Award, CSS Awrds, Web Guru Awards, One Page Mania, CSS Awards, CSS Design Awards and Lemon Web Awards over the past few years.</p>

                            <a class="link" href="http://beta.infiniteimaginations.co" target="_blank" itemprop="url">
                                <img src="/assets/infiniteimaginations/images/web-designer-magazine.png" alt="Featured in Web Designer Magazine">
                            </a>

                            <p>
                                <a class="link beta" href="http://beta.infiniteimaginations.co" target="_blank" data-text="beta.infiniteimaginations.co" itemprop="url">beta.infiniteimaginations.co</a>
                            </p>
                        </div>

                        <div class="col-r col-6">
                            <h2>Recognitions</h2>

                            <div class="nominations">
                                <ul>
                                    <li>
                                        <div class="title">
                                            User Approved
                                            <div class="light">Awwwards 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Featured
                                            <div class="light">Web Designer Depot</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Featured
                                            <div class="light">Web Designer Magazine UK Issue 196</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Fox Favorite
                                            <div class="light">Css Fox 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            CSSW Star
                                            <div class="light">CSS Winner 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Featured
                                            <div class="light">CSS Mania 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Site of the Day
                                            <div class="light">Design Nominee 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Site of the Day
                                            <div class="light">Best CSS Award</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Nominee
                                            <div class="light">CSS Reel 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Nominee
                                            <div class="light">CSS Nectar 2016</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Nominee
                                            <div class="light">Awwwards 2014</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="title">
                                            Nominee
                                            <div class="light">CSS Awards 2013</div>
                                        </div>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div class="ribbons">
                        <p>Some of the ribbons I have collected over the years:</p>

                        <ul>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/awwwards-user-approved.png" alt="Awwwards - User Approved" title="Awwwards - User Approved"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/awwwards.svg" alt="Awwwards Nominee" title="Awwwards Nominee"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/cssfox.svg" alt="CSS Fox - Fox Favorite" title="CSS Fox - Fox Favorite"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/bestcssaward.png" alt="Best CSS Awards - SOTD" title="Best CSS Awards - SOTD"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/cssnectar.png" alt="CSS Nectar - Nominee" title="CSS Nectar - Nominee"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/cssawds.png" alt="CSS Awards - Nominee" title="CSS Awards - Nominee"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/bestcss.png" alt="Best CSS - Nominee" title="Best CSS - Nominee"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/cssa.png" alt="CSS Awards - Featured" title="CSS Awards - Featured"></li>
                            <li class="ui-pattern"><img src="/assets/infiniteimaginations/images/ribbons/cssda.png" alt="CSS Design Awards - Nominee" title="CSS Design Awards - Nominee"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="case-studies coding">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// coding">// coding</span>

                        <span class="bar">
                            <i class="icon icon-coding"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                        <div class="col col-6" itemscope itemtype="http://schema.org/CreativeWork">
                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col col-6" itemscope itemtype="http://schema.org/CreativeWork">
                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="case-studies design">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// design">// design</span>

                        <span class="bar">
                            <i class="icon icon-design"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                        <div class="col col-6" itemscope itemtype="http://schema.org/CreativeWork">
                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="col col-6" itemscope itemtype="http://schema.org/CreativeWork">
                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a href="/#/case-study/" class="card-link" itemprop="url">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="/assets/infiniteimaginations/images/pixel.jpg" alt="image" />

                                        <div class="card-text">
                                            <span class="card-title" aria-hidden="true" itemprop="name"></span>

                                            <div class="cta">
                                                See case study

                                                <div class="cta-icon">
                                                    <i class="icon icon-chevron-right"></i>
                                                    <i class="icon icon-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="case-study">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// case study: ">// case study: </span>

                        <span class="bar">
                            <i class="icon icon-about"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                    	<div class="case-study__wrap col-8 col-offset-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <div class="wrap">
                <div class="col-12">
                    <h1>
                        <span class="text" data-text="// contact">// contact</span>

                        <span class="bar">
                            <i class="icon icon-contact"></i>
                        </span>
                    </h1>

                    <p>If you want to have a chat about anything digital, UX, or collaborate, don't hesitate to connect with me.</p>
                    <br />
                    <p>I am always up for anything geeky. ^_^</p>

                    <div class="contact-icons">
                        <ul itemscope itemtype="http://schema.org/Organization">
                            <li>
                                <a href="mailto:oninross@gmail.com" rel="noopener">
                                    <span class="vh">eMail</span>
                                    <i class="icon icon-email"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://sg.linkedin.com/in/ninorossrodriguez" target="_blank" itemprop="sameAs" rel="noopener">
                                    <span class="vh">LinkedIn</span>
                                    <i class="icon icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/oninross" target="_blank" itemprop="sameAs" rel="noopener">
                                    <span class="vh">GitHub</span>
                                    <i class="icon icon-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/oninross" target="_blank" itemprop="sameAs" rel="noopener">
                                    <span class="vh">Facebook</span>
                                    <i class="icon icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/oninross/" target="_blank" itemprop="sameAs" rel="noopener">
                                    <span class="vh">Instagram</span>
                                    <i class="icon icon-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="error">
        <div class="container">
            <div class="wrap">
                <div class="col-10 col-offset-1">
                    <h1>
                        <span class="text" data-text="// oops!">// oops!</span>

                        <span class="bar">
                            <i class="icon icon-warning"></i>
                        </span>
                    </h1>

                    <p>Sorry, the page you are looking for does not exist</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include('footer.php'); ?>



















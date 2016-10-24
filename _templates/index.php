<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main" role="document">
    <section class="hello">
        <div class="container">
            <div class="wrap">
                <div class="col-10 col-offset-1">
                    <h1>
                        <span class="text" data-text="Hello World...">Hello World...</span>
                        <span class="bar"></span>
                    </h1>

                    <p>I'm <a href="/#/about/" data-text="Niño Ross Rodriguez,"><span>Niño Ross Rodriguez,</span></a> a Senior User Experience (UX) Developer with eight years of industry experience, specializing in developing pixel perfect websites quickly without sacrificing code quality and ensuring that users have the best UX they can get in a site. Get to know a bit more <a href="/#/about/" data-text="about my skills"><span>about my skills</span></a> or feel free to look around my <a href="/#/coding/" data-text="coding"><span>coding</span></a> and <a href="/#/design/" data-text="design"><span>design</span></a> works.</p>

                    <hr />

                    <nav>
                        <ul>
                            <li>
                                <a href="/#/about/" class="element-box" data-name="about">
                                    <span class="text">
                                        <span class="abbr">Ab</span>
                                        <span class="full">about</span>
                                    </span>

                                    <span class="icon icon-about"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/achievements/" class="element-box" data-name="achievements">
                                    <span class="text">
                                        <span class="abbr">Ac</span>
                                        <span class="full">achievements</span>
                                    </span>

                                    <span class="icon icon-achievements"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/coding/" class="element-box" data-name="coding">
                                    <span class="text">
                                        <span class="abbr">Co</span>
                                        <span class="full">coding</span>
                                    </span>

                                    <span class="icon icon-coding"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/design/" class="element-box" data-name="design">
                                    <span class="text">
                                        <span class="abbr">De</span>
                                        <span class="full">design</span>
                                    </span>

                                    <span class="icon icon-design"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/contact/" class="element-box" data-name="contact">
                                    <span class="text">
                                        <span class="abbr">Ct</span>
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
                            <p>As a <strong>Senior UX Developer</strong>, I love being challenged.  I like to <strong>create</strong> solutions to user experience problems, <strong>imagine</strong> fun interaction and animation, and <strong>developing</strong> the best web experience.</p>
                            <p>Most of the time I hand-code everything from scratch using my <a href="https://www.github.com/oninross/firestarter" target="_blank" data-text="Firestarter framework">Firestarter framework.</a>  I use HTML5 Boilerplate and Twitter Bootstrap for rapid development if it is only necessary.</p>
                        </div>

                        <div class="col-r col-6">
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
                            <p>I have been fortunate enough to be featured in "Web Designer Magazine" when I least expected it. I also have received a few nominations and features in websites including Awwwards, One Page Mania, CSS Reel, Lemon Web Awards, CSS Awards, CSS Design Awards and CSS Awards over the past few years.</p>

                            <a href="http://beta.infiniteimaginations.co" target="_blank">
                                <img src="/assets/infiniteimaginations/images/web-designer-magazine.png" alt="Featured in Web Designer Magazine">
                            </a>

                            <p>
                                <a class="beta" href="http://beta.infiniteimaginations.co" target="_blank" data-text="beta.infiniteimaginations.co">beta.infiniteimaginations.co</a>
                            </p>
                        </div>

                        <div class="col-r col-6">
                            <div class="nominations">
                                <ul>
                                    <li>
                                        <span class="title">Nominated in Awwwards 2014</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Featured in Web Designer Magazine UK Issue 196</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">User Experience Certified by Udemy</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Featured in One Page Mania 2014</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Nominated in CSS Reel 2014</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Nominee in Lemon Web Awards 2014</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Nominee in CSS Awards 2014</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Nominee in CSS Design Awards 2012</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>

                                    <li>
                                        <span class="title">Featured in CSS Awards 2012</span>

                                        <div class="ui">
                                            <div class="ui-corner ui-corner__ul"></div>
                                            <div class="ui-corner ui-corner__ur"></div>
                                            <div class="ui-corner ui-corner__bl"></div>
                                            <div class="ui-corner ui-corner__br"></div>
                                            <div class="ui-pattern">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
                        <div class="col col-6">
                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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

                        <div class="col col-6">
                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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

                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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
                        <div class="col col-6">
                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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

                        <div class="col col-6">
                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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

                            <a href="/#/case-study/" class="card-link">
                                <div class="card">
                                    <div class="card-wrap">
                                        <img src="" alt="" />

                                        <div class="card-text">
                                            <span class="card-title"></span>
                                            <span class="card-desc"></span>

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
                        <div class="text" data-text="// case study: ">// case study: </div>

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
                        <ul>
                            <li>
                                <a href="mailto:oninross@gmail.com">
                                    <span class="vh">eMail</span>
                                    <i class="icon icon-email"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://sg.linkedin.com/in/ninorossrodriguez" target="_blank">
                                    <span class="vh">LinkedIn</span>
                                    <i class="icon icon-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/oninross" target="_blank">
                                    <span class="vh">GitHub</span>
                                    <i class="icon icon-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/oninross" target="_blank">
                                    <span class="vh">Facebook</span>
                                    <i class="icon icon-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/oninross/" target="_blank">
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



















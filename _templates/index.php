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
                        <span class="vh">Hello World...</span>
                        <span class="bar"></span>
                    </h1>

                    <p>I'm <strong>Niño Ross Rodriguez</strong>, a UX Developer based in Singapore with eight years of industry experience.  I specialize in developing pixel perfect websites quickly without sacrificing code quality. Get to know a bit more <a href="http://www.google.com/">about my skills</a> or feel free to look around my <a href="/#/coding/">coding</a> and <a href="/#/design/">design</a> works.</p>

                    <hr />

                    <nav>
                        <ul>
                            <li>
                                <a href="/#/about/">
                                    <span class="text">
                                        <span class="abbr">Ab</span>
                                        <span class="full">about</span>
                                    </span>

                                    <span class="icon icon-about"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/achievements/">
                                    <span class="text">
                                        <span class="abbr">Ac</span>
                                        <span class="full">achievements</span>
                                    </span>

                                    <span class="icon icon-achievements"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/coding/">
                                    <span class="text">
                                        <span class="abbr">Co</span>
                                        <span class="full">coding</span>
                                    </span>

                                    <span class="icon icon-coding"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/design/">
                                    <span class="text">
                                        <span class="abbr">De</span>
                                        <span class="full">design</span>
                                    </span>

                                    <span class="icon icon-design"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/contact/">
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
                        about

                        <span class="bar">
                            <i class="icon icon-about"></i>
                        </span>
                    </h1>

                    <div class="wrap">
                        <div class="col-l col-6">
                            <p>I specialize in converting code into websites, transforming pixels into design, deliver the smoothest user experience and make a static site come alive with animation.  It is my passion and determination to provide quality products by following today's latest web standards in my projects. I love to tinker with code to make it work and suit the project's needs. Most of the time I hand-code everything from scratch using my <a href="https://www.github.com/oninross/firestarter" target="_blank">Firestarter framework</a> but knowledable in using HTML5 Boilerplate and Twitter Boostrap for rapid development when needed.</p>
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
                        <p>Some of the company projects that I have worked on:</p>

                        <ul>
                            <li>
                                <img src="/assets/infiniteimaginations/images/svg/logo-ogilvy.svg" alt="OgilvyOne">
                            </li>

                            <li>
                                <img src="/assets/infiniteimaginations/images/svg/logo-sony.svg" alt="Sony">
                            </li>

                            <li>
                                <img src="/assets/infiniteimaginations/images/svg/logo-singtel.svg" alt="SingTel">
                            </li>

                            <li>
                                <img src="/assets/infiniteimaginations/images/svg/logo-holiday-inn.svg" alt="Holiday Inn">
                            </li>

                            <li>
                                <img src="/assets/infiniteimaginations/images/svg/logo-abacus.svg" alt="Abacus">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--
    <section class="achievements"></section>
    <section class="coding"></section>
    <section class="design"></section>
    <section class="contact"></section> -->
</main>

<div class="background">
    <i class="pattern"></i>

    <video id="video_background" preload="auto" loop="loop" muted="muted">
        <source src="/assets/infiniteimaginations/images/background.mp4" type="video/mp4" />
    </video>
</div>

<?php include('footer.php'); ?>


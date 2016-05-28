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
                        Hello world...
                        <span class="bar"></span>
                    </h1>

                    <p>I'm <strong>Niño Ross Rodriguez</strong>, a UX Developer based in Singapore with eight years of industry experience, specializing in developing pixel perfect websites quickly without sacrificing code quality. Get to know a bit more <a href="http://www.google.com/">about my skills</a> or feel free to look around my <a href="/#/coding/">coding</a> and <a href="/#/design/">design</a> works.</p>

                    <hr />

                    <nav>
                        <ul>
                            <li>
                                <a href="/#/about/">
                                    <span class="abbr">Ab</span>
                                    <span class="full">about</span>

                                    <span class="icon icon-about"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/achievements/">
                                    <span class="abbr">Ac</span>
                                    <span class="full">achievements</span>

                                    <span class="icon icon-achievements"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/coding/">
                                    <span class="abbr">Co</span>
                                    <span class="full">coding</span>

                                    <span class="icon icon-coding"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/design/">
                                    <span class="abbr">De</span>
                                    <span class="full">design</span>

                                    <span class="icon icon-design"></span>
                                </a>
                            </li>

                            <li>
                                <a href="/#/contact/">
                                    <span class="abbr">Ct</span>
                                    <span class="full">contact</span>

                                    <span class="icon icon-contact"></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>

    <section class="about"></section>
    <section class="achievements"></section>
    <section class="coding"></section>
    <section class="design"></section>
    <section class="contact"></section>
</main>

<div class="background">
    <i class="pattern"></i>

    <video id="video_background" preload="auto" loop="loop" muted="muted" autoplay>
        <source src="/assets/infiniteimaginations/images/background.mp4" type="video/mp4" />
    </video>
</div>

<?php include('footer.php'); ?>


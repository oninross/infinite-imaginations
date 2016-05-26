<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main" role="document">
    <section class="home">

    </section>
</main>

<div class="background">
    <i class="pattern"></i>

    <video id="video_background" preload="auto" loop="loop" muted="muted" autoplay>
        <source src="video/clouds.mp4" type="video/mp4" />
        <source src="video/clouds.webm" type="video/webm" />
        <source src="video/clouds.ogv" type="video/ogg" />
    </video>
</div>

<?php include('footer.php'); ?>


<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie10" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js is-ie lt-ie9 lt-ie10" lang="en"> <![endif]-->
<!--[if IE 9]><html class="no-js is-ie lt-ie10" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!--
                     _                 _ _   _                           _              _           _ _     _
 _ __ ___   __ _  __| | ___  __      _(_) |_| |__    _ __ ___   __ _ ___| |_ ___ _ __  | |__  _   _(_) | __| | ___ _ __
| '_ ` _ \ / _` |/ _` |/ _ \ \ \ /\ / / | __| '_ \  | '_ ` _ \ / _` / __| __/ _ \ '__| | '_ \| | | | | |/ _` |/ _ \ '__|
| | | | | | (_| | (_| |  __/  \ V  V /| | |_| | | | | | | | | | (_| \__ \ ||  __/ |    | |_) | |_| | | | (_| |  __/ |
|_| |_| |_|\__,_|\__,_|\___|   \_/\_/ |_|\__|_| |_| |_| |_| |_|\__,_|___/\__\___|_|    |_.__/ \__,_|_|_|\__,_|\___|_|

                                                                              https://github.com/oninross/master_builder

                                                                                                                         -->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="">
        <title>Master Builder</title>

        <meta name="robots" content="follow">
        <meta name="author" content="">
        <meta name="copyright" content="">
        <meta name="description" content="">
        <meta name="keywords" content="" />

        <meta property="og:title" content="">
        <meta property="og:type" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <meta property="og:description" content="">
        <meta property="og:site_name" content="">

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:creator" content=""/>
        <meta name="twitter:url" content=""/>

        <meta name="twitter:title" content=""/>
        <meta name="twitter:description" content=""/>
        <meta name="twitter:image" content="" />


        <!-- build:css /assets/master_builder/css/main.min.css -->
        <link href="/assets/master_builder/css/main.css" rel="stylesheet">
        <!-- /build -->

        <?php if(!isset($is_table_preview)): ?>
            <!-- build:css /assets/master_builder/css/responsive.min.css -->
            <link href="/assets/master_builder/css/responsive.css" rel="stylesheet">
            <!-- /build -->
        <?php endif; ?>

        <link href="http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" type="text/css">

        <!--[if lt IE 9]>
            <link rel="stylesheet" href = "/assets/master_builder/css/ie.css">
            <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
        <![endif]-->

        <script src="/assets/master_builder/js/vendor/modernizr.js"></script>
    </head>
    <body>
        <?php if(!isset($is_table_preview)): ?>
        <header class="header" role="header">
            <div class="logo">
                <div class="container">
                    <h1>
                        <a href="/">Master Builder</a>
                    </h1>
                </div>
            </div>

            <?php include('primary-nav.php'); ?>
        </header>
        <?php endif; ?>
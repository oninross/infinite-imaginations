<?php
    set_include_path($_SERVER['DOCUMENT_ROOT'] . '/includes');
    $primary = 0;
    include('header.php');
?>

<main id="main" role="document">
	<section class="container">
		  <article>

<h1><a id="infiniteimaginations_0"></a>Master Builder</h1>
<p><a href="http://badge.fury.io/gh/oninross%2Finfiniteimaginations"><img src="https://badge.fury.io/gh/oninross%2Finfiniteimaginations.svg" alt="GitHub version"></a>
<a href="http://opensource.org/licenses/MIT"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a></p>
<h2><a id="Introduction_4"></a>Introduction</h2>
<p>Master Builder is a simple out of the box front-end templating base used for building new websites created and maintained by Nino Ross Rodriguez.  Master Builder is not to compete with other frameworks, but more on to provide a very easy and structured framework for any developer to use.  If you don’t want to use any of the available features in the build, you can easily just remove the files that you don’t need.  No need to go down to code level and find the lines of code.  It would be as easy as <code>right click &gt; delete</code>.</p>
<p>To get started, jump to <a href="#setup">setup</a>.</p>
<h2><a id="Browser_Compatibility_9"></a>Browser Compatibility</h2>
<ul>
<li>Chrome (Windows / Mac OS)</li>
<li>FireFox (Windows / Mac OS)</li>
<li>Safari (Mac OS)</li>
<li>Internet Explorer 8+ (Windows)</li>
</ul>
<h2><a id="Features_15"></a>Features</h2>
<ul>
<li>Full <strong>mobile first responsive framework</strong> <s>(number of columns easily manageable)</s> Have to revert to the old method as it was producing the subpixel rending issue</li>
<li>Awesome mobile menu</li>
<li>Responsive tables
<ul>
<li>Revised Responsive Tables plugin to open in new tab.  Simple solution to show large tables on small devices.</li>
<li>Ability to swipe left/right on mobile device for long tables</li>
</ul>
</li>
<li>IE9 Placeholder fallback</li>
<li>Uses Grunt to automate compiling into a folder for easy deployment
<ul>
<li>“Watches” your development folder and auto-reloads your browser so you don’t have to refresh your window every time</li>
<li>Concatenates and uglifies all CSS and JS files</li>
<li>Compresses images</li>
</ul>
</li>
<li>Standard Content to quickly visualize any kind of content</li>
<li>Lazy loading images and background images (uses <a href="https://github.com/tuupola/jquery_lazyload">jQuery_lazyload</a> )
<ul>
<li>Dynamically add background images meant to have <code>background: cover</code> property, without hard coding in CSS</li>
</ul>
</li>
<li>Material Design Components</li>
</ul>
<h2><a id="Release_History_31"></a>Release History</h2>
<p><code>v2.0.10</code> - Revised jQuery.mobileMenu to be fixed on mobile devices only.  Material Design dropdown to behave native on mobile devices.  Revised Responsive Tables to display any kind of tables on mobile devices.</p>
<p><code>v2.0.9</code> - IE8 Fixes on mobile menu.  Background: cover fallback.  Mobile menu enhancements for accessibility.</p>
<p><code>v2.0.8</code> - Enhanced Mobile Menu.  Revised the method of displaying tabled on mobile devices.</p>
<p><code>v2.0.7</code> - Changed to mobile first development.  Subpixel-rending fix.  Added in Material Design Toaster effect.</p>
<p><code>v2.0.6</code> - Bug fixes for jquery.mobileMenu.  Lazy loading background images.  Slightly optimized gruntfile.</p>
<p><code>v2.0.5</code> - Set TweenMax framerate to 60 fps.  Bug fix on jquery.mobileMenu</p>
<p><code>v2.0.4</code> - Minor CSS/JS fixes for Material Design components.  Converted CSS easing to variables.  Close Material Dropdown when <code>body</code> is clicked.</p>
<p><code>v2.0.3</code> - Converted jQuery slideDown/slideUp into TweenMax equivalent.</p>
<p><code>v2.0.2</code> - Minor CSS/JS fixes.  Added in Grunt task for non-PHP servers. Revised jQuery.mobileMenu for better assignment of class names.</p>
<p><code>v2.0.1</code> - Minor CSS/JS fixes on core templates.</p>
<p><code>v2.0.0</code> - Material Design components.  Minor CSS/JS fixes on core templates.</p>
<p><code>v1.3.1</code> - Minor bug fixes.</p>
<p><code>v1.3.0</code> - Converted mobile menu into jQuery Plugin.</p>
<p><code>v1.2.1</code> - Updated PDF Table usage</p>
<p><code>v1.2.0</code> - Converted jsPDF table printing into jQuery Plugin.</p>
<p><code>v1.1.0</code> - Added lazy loading feature for images.  Minor CSS fixes for mobile.</p>
<p><code>v1.0.0</code> - Your simple straight-forward base boilerplate for your next project</p>
<h2><a id="Dependencies_67"></a>Dependencies</h2>
<h3><a id="Grunt_Javascript_Task_Runner_68"></a>Grunt Javascript Task Runner</h3>
<p>If you haven’t used <a href="http://gruntjs.com/">Grunt</a> before, be sure to check out the <a href="http://gruntjs.com/getting-started">Getting Started</a> guide, as it explains how to create a <a href="http://gruntjs.com/sample-gruntfile"><code>gruntfile.js</code></a> as well as install and use Grunt plugins. Once you’re familiar with that process, you may use Grunt commands to compile your project.</p>
<h3><a id="SASS_71"></a>SASS</h3>
<p>If you haven’t used <a href="http://sass-lang.com/">SASS</a> before, be sure to have a read on how to get SASS on your local machine in their <a href="http://sass-lang.com/install">installation guide</a> as it will explain how to write your CSS in SASS.  The boilerplate is written in SASS and will be compiled by Grunt</p>
<h3><a id="Local_PHP_Server_74"></a>Local PHP Server</h3>
<p><strong>Note:</strong> You must set the document root in your Local PHP Server to the <code>dist</code> folder of the project for you to view it in a browser.  You can do this by editing the <code>httpd.conf</code> file. See the example below:</p>
<pre><code>DocumentRoot "C:<span class="hljs-command">\xampp</span><span class="hljs-command">\htdocs</span><span class="hljs-command">\master</span>_builder<span class="hljs-command">\dist</span>"
&lt;Directory "C:<span class="hljs-command">\xampp</span><span class="hljs-command">\htdocs</span><span class="hljs-command">\master</span>_builder<span class="hljs-command">\dist</span>"&gt;
</code></pre>
<h3><a id="GreenSock_TweenMax_and_TimeLineMax_optional_81"></a>GreenSock TweenMax and TimeLineMax <em>(optional)</em></h3>
<p>For the cool menu animation.  The files already included in the framework.  If you want to read more about TweenMax, you can check it out their <a href="http://http://greensock.com/">website</a>.</p>
<h3><a id="LiveReload_optional_84"></a>LiveReload <em>(optional)</em></h3>
<p>It will make your life a whole lot easier once you enable this in your browser.  No more <code>CTRL + F5</code> every time you make a change in your codes.  Download the extension and install it in your preferred browser.</p>
<h2><a id="Setup_87"></a>Setup</h2>
<p>Provided that you have <a href="http://gruntjs.com/">Grunt</a> and <a href="https://www.ruby-lang.org/en/">Ruby</a> installed in your system, follow the steps to get started with your project.</p>
<ol>
<li>
<p>Open <code>package.json</code> file and change <code>infiniteimaginations</code> the desired project name.  Do not use white spaces.  Hyphens and underscores are accepted.</p>
</li>
<li>
<p>Open <code>header.php</code> and <code>footer.php</code>.  Change <code>infiniteimaginations</code> to the project name that you chose in step 1.</p>
</li>
<li>
<p>Open your Command Prompt (Windows) or your Terminal (Mac OSX) and go to the directory of your project.</p>
</li>
<li>
<p>Run the following command: <code>npm install</code>.</p>
</li>
<li>
<p>Once that is completed, you’re ready to rock and roll.  You can use the following commands during your development.</p>
</li>
</ol>
<h2><a id="Available_Grunt_Tasks_100"></a>Available Grunt Tasks</h2>
<pre><code><span class="hljs-title">grunt</span>
</code></pre>
<p><strong><em>Development Task:</em></strong> Generates the project dist folder for easy deployment to any server.  This command will not minify nor uglify your CSS and JS.  Recommended on initial start up of a project.</p>
<pre><code><span class="hljs-title">grunt</span> watch
</code></pre>
<p><strong><em>Watch Task:</em></strong> Grunt will listen to any changes in your files will reload your page.</p>
<pre><code><span class="hljs-title">grunt</span> dist
</code></pre>
<p><strong><em>Production Task:</em></strong> Generates the project dist folder for easy deployment in any server.  This command will clean the <code>dist</code> folder, minify, uglify your CSS and JS, and compress your images.  In addition to this, Grunt will sift through the <code>header.php</code> and <code>footer.php</code> and will change the paths to the minified versions.  This will save you time changing them before going to deployment.  Recommended when your project is ready to go live and if your server supports PHP.</p>
<pre><code><span class="hljs-title">grunt</span> www
</code></pre>
<p><strong><em>Production Task Alternative (Servers that doesn’t support PHP):</em></strong> Basically the same as</p>
<pre><code><span class="hljs-title">grunt</span> validate
</code></pre>
<p><strong><em>Validation Task:</em></strong> Will sift through your JS and SASS files to check for any errors.</p>
<h2><a id="Whats_in_the_Package_127"></a>What’s in the Package?</h2>
<pre><code>infiniteimaginations/
    ├── _fonts/
    ├── _icomoon/
    ├── _images/
    │   ├── ie/
    │   │   └── transparent.png
    ├── _scripts/
    │   ├── modules/
    │   │   ├── rr.listeners.js
    │   │   ├── rr.materialDesign.js
    │   │   ├── rr.mobileMenu.js
    │   │   └── rr.tableScrollbar.js
    │   ├── plugins/
    │   │   ├── minified/
    │   │   │   ├── doT.<span class="hljs-built_in">min</span>.js
    │   │   │   ├── ScrollToPlugin.<span class="hljs-built_in">min</span>.js
    │   │   │   ├── TimelineMax.<span class="hljs-built_in">min</span>.js
    │   │   │   └── TweenMax.<span class="hljs-built_in">min</span>.js
    │   │   ├── jquery.lazyload.js
    │   │   ├── jquery.mCustomScrollbar.js
    │   │   ├── jquery.visible.js
    │   │   ├── jRespond.js
    │   │   └── scrollMonitor.js
    │   ├── vendor/
    │   │   ├── jquery-<span class="hljs-number">1.11.</span><span class="hljs-number">3.</span><span class="hljs-built_in">min</span>.js
    │   │   └── modernizr.js
    │   └── main.js
    ├── _scss/
    │   ├── <span class="hljs-type">common</span>/
    │   │   ├── _defaults.scss
    │   │   ├── _fonts.scss
    │   │   ├── _mixins.scss
    │   │   └── _vars.scss
    │   ├── components/
    │   │   ├── materialDesign/
    │   │   |   ├── _main.scss
    │   │   |   ├── _desktop.scss
    │   │   |   └── _tablet.scss
    │   │   └── mobileMenu/
    │   │       ├── _main.scss
    │   │       ├── _desktop.scss
    │   │       └── _tablet.scss
    │   ├── _desktop.scss
    │   ├── _tablet.scss
    │   ├── ie.scss
    │   ├── main.scss
    │   └── responsive.scss
    ├── styles/
    └── tempates/
        ├── grid/
        |   └── <span class="hljs-built_in">index</span>.php
        ├── images/
        ├── includes/
        |   ├── footer.php
        |   ├── header.php
        |   └── primary-nav.php
        ├── list/
        |   └── <span class="hljs-built_in">index</span>.php
        ├── material-design/
        |   └── <span class="hljs-built_in">index</span>.php
        ├── standard/
        |   └── <span class="hljs-built_in">index</span>.php
        └── <span class="hljs-built_in">index</span>.php
</code></pre>
<h3><a id="What_Goes_Where_193"></a>What Goes Where</h3>
<p><code>_fonts/</code> - Downloaded webfonts are placed here.</p>
<p><code>_icomoon/</code> - Downloaded custom font icons are placed here.</p>
<p><code>_images/</code> - Images used across the website are placed here.</p>
<p><code>_scripts/plugins/</code> - Place all plugin files in this folder.</p>
<p><code>_scripts/plugins/minified/</code> - Place all minified files in this folder.</p>
<p><code>_scripts/vendor/</code> -</p>
<p><code>_scss/</code> - All SCSS stylesheets.</p>
<p><code>_scss/common/</code> - Stylesheets that are commonly used through the entire project.</p>
<p><code>_scss/components/</code> - Stylesheets broken down to components for easy modification.</p>
<p><code>styles/</code> - Stylesheets from plugins are placed here.  <strong>Note:</strong> You must update <code>header.php</code> and link the CSS file.  CSS in this folder will not be concatincated with the ones you have created.</p>
<p><code>templates/</code> - All created pages for the website goes here.</p>
<p><strong>Note:</strong> I placed <code>_delete</code> files in empty folders so Git will push the folders to the repo.  You can delete these files onces you have set up the boilerplate.</p>
<h3><a id="What_Is_Reponsible_For_What_218"></a>What Is Reponsible For What</h3>
<p><code>_scripts/modules/rr.mobileMenu.js</code> - Where the mobile menu is initialized.</p>
<p><code>_scripts/modules/rr.tableScrollbar.js</code> - Where the table printing is initialized.</p>
<p><code>_scripts/plugins/minified/ScrollToPlugin.min.js</code> - Responsible for scrolling the page while using TweenMax.  Dependent on TweenMax.</p>
<p><code>_scripts/plugins/minified/TimelineMax.min.js</code> - Responsible for animating the menu icon on mobile.  Dependent on TweenMax.</p>
<p><code>_scripts/plugins/minified/TweenMax.min.js</code> - Responsible for all cool JS animation.</p>
<p><code>_scripts/plugins/jRespond.js</code> - Creating breakpoints via JavaScript to enable/disable any plugin needed.</p>
<p><code>_scss/common/_defaults.scss</code> - Normalizing your HTML build from <code>normalize.css</code> and HTML5 Boilerplate</p>
<p><code>_scss/common/_fonts.scss</code> - Place all CSS webfonts in this file.</p>
<p><code>_scss/common/_mixins.scss</code> - Majority of long coding techniques for cross-browser compatibilty is in this file.  Have a look and it will make your coding life much better.</p>
<p><code>_scss/common/_vars.scss</code> - Common variables that will be used across your SCSS files.  Breakpoints, colors and column numbers can be edited here.</p>
<p><code>_scss/_desktop.scss</code> - Styles for desktop only.</p>
<p><code>_scss/_tablet.scss</code> - Styles for tablet only.</p>
<p><code>_scss/main.scss</code> - Styles from mobile that can cascade to .desktop.</p>
<p><code>_scss/ie.scss</code> - IE8 Specific CSS fixes</p>
<h2><a id="Mobile_Responsive_Tables_247"></a>Mobile Responsive Tables</h2>
<h3><a id="Problem_248"></a>Problem</h3>
<p>Tables with large number of columns and responsive websites don’t mix well.  The majority’s solution is to wrap the <code>table</code> with a div and assign an <code>overflow-x: scroll</code> property to allow the users swipe left and right.  But users still can’t get a glimpse or an overview of the entire table.</p>
<h3><a id="A_Possible_Solution_251"></a>A Possible Solution</h3>
<p>The framework will wrap all tables and create a button as a call to action to “View table”.  Once the user taps on the button, it will open into a new window with the table only.  Users have now the ability to view the table in their mobile phones regardless of the manufacturer and or operating system. They can pinch to zoom in or out and swipe in any direction.</p>
<h3><a id="Mobile_Menu__jquerymobileMenu_demohttpcodepeniooninrosspenaOpmqb_255"></a>Mobile Menu  (jquery.mobileMenu) (<a href="http://codepen.io/oninross/pen/aOpmqb">demo</a>)</h3>
<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">id</span>=<span class="hljs-value">"primary-nav"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-title">nav</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"nav"</span> <span class="hljs-attribute">role</span>=<span class="hljs-value">"navigation"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"wrap"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">h1</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/"</span>&gt;</span>Master Builder<span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">h1</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>

        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl1"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"no-link"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 1<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl2"</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/standard/"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Standard Content<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"/grid/"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Grid System<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 2<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>
                        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"lvl3"</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                            <span class="hljs-tag">&lt;<span class="hljs-title">li</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">a</span> <span class="hljs-attribute">href</span>=<span class="hljs-value">"#"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-title">span</span>&gt;</span>Level 3<span class="hljs-tag">&lt;/<span class="hljs-title">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
                    <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-title">nav</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>
</code></pre>
<p>You <strong>must</strong> follow the markup in order for the plugin to work that it is designed to be.  If one element or class is missing from the markup, the plugin might not work properly.  This plugin currently supports up to 3 levels only.</p>
<p>Add <code>.no-link</code> to <code>a</code> tags if it will not lead to anywhere.  This way when a user clicks on the link, the dropdown (if available) will open.</p>
<h3><a id="IE9_Placeholder_Fallback_290"></a>IE9 Placeholder Fallback</h3>
<p>For all <code>input[type=&quot;text&quot;]</code> tags that you want to use the <code>placeholder</code> property, add a <code>placeholder</code> attribute with the desired placeholder text.  JS will do the rest.</p>
<h3><a id="Image_Background_Cover_293"></a>Image Background Cover</h3>
<p>Add <code>.backstretch</code> on the <code>div</code> that you wish to have the image to have a <code>background: cover</code> property.  Then add data attribute named <code>data-background</code> with the path of the the image.  JS will do the rest.</p>
<h3><a id="Lazy_Load_Images_296"></a>Lazy Load Images</h3>
<p><code>&lt;img&gt;</code> tags must have the class <code>lazy</code> attached to it and a data attribute named <code>data-original</code> containing the path of the image.  JS will do the rest.</p>
<h2><a id="Issues_Bugs_or_Feature_Requests_299"></a>Issues, Bugs or Feature Requests</h2>
<p>If you found any bugs, would like to contribute, have comments or suggestions, head down to the <a href="https://github.com/oninross/infiniteimaginations/issues">issues section</a> and log it in.  I will be more than happy to discuss it.</p>
<h2><a id="Credits_302"></a>Credits</h2>
<p><a href="http://www.bitneko.com/">Ang Ziwei</a> for creating the gruntfile.</p>
<p><a href="http://greensock.com/">GreenSock</a> for making animating so much easier.</p>
<h2><a id="License_307"></a>License</h2>
<p>Copyright 2016 <a href="http://www.infiniteimaginations.co/#/hello/">Infinite Imaginations</a></p>
<p>Licensed under the MIT License</p>

        </article>
	</section>
</main>

<?php include('footer.php'); ?>


# Master Builder
[![GitHub version](https://badge.fury.io/gh/oninross%2Finfiniteimaginations.svg)](http://badge.fury.io/gh/oninross%2Finfiniteimaginations)
[![License](http://img.shields.io/badge/License-MIT-blue.svg)](http://opensource.org/licenses/MIT)

## Introduction
Master Builder is a simple out of the box front-end templating base used for building new websites created and maintained by Nino Ross Rodriguez.  Master Builder is not to compete with other frameworks, but more on to provide a very easy and structured framework for any developer to use.  If you don't want to use any of the available features in the build, you can easily just remove the files that you don't need.  No need to go down to code level and find the lines of code.  It would be as easy as `right click > delete`.

To get started, jump to [setup](#setup).

## Browser Compatibility
- Chrome (Windows / Mac OS)
- FireFox (Windows / Mac OS)
- Safari (Mac OS)
- Internet Explorer 8+ (Windows)

## Features
- Full **mobile first responsive framework** ~~(number of columns easily manageable)~~ Have to revert to the old method as it was producing the subpixel rending issue
- Awesome mobile menu
- Responsive tables
    * Revised Responsive Tables plugin to open in new tab.  Simple solution to show large tables on small devices.
    * Ability to swipe left/right on mobile device for long tables
- IE9 Placeholder fallback
- Uses Grunt to automate compiling into a folder for easy deployment
    * "Watches" your development folder and auto-reloads your browser so you don't have to refresh your window every time
    * Concatenates and uglifies all CSS and JS files
    * Compresses images
- Standard Content to quickly visualize any kind of content
- Lazy loading images and background images (uses [jQuery_lazyload](https://github.com/tuupola/jquery_lazyload) )
    * Dynamically add background images meant to have `background: cover` property, without hard coding in CSS
- Material Design Components

## Release History

`v2.0.10` - Revised jQuery.mobileMenu to be fixed on mobile devices only.  Material Design dropdown to behave native on mobile devices.  Revised Responsive Tables to display any kind of tables on mobile devices.

`v2.0.9` - IE8 Fixes on mobile menu.  Background: cover fallback.  Mobile menu enhancements for accessibility.

`v2.0.8` - Enhanced Mobile Menu.  Revised the method of displaying tabled on mobile devices.

`v2.0.7` - Changed to mobile first development.  Subpixel-rending fix.  Added in Material Design Toaster effect.

`v2.0.6` - Bug fixes for jquery.mobileMenu.  Lazy loading background images.  Slightly optimized gruntfile.

`v2.0.5` - Set TweenMax framerate to 60 fps.  Bug fix on jquery.mobileMenu

`v2.0.4` - Minor CSS/JS fixes for Material Design components.  Converted CSS easing to variables.  Close Material Dropdown when `body` is clicked.

`v2.0.3` - Converted jQuery slideDown/slideUp into TweenMax equivalent.

`v2.0.2` - Minor CSS/JS fixes.  Added in Grunt task for non-PHP servers. Revised jQuery.mobileMenu for better assignment of class names.

`v2.0.1` - Minor CSS/JS fixes on core templates.

`v2.0.0` - Material Design components.  Minor CSS/JS fixes on core templates.

`v1.3.1` - Minor bug fixes.

`v1.3.0` - Converted mobile menu into jQuery Plugin.

`v1.2.1` - Updated PDF Table usage

`v1.2.0` - Converted jsPDF table printing into jQuery Plugin.

`v1.1.0` - Added lazy loading feature for images.  Minor CSS fixes for mobile.

`v1.0.0` - Your simple straight-forward base boilerplate for your next project

## Dependencies
### Grunt Javascript Task Runner
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [`gruntfile.js`](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may use Grunt commands to compile your project.

### SASS
If you haven't used [SASS](http://sass-lang.com/) before, be sure to have a read on how to get SASS on your local machine in their [installation guide](http://sass-lang.com/install) as it will explain how to write your CSS in SASS.  The boilerplate is written in SASS and will be compiled by Grunt

### Local PHP Server
**Note:** You must set the document root in your Local PHP Server to the `dist` folder of the project for you to view it in a browser.  You can do this by editing the `httpd.conf` file. See the example below:
```
DocumentRoot "C:\xampp\htdocs\infiniteimaginations\dist"
<Directory "C:\xampp\htdocs\infiniteimaginations\dist">
```

### GreenSock TweenMax and TimeLineMax *(optional)*
For the cool menu animation.  The files already included in the framework.  If you want to read more about TweenMax, you can check it out their [website](http://http://greensock.com/).

### LiveReload *(optional)*
It will make your life a whole lot easier once you enable this in your browser.  No more `CTRL + F5` every time you make a change in your codes.  Download the extension and install it in your preferred browser.

## Setup
Provided that you have [Grunt](http://gruntjs.com/) and [Ruby](https://www.ruby-lang.org/en/) installed in your system, follow the steps to get started with your project.

1. Open `package.json` file and change `infiniteimaginations` the desired project name.  Do not use white spaces.  Hyphens and underscores are accepted.

2. Open `header.php` and `footer.php`.  Change `infiniteimaginations` to the project name that you chose in step 1.

3. Open your Command Prompt (Windows) or your Terminal (Mac OSX) and go to the directory of your project.

4. Run the following command: `npm install`.

5. Once that is completed, you're ready to rock and roll.  You can use the following commands during your development.

## Available Grunt Tasks
```
grunt
```
**_Development Task:_** Generates the project dist folder for easy deployment to any server.  This command will not minify nor uglify your CSS and JS.  Recommended on initial start up of a project.

```
grunt watch
```
**_Watch Task:_** Grunt will listen to any changes in your files will reload your page.

```
grunt dist
```
**_Production Task:_** Generates the project dist folder for easy deployment in any server.  This command will clean the `dist` folder, minify, uglify your CSS and JS, and compress your images.  In addition to this, Grunt will sift through the `header.php` and `footer.php` and will change the paths to the minified versions.  This will save you time changing them before going to deployment.  Recommended when your project is ready to go live and if your server supports PHP.

```
grunt www
```
**_Production Task Alternative (Servers that doesn't support PHP):_** Basically the same as


```
grunt validate
```
**_Validation Task:_** Will sift through your JS and SASS files to check for any errors.

## What's in the Package?
```
infiniteimaginations/
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
    │   │   │   ├── doT.min.js
    │   │   │   ├── ScrollToPlugin.min.js
    │   │   │   ├── TimelineMax.min.js
    │   │   │   └── TweenMax.min.js
    │   │   ├── jquery.lazyload.js
    │   │   ├── jquery.mCustomScrollbar.js
    │   │   ├── jquery.visible.js
    │   │   ├── jRespond.js
    │   │   └── scrollMonitor.js
    │   ├── vendor/
    │   │   ├── jquery-1.11.3.min.js
    │   │   └── modernizr.js
    │   └── main.js
    ├── _scss/
    │   ├── common/
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
        |   └── index.php
        ├── images/
        ├── includes/
        |   ├── footer.php
        |   ├── header.php
        |   └── primary-nav.php
        ├── list/
        |   └── index.php
        ├── material-design/
        |   └── index.php
        ├── standard/
        |   └── index.php
        └── index.php
```
### What Goes Where
`_fonts/` - Downloaded webfonts are placed here.

`_icomoon/` - Downloaded custom font icons are placed here.

`_images/` - Images used across the website are placed here.

`_scripts/plugins/` - Place all plugin files in this folder.

`_scripts/plugins/minified/` - Place all minified files in this folder.

`_scripts/vendor/` -

`_scss/` - All SCSS stylesheets.

`_scss/common/` - Stylesheets that are commonly used through the entire project.

`_scss/components/` - Stylesheets broken down to components for easy modification.

`styles/` - Stylesheets from plugins are placed here.  **Note:** You must update `header.php` and link the CSS file.  CSS in this folder will not be concatincated with the ones you have created.

`templates/` - All created pages for the website goes here.

**Note:** I placed `_delete` files in empty folders so Git will push the folders to the repo.  You can delete these files onces you have set up the boilerplate.

### What Is Reponsible For What
`_scripts/modules/rr.mobileMenu.js` - Where the mobile menu is initialized.

`_scripts/modules/rr.tableScrollbar.js` - Where the table printing is initialized.

`_scripts/plugins/minified/ScrollToPlugin.min.js` - Responsible for scrolling the page while using TweenMax.  Dependent on TweenMax.

`_scripts/plugins/minified/TimelineMax.min.js` - Responsible for animating the menu icon on mobile.  Dependent on TweenMax.

`_scripts/plugins/minified/TweenMax.min.js` - Responsible for all cool JS animation.

`_scripts/plugins/jRespond.js` - Creating breakpoints via JavaScript to enable/disable any plugin needed.

`_scss/common/_defaults.scss` - Normalizing your HTML build from `normalize.css` and HTML5 Boilerplate

`_scss/common/_fonts.scss` - Place all CSS webfonts in this file.

`_scss/common/_mixins.scss` - Majority of long coding techniques for cross-browser compatibilty is in this file.  Have a look and it will make your coding life much better.

`_scss/common/_vars.scss` - Common variables that will be used across your SCSS files.  Breakpoints, colors and column numbers can be edited here.

`_scss/_desktop.scss` - Styles for desktop only.

`_scss/_tablet.scss` - Styles for tablet only.

`_scss/main.scss` - Styles from mobile that can cascade to .desktop.

`_scss/ie.scss` - IE8 Specific CSS fixes

## Mobile Responsive Tables
### Problem
Tables with large number of columns and responsive websites don't mix well.  The majority's solution is to wrap the `table` with a div and assign an `overflow-x: scroll` property to allow the users swipe left and right.  But users still can't get a glimpse or an overview of the entire table.

### A Possible Solution
The framework will wrap all tables and create a button as a call to action to "View table".  Once the user taps on the button, it will open into a new window with the table only.  Users have now the ability to view the table in their mobile phones regardless of the manufacturer and or operating system. They can pinch to zoom in or out and swipe in any direction.


### Mobile Menu  (jquery.mobileMenu) ([demo](http://codepen.io/oninross/pen/aOpmqb))
```html
<div id="primary-nav">
    <nav class="nav" role="navigation">
        <div class="wrap">
            <h1>
                <a href="/">Master Builder</a>
            </h1>
        </div>

        <ul class="lvl1">
            <li>
                <a href="#" class="no-link"><span>Level 1</span></a>
                <ul class="lvl2">
                    <li><a href="/standard/"><span>Standard Content</span></a></li>
                    <li><a href="/grid/"><span>Grid System</span></a></li>
                    <li>
                        <a href="#"><span>Level 2</span></a>
                        <ul class="lvl3">
                            <li><a href="#"><span>Level 3</span></a></li>
                            <li><a href="#"><span>Level 3</span></a></li>
                            <li><a href="#"><span>Level 3</span></a></li>
                            <li><a href="#"><span>Level 3</span></a></li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</div>
```
You **must** follow the markup in order for the plugin to work that it is designed to be.  If one element or class is missing from the markup, the plugin might not work properly.  This plugin currently supports up to 3 levels only.

Add `.no-link` to `a` tags if it will not lead to anywhere.  This way when a user clicks on the link, the dropdown (if available) will open.

### IE9 Placeholder Fallback
For all `input[type="text"]` tags that you want to use the `placeholder` property, add a `placeholder` attribute with the desired placeholder text.  JS will do the rest.

### Image Background Cover
Add `.backstretch` on the `div` that you wish to have the image to have a `background: cover` property.  Then add data attribute named `data-background` with the path of the the image.  JS will do the rest.

### Lazy Load Images
`<img>` tags must have the class `lazy` attached to it and a data attribute named `data-original` containing the path of the image.  JS will do the rest.

## Issues, Bugs or Feature Requests
If you found any bugs, would like to contribute, have comments or suggestions, head down to the [issues section](https://github.com/oninross/infiniteimaginations/issues) and log it in.  I will be more than happy to discuss it.

## Credits
[Ang Ziwei](http://www.bitneko.com/) for creating the gruntfile.

[GreenSock](http://greensock.com/) for making animating so much easier.

## License
Copyright 2016 [Infinite Imaginations](http://www.infiniteimaginations.co/#/hello/)

Licensed under the MIT License
# Website Performance Optimization portfolio

### Check out my Optimized Website: [click me!!](https://nefeline.github.io/frontend-nanodegree-mobile-portfolio/)

### Check out the website performance at [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnefeline.github.io%2Ffrontend-nanodegree-mobile-portfolio%2F&tab=desktop)

#### List of optimizations:

* Optimizations made to views/js/main.js:
	- (PS: To see the developer version of main.js go to 01_source/js/main.js);
	- Efficiency improvements in the changePizzaSizes function (line 451);
	- Frame rate improvements in updatePositions function (line 512).
* Gulp:
	- The minification of CSS, JS, html and image optimizations were made automatically with Gulp.
	- Source file = 01_source
	- Destination file = 02_optimized
	- The files inside 01_source and 02_optimized include the scripts, stylesheets and images from the main Webpage and from the views folder.
	- Task runner:
		* gulp styles: minify all CSS files;
		* gulp scripts: minify all JS files;
		* gulp html: minify all HTML files;
		* gulp images: minify images;
		* gulp: run all of the tasks listed above and watch for file changes.
	- I didn't want to concatenate the files in this project, so I just commented the concat code lines inside gulpfile.js
* JS Optimizations:
	- Extra attribute "async" added on the google-analytics script tag so it won't block the rendering path.
* CSS Optimizations:
	- style.css replaced with inline minified CSS;
	- CSS minified with gulp-minify-css;
	- The media query inside style.css was moved to a new stylesheet (portrait.css) and included on index.html with a media attribute (media="orientation:portrait"), so it will only be used when the device is a phone in portrait orientation.
	- Media attribute added to print.css (media="print"), so it will only be used for print.
	- Google fonts link updated and moved to the bottom of index.html to prevent it to block the rendering path.
* Images Optimizations:
	- Images were resized to fit the page but still keep the quality;
	- Images were minified with gulp-imagemin.
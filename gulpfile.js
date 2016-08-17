//Directories
var cssSrc = './01_source/css/*.css';
var cssDst = './02_optimized/css/';
var jsSrc = './01_source/js/*.js';
var jsDst = './02_optimized/js/';
var htmlOrigin = './01_source/*.html';
var htmlDest = './02_optimized';

//Plugins
var gulp  = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

// default gulp task
gulp.task('default', ['images', 'html', 'scripts', 'styles'], function() {
	// watch for HTML changes
  gulp.watch(htmlOrigin, function() {
    gulp.run('html');
  });

  // watch for JS changes
  gulp.watch(jsSrc, function() {
    gulp.run('scripts');
  });

  // watch for CSS changes
  gulp.watch(cssSrc, function() {
    gulp.run('styles');
  });
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src([cssSrc])
    // .pipe(concat('style.css'))
    // .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(cssDst));
});
// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src([jsSrc])
    // .pipe(concat('perfmatters.js'))
    // .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest(jsDst));
});
// minimifica paginas HTML novas ou modificadas
gulp.task('html', function() {
  var htmlSrc = htmlOrigin,
      htmlDst = htmlDest;

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});
// minimifica novas imagens
gulp.task('images', function() {
  var imgSrc = './01_source/img/**/*',
      imgDst = './02_optimized/img';
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});
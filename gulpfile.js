var gulp = require('gulp');
var uglifyJS = require('gulp-uglify');
var concatJS = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-clean-css');

gulp.task('js', function() {
  return gulp.src(['assets/js/flickity.pkgd.js',
                   'assets/js/request.js',
                   'assets/js/currency.js',
                   'assets/js/products.js',
                   'assets/js/main.js'])
  .pipe(concatJS('main.js'))
  .pipe(uglifyJS())
  .pipe(gulp.dest('public/js'))
});

gulp.task('css', function() {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/css'));
});

gulp.task('default', function() {
  // code here
});

var gulp = require('gulp');
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var less = require('gulp-less');
var prefixer = require('gulp-autoprefixer');
var rev = require('gulp-rev');



gulp.task('clean', function () {
    return gulp.src(['./build', './dist'], {read: false})
        .pipe(clean())
});


gulp.task('less', ['clean'], function () {
    return gulp.src([
        './node_modules/normalize.css/*.css',
        './src/less/*.less'
    ])
        .pipe(less())
        .pipe(prefixer('last 2 versions', 'ie 9'))
        .pipe(gulp.dest('./dist/css'))
        ;
});


gulp.task('babel', ['less'], function () {
    return gulp.src('./src/js/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./build'))
});


gulp.task('browserify', ['babel'], function() {
    return gulp.src('./build/Application.js')
        .pipe(browserify())
        .pipe(sourcemaps.init())
        .pipe(rename('dist.js'))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dist/js'))
    ;
});


gulp.task('copy-html', ['browserify'], function() {
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
});


gulp.task('watch', function () {
    return watch('./src/**/*', function () {
        gulp.start('default');
    });
});


gulp.task('default', ['babel', 'browserify', 'copy-html']);

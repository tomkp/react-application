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
var revReplace = require('gulp-rev-replace');



gulp.task('clean', function () {
    return gulp.src(['./build', './dist'], {read: false})
        .pipe(clean())
});


gulp.task('less', ['clean'], function () {
    return gulp.src('./src/less/*.less')
        .pipe(less())
        .pipe(prefixer('last 2 versions', 'ie 9'))
        //.pipe(rev())
        //.pipe(gulp.dest('./dist/css'))
        //.pipe(rev.manifest())
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
        //.pipe(rev())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('./dist/js'))
        //.pipe(rev.manifest())
        //.pipe(gulp.dest('./dist'))
    ;
});


//gulp.task('rev', function() {
//   return gulp.src(['./dist/css/*', './dist/js/*'], {base: './dist'})
//        //.pipe(gulp.dest('./dist'))  // copy original assets to build dir
//        .pipe(rev())
//        .pipe(gulp.dest('./dist'))  // write rev'd assets to build dir
//        .pipe(rev.manifest())
//        .pipe(gulp.dest('./dist')); // write manifest to build dir
//});


gulp.task('copy-html', ['browserify'], function() {
    return gulp.src('./src/index.html')
        //.pipe(revReplace())
        .pipe(gulp.dest('./dist'))
});


gulp.task('watch', function () {
    return watch('./src/**/*', function () {
        gulp.start('default');
    });
});


gulp.task('default', ['babel', 'browserify', 'copy-html']);

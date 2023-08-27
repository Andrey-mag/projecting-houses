const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');
const watch = require('gulp-watch');


exports.less = function () {
    return gulp.src('./style/*.less')
        .pipe(less())
        .pipe(concatCss("main.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
};

exports.watch = function () {
gulp.watch("./style/*less", gulp.series("less"))
};

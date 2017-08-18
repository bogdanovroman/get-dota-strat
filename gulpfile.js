var gulp = require('gulp');
var sass = require('gulp-sass');
var base64 = require('gulp-base64');
var cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    gulp.src('public/scss/*.scss')
        .pipe(sass())
        .pipe(base64())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', ['scss'], function() {
    gulp.watch('public/scss/**/*.scss', ['scss']);
});

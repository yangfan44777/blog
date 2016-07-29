var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src('./_sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
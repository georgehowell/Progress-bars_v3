var gulp = require('gulp');
var babel = require('gulp-babel');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

// var myFiles = [
//     './js/*.js'
// ]


gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./dist/css'))
})


// gulp.task('js', function () {
//     return gulp.src(myFiles)
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(concat('app.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist/js'));
// })


gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
    // gulp.watch('./js/*.js', gulp.series('js'));
});


gulp.task('default', gulp.series('sass',  'watch'));
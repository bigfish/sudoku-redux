
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', ['css'], function () {
    
    browserSync.init({
        server: "./",
        port: 8080
    });

    gulp.watch("css/*.css", ['css']);
    gulp.watch(["index.html", "js/main.js", "js/**/*.js"]).on('change', browserSync.reload);
});


gulp.task('css', function () {
    return gulp.src("css/*.css")
    .pipe(browserSync.stream());
});

gulp.task('default', ['dev', 'css'])

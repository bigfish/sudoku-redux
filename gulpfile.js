
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('dev', ['css'], function () {
    
    browserSync.init({
        proxy: "localhost:9080"
    });

    gulp.watch("css/*.css", ['css']);
    //gulp.watch(["index.html", "js/main.js", "js/**/*.js"]).on('change', browserSync.reload);
});

browserSync.emitter.on('service:running', function (data) {
    console.log(data.options.get('snippet'));
});

gulp.task('css', function () {
    return gulp.src("css/*.css")
    .pipe(browserSync.stream());
});

gulp.task('default', ['dev', 'css'])

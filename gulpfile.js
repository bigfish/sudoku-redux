
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

var spawn = require('child_process').spawn;

gulp.task('jspm_hot_reloader', function () {
    
    //start jspm-hot-reload server
    var child = spawn('node', [ './jspm-hot-reloader.js' ]);

    child.stdout.on('data', function (data) {
        console.log('jspm-hot-reloader: ' + data);
    });

    child.stderr.on('data', function (data) {
        console.error('jspm-hot-reloader: ' + data);
    });
});

gulp.task('dev', ['jspm_hot_reloader', 'css'], function () {
    browserSync.init({
        proxy: "localhost:9080"
    });

    gulp.watch("src/css/*.css", ['css']);
    gulp.watch(["src/index.html", "src/js/main.js"]).on('change', browserSync.reload);
});

browserSync.emitter.on('service:running', function (data) {
    console.log(data.options.get('snippet'));
});

gulp.task('css', function () {
    return gulp.src("src/css/*.css")
    .pipe(browserSync.stream());
});

gulp.task('default', ['dev', 'css']);

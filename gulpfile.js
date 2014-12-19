var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

// Static server.
gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './prod/',
      index: "index.html",
      proxy: "victor.gouteyron",
      logLevel: "debug",
      logPrefix: "Project : "
    },
    port: 8080
  });
});

var twig = require('gulp-twig');
gulp.task('twig', function(){
    return gulp.src('dev/views/*.twig')
               .pipe(twig({debugInfo: true}))
               .pipe(gulp.dest('prod'))
               .pipe(reload({stream: true}));
});


var sass = require('gulp-sass');
gulp.task('sass', function () {
    return gulp.src('dev/assets/stylesheets/**/*.scss')
               .pipe(sass({debugInfo: true}))
               .pipe(gulp.dest('prod/assets/stylesheets'))
               .pipe(reload({stream: true}));
});

gulp.task('browserify-scripts', function() {
    // Single entry point to browserify
    var browserify = require('browserify');
    var source     = require('vinyl-source-stream');

    browserify({
        entries: ['./dev/assets/scripts/node_modules/main.js'],
        extensions: ['.hbs'],
        transform: ['hbsfy']
    })
    .bundle().on('error', console.log)
    .pipe(source('main.js'))
    .pipe(gulp.dest('prod/assets/scripts/'))
    .pipe(reload({stream: true}));
});


var del = require('del');
gulp.task('clean:sass', function (cb) {
  return del([
    'prod/assets/stylesheets'
  ], cb);
});



gulp.task('default', ['browserify-scripts', 'sass', 'twig', 'browser-sync'], function () {
    gulp.watch("dev/assets/stylesheets/**/*.scss", ['clean:sass', 'sass']);
    gulp.watch("dev/views/**/*.twig", ['twig']);
    gulp.watch("dev/assets/scripts/**/*.js", ['browserify-scripts']);
});
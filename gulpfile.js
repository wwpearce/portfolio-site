// require gulp module
let gulp = require("gulp");
let webpack = require('webpack-stream');

let OUT_DIR = './build';

// create a task to copy static html to the build folder
gulp.task('copy:html', () =>
gulp.src('./app/template/index.html')
  .pipe(gulp.dest(OUT_DIR)));

// copy css to build folder
gulp.task('copy:css', () =>
gulp.src('./app/template/style.css')
  .pipe(gulp.dest(OUT_DIR)));

// if any assets are present, copy them to the build folder as well
gulp.task('copy:assets', () =>
gulp.src('./app/assets/*')
  .pipe(gulp.dest(OUT_DIR + '/assets/')));

gulp.task('webpack', () => {
  return gulp.src('build/')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
  });

gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'webpack']);

let gulp = require("gulp");
let webpack = require('webpack-stream');

gulp.task('webpack', () => {
  return gulp.src('build/')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
});

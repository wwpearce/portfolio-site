const gulp = require("gulp");
const webpack = require('webpack-stream');
const sass = require('gulp-sass');

const OUT_DIR = './build';

sass.compiler = require('node-sass');

gulp.task('copy:html', () =>
  gulp.src('./app/index.html')
    .pipe(gulp.dest(OUT_DIR)));

gulp.task('scss', () =>
  gulp.src('./app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css')));

gulp.task('copy:css', ['scss'], () =>
  gulp.src('./app/css/style.css')
    .pipe(gulp.dest(OUT_DIR)));

gulp.task('copy:assets', () =>
  gulp.src('./app/assets/*')
    .pipe(gulp.dest(OUT_DIR + '/assets/')));

gulp.task('webpack', () =>
  gulp.src('build/')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/')));

gulp.task('default', ['copy:html', 'copy:css', 'copy:assets', 'webpack']);

gulp.task('watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['default']);
});

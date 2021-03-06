const gulp = require("gulp");
const webpack = require('webpack-stream');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const shell = require('gulp-shell');
const imagemin = require('gulp-imagemin');

const OUT_DIR = './build';
const prod_bucket = 's3://billwpearce.com/';
const staging_bucket = 's3://billwpearce.com.staging/';

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
  gulp.src(['./app/assets/**/*', '!./app/assets/images/*'])
  .pipe(gulp.dest(`${OUT_DIR}/assets/`)));

gulp.task('webpack', () =>
  gulp.src('build/')
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest('build/')));

gulp.task('serve', () =>
  browserSync.init({
    server: OUT_DIR
  }));

gulp.task('images', () =>
  gulp.src('./app/assets/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest(`${OUT_DIR}/assets/images/`)));

gulp.task('watch', ['serve'], () => {
  gulp.watch('./app/scss/**/*.scss', ['copy:css']).on('change', browserSync.reload);
  gulp.watch(['./app/assets/**/*', '!./app/assets/images/*'] ['copy:assets']).on('change', browserSync.reload);
  gulp.watch('./app/assets/images/*' ['images']).on('change', browserSync.reload);
  gulp.watch('./app/index.html', ['copy:html']).on('change', browserSync.reload);
  gulp.watch('./app/js/**/*.js', ['webpack']).on('change', browserSync.reload);
});

gulp.task('build', ['copy:css', 'copy:assets', 'images', 'copy:html', 'webpack']);
gulp.task('upload:staging', shell.task(`aws s3 cp build ${staging_bucket} --recursive`))
gulp.task('upload:prod', shell.task(`aws s3 cp build ${prod_bucket} --recursive`))
gulp.task('default', ['build', 'watch']);

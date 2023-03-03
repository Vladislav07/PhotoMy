const {src, dest, series, watch} = require('gulp');
const gp = require('gulp-path');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();



const renderHTMLFromPug = () => {
  return src('./src/*.pug')
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
};


exports.default = renderHTMLFromPug;

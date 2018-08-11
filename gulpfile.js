const gulp = require('gulp');
const concat = require('gulp-concat');
const newer = require('gulp-newer');
const sourcemaps = require('gulp-sourcemaps');
const rm = require('gulp-rm');
const uglify = require('gulp-uglify');

gulp.task('clean', () =>
  gulp.src(['dist/**/*', 'src/**/*.pcss.d.ts'], { read: false })
    .pipe(rm())
);

// Sadly this has to be done by hand because the order is important and also some modules package.json do not point to the best file for us
const sources = [
  'node_modules/angular/angular.js',
  'node_modules/@uirouter/core/_bundles/ui-router-core.js',
  'node_modules/@uirouter/angularjs/release/ui-router-angularjs.js'
]

// Copy dependencies to ./public/libs/
gulp.task('lib', () =>
  gulp.src(sources, { base: '.' })
    .pipe(newer('./dist/lib.js'))
    .pipe(sourcemaps.init())
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'))
);

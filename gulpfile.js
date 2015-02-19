'use strict';

var gulp = require('gulp');

var gulp1 = require('./proj1/gulpfile.js');
var gulp2 = require('./proj2/gulpfile.js');

gulp.task('default', function () {
  console.log(gulp1);
  console.log(gulp2);
  gulp1.gulp.start('task:one');
  gulp2.gulp.start('task:one');
});


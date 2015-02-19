'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', function() { 
  gulp.start('task:one');
  gulp.start('task:two');
});

exports.gulp = gulp;

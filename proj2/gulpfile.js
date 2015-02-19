'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', function() { 
  gulp.start('task:one');
  gulp.start('task:two');
  console.log('Finished default task, project two');
});

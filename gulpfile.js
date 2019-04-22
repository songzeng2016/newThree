var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
  return gulp.src('src/html/**.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('src/dist'));
});

gulp.task('watch', gulp.series('fileinclude', function() {
  gulp.watch('src/html/**.html', gulp.series('fileinclude'));
}));
var clean = require('gulp-clean');

module.exports = function(gulp, env) {

  gulp.task('clean:vendor', function () {
    return gulp.src( env.config.paths.vendor, {read: false})
      .pipe(clean());
  });

  gulp.task('clean:bundle', function () {
    return gulp.src( env.config.paths.bundle, {read: false})
      .pipe(clean());
  });

  gulp.task('clean', ['clean:vendor', 'clean:bundle']);

};
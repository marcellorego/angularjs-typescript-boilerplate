var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

module.exports = function(gulp, env) {

  gulp.task('tsc', function () {
      return gulp.src(env.config.paths.tsSrc + '**/*.ts')
          .pipe(ts({
              noImplicitAny: true,
              out: 'bundle.js'
          }))
          .pipe(gulp.dest(env.config.paths.dev + 'js'));
  });

}
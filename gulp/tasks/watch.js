import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
  return gulp.watch(config.templates.watch, ['jade']);
});

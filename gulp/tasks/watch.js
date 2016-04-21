import gulp from 'gulp';
import config from '../config';

gulp.task('watch', () => {
  gulp.watch(config.templates.watch, ['jade']);
  gulp.watch(config.copy, ['copy']);
});

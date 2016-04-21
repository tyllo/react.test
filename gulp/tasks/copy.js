import gulp from 'gulp';
import errorHandler from '../helpers/errorHandler';
import config from '../config';

gulp.task('copy', () => gulp
  .src(config.copy)
  .pipe(errorHandler())
  .pipe(gulp.dest(config.dest))
);


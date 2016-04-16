import gulp from 'gulp';
import errorHandler from '../helpers/errorHandler';
import jade from 'jade';
import gulpJade from 'gulp-jade';

import config from '../config';

const LOCALES = { config };

gulp.task('jade', () => gulp
  .src(config.templates.src)
  .pipe(errorHandler())
  .pipe(gulpJade({
    locals: LOCALES,
    jade: jade,
    pretty: config.isDebug,
  }))
  .pipe(gulp.dest(config.dest))
);

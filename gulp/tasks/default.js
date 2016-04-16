import gulp from 'gulp';
import connect from './connect';
import config from '../config';

gulp.task('default', ['clean', 'jade', 'webpack', 'connect']);

gulp.watch(config.templates.watch, ['jade', connect.reload]);

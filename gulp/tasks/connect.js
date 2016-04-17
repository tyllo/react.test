import gulp from 'gulp';
import connect from 'gulp-connect';
import config from '../config';

gulp.task('connect', () =>
  connect.server({
    root: [config.dest],
    livereload: true,
    port: config.server.port,
  })
);

export default connect;

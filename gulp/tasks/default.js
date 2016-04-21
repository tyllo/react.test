import gulp from 'gulp';

gulp.task('default', ['clean', 'copy', 'jade', 'watch', 'webpack-dev-server']);

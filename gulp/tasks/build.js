import gulp from 'gulp';

gulp.task('build', ['clean', 'copy', 'jade', 'webpack']);

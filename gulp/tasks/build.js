var gulp = require('gulp');

gulp.task('build', ['browserify', 'markup']);
gulp.task('copy', function() {
    return gulp.src(['images/**/*'])
        .pipe(gulp.dest('build/images'));
});

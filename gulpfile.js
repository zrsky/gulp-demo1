var gulp = require('gulp');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
// 创建一个任务
// gulp.task('copy',function(){
// 	gulp.src('./src/demo.less')
// 	.pipe(gulp.dest('./dist/'))
// });
gulp.task('less',function(){
	gulp.src('./src/*.less')
	.pipe(less())

	.pipe(cssnano())
	.pipe(gulp.dest('./dist/css/'));

});

gulp.task('concat',function(){
	gulp.src('./dist/css/*.css')
	.pipe(concat('style.css'))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css/'));
});

gulp.task('watch',function(){
	gulp.watch('./src/*.less',['less']);
	gulp.watch('./dist/css/*.css',['concat']);

});

gulp.task('connect',function(){
	connect.server({
		port:80,
		root:'dist',
		livereload: true,
	});
});
 
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});
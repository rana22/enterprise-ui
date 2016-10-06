var gulp			= require('gulp'),
	sass			= require('gulp-sass'),
	uglify			= require('gulp-uglify'),
	connect			= require('gulp-connect'),
	concat			= require('gulp-concat'),
	path			= require('path'),
	cassnano		= require('gulp-cssnano');
	sourcemaps 		= require('gulp-sourcemaps');


	var config ={
		appName: 'enterprise',
		sources:{
			scripts:['bower_components/*/*.js',
					'bower_components/*/*.min.js'
					],
			fonts:[],
			style:[],
			assests:[],
			views:['app/core/views/index.html'],
			test:[]
		} 
	};

	var localServerProt = 9000;

gulp.task('connect', function(){
	connect.server({
		root: "app/build",
		livereload: true,
		port: localServerProt
	});
});

gulp.task('watch', ['build'], function(){
	gulp.watch([config.sources.scripts], ['build']);
});

gulp.task('build-js', function(){
	return gulp.src(config.sources.scripts)
	.pipe(sourcemaps.init())
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/build/scripts'))
	.pipe(connect.reload());

});


gulp.task('copy-html', function(){
	return gulp.src(config.sources.views)
	.pipe(gulp.dest('app/build'))
});

gulp.task('build', ['build-js', 'copy-html']);

gulp.task('serve', ['watch' , 'connect'])






var gulp			= require('gulp'),
	sass			= require('gulp-sass'),
	uglify			= require('gulp-uglify'),
	connect			= require('gulp-connect'),
	concat			= require('gulp-concat'),
	path			= require('path'),
	cassnano		= require('gulp-cssnano');
	sourcemaps 		= require('gulp-sourcemaps');
	Server 			= require('karma').Server;


	var config ={
		appName: 'enterprise',
		sources:{
			scripts:['bower_components/angular/angular.js',
					'bower_components/angular-ui-route/release/angular-ui-route.js',
					'bower_components/angular-ui-grid/ui-grid.js',
					'app/app.module.js',
					'app/app.config.js'

					],
			fonts:[],
			style:[],
			assests:[],
			views:['app/core/views/index.html'],
			test:['app/build/all.js',
				  'bower_components/angular-mocks/angular-mocks.js',
					'bower_components/jquery/dist/jquery.js',
					'bower_components/jasmine-jqeury/*.js',
					'test/unit_test/*/*.js',
					'test/unit_test/*/*.*.js']
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

gulp.task('build-test', function(){
	return gulp.src(config.sources.test)
	.pipe(sourcemaps.init())
	.pipe(concat('all.unit.test.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('test/build'));
});

gulp.task('unittest', function(done){
	new Server({
		configFile: path.join(__dirname, 'test/karma.conf.js'),
		singleRun :false,
		autoWatch : true,
		reporters: ['mocha']
	}, done).start();
});

gulp.task('build', ['build-js', 'copy-html']);

gulp.task('serve', ['watch' , 'connect'])






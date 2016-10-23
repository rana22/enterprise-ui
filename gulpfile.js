var gulp			= require('gulp'),
	sass			= require('gulp-sass'),
	uglify			= require('gulp-uglify'),
	connect			= require('gulp-connect'),
	concat			= require('gulp-concat'),
	path			= require('path'),
	cssnano			= require('gulp-cssnano');
	sourcemaps 		= require('gulp-sourcemaps');
	Server 			= require('karma').Server;


	var config ={
		appName: 'enterprise',
		sources:{
			scripts:['bower_components/angular/angular.js',
					'bower_components/angular/angular.min.js',
					'bower_components/angular-ui-router/release/angular-ui-router.js',
					'bower_components/angular-ui-grid/ui-grid.js',
					'app/app.module.js',
					'app/app.config.js',
					'app/services/*.module.js',
					'app/*/scripts/*.module.js',
					'app/services/*.routes.js',
					'app/*/scripts/*.directive.js',
					'app/services/*.constants.js',
					'app/services/*.js',
					'app/grid/scripts/*.module.js',
					'app/grid/scripts/*.directive.js'
					],
			fonts:[],
			style:['bower_components/bootstrap-sass/stylesheets/_bootstrap.scss',
					'app/core/styles/app.scss'],
			assets:['app/core/assets/*.svg'],
			index:['app/core/views/index.html'],
			views:['app/dashboard/views/dashboard.html',
					'app/header/views/header.html',
					'app/footer/views/ent-footer.html'],
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

//generate css from sass
gulp.task('build-css', function(){
	return gulp.src(config.sources.style)
	.pipe(sourcemaps.init())
	.pipe(sass())
	// .pipe(cssnano())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/build/style'))
	.pipe(connect.reload());
});


gulp.task('copy-index', function(){
	return gulp.src(config.sources.index)
	.pipe(gulp.dest('app/build'))
});

gulp.task('copy-assets', function(){
	return gulp.src(config.sources.assets)
	.pipe(gulp.dest('app/build/assets'))
});

gulp.task('copy-views', function(){
	return gulp.src(config.sources.views).
	pipe(gulp.dest('app/build/views'))
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

gulp.task('build', ['build-js', 'copy-index', 'copy-views', 'build-css','copy-assets']);

gulp.task('serve', ['watch' , 'connect'])






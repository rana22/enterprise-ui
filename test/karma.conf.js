'use strict';

var path = require('path');

module.exports = function(config){
	config.set({
		frameworks: ['jasmine', 'angular-filesort'],
		files:[
			path.dirname(require.resolve('jasmine-core')) + '/jasmine-core/jasmine.js',
				'build/all.unit.tests.js',
				{pattern:'mock/*.json', watched: true, served: true, included: false}
				
		],
		plugins:[
				'karma-phantomjs-launcher',
				'karma-angular-filesort',
				'karma-jasmine',
				'karma-ng-html2js-preprocessor',
				'karma-mocha-reporter',
				'karma-chrome-launcher',
				'karma-htmlfile-reporter'
		],
		browsers: process.env.TRAVIS ? ['Firefox']: ['Chrome'],
		autoWatch: true
	});
}
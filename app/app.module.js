(function(){
'use strict';

angular
	.module('enterprise',
			['ui.router', 
			'enterprise-service',
			'enterprise-grid',
			'entprise-header',
			'ent-footer',
			'ent-dashboard']);
})();


import Vue from 'vue';
import Router from 'vue-router';

import { defaultRedirectRouter, routerMode, routerBase, isPermissionCheck } from './config';
import { baseRoutes } from './baseRouter';

Vue.use(Router);

const router = new Router({
	mode: routerMode,
	base: routerBase,
	routes: baseRoutes,
	scrollBehavior: () => ({
		y: 0
	})
});

export default router;

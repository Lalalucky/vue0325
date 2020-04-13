import { resolve } from 'url';

//  基础路由
export let baseRoutesConfig = [
	{
		path: '/login',
		name: 'Login',
		component: resolve => require(['@/views/Login/index.vue'], resolve)
	},
	{
		path: '/error',
		name: 'error',
		children: [
			{
				path: '/404',
				name: '404',
				component: resolve => require(['@/views/Error/404.vue'], resolve)
			}
		]
	}
];

export const defaultRedirectRouter = {
	path: '*',
	redirect: '/login'
};

export const routerMode = process.env.HISTORY || 'history';

export const routerBase = process.env.LOCATION_FORST || '';

export const isPermissionCheck = () => {
	let processEnv = process.env.NODE_ENV;
	if (processEnv !== 'development') return false;
	return true;
};

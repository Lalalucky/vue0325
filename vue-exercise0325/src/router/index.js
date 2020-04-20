import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress'; // progress 进度条
import { defaultRedirectRouter, routerMode, routerBase, isPermissionCheck } from './config';
import { baseRoutes } from './baseRouter';
import store from '@/store/index';
import { whiteList } from '@/common/config.js'; // 免登陆白名单
import { getCookies } from '@/utils/cookies'; // sid
const getSid = getCookies('sid');

Vue.use(Router);

const router = new Router({
	mode: routerMode,
	base: routerBase,
	routes: baseRoutes,
	scrollBehavior: () => ({
		y: 0
	})
});

router.beforeEach((to, from, next) => {
	NProgress.start();
	// 如果开启了免登陆，或者是这路径在免登陆白名单中，不拦截
	if (!isPermissionCheck || whiteList.indexOf(to.path)) {
		next();
		return;
	} else {
		/**
		 * 其他需要进行授权校验
		 * · 用户信息通过 sid|token ，首先需要判断sid是否存在，不存在直接跳转到默认页面
		 * · 如果已经存在sid了,这时候需要判断菜单的路由是否已经被添加到路由中
		 * 	-- 若果是第一次进入页面，或者是刷新、登录的操作，路由数只存在基础路由信息，这时候需要 addRoutes 去添加路由
		 * 	-- 若用户已经登录跳转到其他页面再次触发 beforeEach ，这时候路有树中已经存在用户的菜单路由信息，这时候就不用再次添加路由数据了
		 *  -- 这样做的好处在于如果我们刷新页面。store 里面的数据会被重置，这时候判断是否加载过菜单路由，从而在每次刷新页面的时候，自动请求用户数据放在store中
		 */
		if(getSid){
			if(to.path=='/login'){
				next({path:'/'})
			}else if(to.fullPath=='/'){
				next({path:'/home'})
			}else{
				if(!store.getters[])
			}
		}
	}
});

export default router;

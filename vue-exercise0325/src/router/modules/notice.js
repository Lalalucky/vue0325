const meta = { requiresAuth: false };

// ---------------------------------------
// 公告管理有关页面
//  - 公告列表
//  - 创建一条公告
// --------------------------------------
export default {
	path: '/notice',
	name: 'notice',
	meta,
	// redirect: { name: 'notice' },
	component: resolve => require(['@/views/notice/index.vue'], resolve),
	children: [
		{
			path: 'manage',
			name: `notice-manage`,
			component: resolve => require(['@/views/notice/manage.vue'], resolve),
			meta: { ...meta, title: '公告列表' }
		},
		{
			path: 'create',
			name: `notice-create`,
			component: resolve => require(['@/views/notice/create.vue'], resolve),
			meta: { ...meta, title: '创建公告' }
		}
	]
};

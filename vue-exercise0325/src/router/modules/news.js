const meta = { requiresAuth: false };

// ---------------------------------------
// 新闻管理有关页面
//  - 新闻列表
//  - 创建一条新闻
// --------------------------------------
export default {
	path: '/news',
	name: 'news',
	meta,
	redirect: { name: 'news-manage' },
	component: resolve => require(['@/views/news/index.vue'], resolve),

	children: [
		{
			path: 'manage',
			name: `news-manage`,
			meta: { ...meta, title: '新闻列表' },
			component: resolve => require(['@/views/news/manage.vue'], resolve)
		},
		{
			path: 'create',
			name: `news-create`,
			component: resolve => require(['@/views/news/create.vue'], resolve),
			meta: { ...meta, title: '创建新闻' }
		}
	]
};

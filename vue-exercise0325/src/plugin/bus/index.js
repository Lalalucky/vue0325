export default {
	install(Vue, options) {
		// 处理当前url
		Vue.prototype.$bus = new Vue();
	}
};

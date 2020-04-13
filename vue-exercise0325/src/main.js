import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import '@/scss/index.scss' ;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {
	size: 'small',
	zIndex: 999
});

import router from './router/index.js';
import store from './store';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');

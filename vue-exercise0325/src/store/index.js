import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import base from './modules/base.js';
console.log(base);
export default new Vuex.Store({
	modules: {
		base
	}
});

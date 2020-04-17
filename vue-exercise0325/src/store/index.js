import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import base from './modules/base.js';
import user from './modules/user.js';
export default new Vuex.Store({
	modules: {
		base,
		user
	}
});

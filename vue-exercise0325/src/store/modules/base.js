
export default {
	namespaced: true,
	state: {
		// 默认展示目录
		showAllMenu: true
	},
	getters: {
		g_showAllMenu(state) {
			return state.showAllMenu;
		}
	},
	mutations: {
		s_showAllMenu(state, key) {
			state.showAllMenu = key;
		}
	},
	actions: {
		fnShowAllMenu({ commit, dispatch, state }, key) {
			return new Promise(async resolve => {
        await commit('base/s_showAllMenu', key, { root: true });
        resolve();
			});
		}
	}
};

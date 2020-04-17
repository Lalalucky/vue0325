
export default {
	state: {
		// 默认展示目录
		user:{
      userName:''
    }
	},
	getters: {
		g_showUserName(state) {
			return state.user.userNam;
		}
	},
	mutations: {
		setUserInfo(state, payload) {
			state.userName = {...payload}
		}
	},
	actions: {
		setUserInfo({ commit, dispatch, state }, obj) {
			return new Promise(async resolve => {
        await commit('setUserInfo', obj, { root: true });
        resolve();
			});
		}
	}
};

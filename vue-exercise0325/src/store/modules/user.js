import { setCookies, remove, getCookies } from '@/utils/cookies';
import { pick } from 'lodash';
export default {
	namespaced: true,
	state: {
		userInfo: {
      phoneNo:'',
      nickName:'',
      userId:''
		}
	},
	getters: {
    g_userInfo(state){
      return state.userInfo
    },
		g_showUserName(state) {
			return state.userInfo.userName;
		}
	},
	mutations: {
		setUserInfo(state, payload) {
			state.userInfo = { ...payload };
		}
	},
	actions: {
		setUserInfo({ commit, dispatch, state }, obj) {
			return new Promise(async resolve => {
				await commit('user/setUserInfo', obj, { root: true });
				resolve();
			});
			// commit('setUserInfo',obj)
		}
	}
};

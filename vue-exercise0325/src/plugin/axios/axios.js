import axios from 'axios';
import { Notification } from 'element-ui';
import router from '@/router/index';

// 请求正常时返回的状态码
const COMMON_SUCCESS = '0';
// 没有登录或者登录失效时返回的特定状态码
const LOGIN_SID_INVALID = '10002';

// 一个axios的实例
const service = axios.create({
	baseURL: process.env.BASE_API,
	timeout: 5000
});

// 响应拦截器
service.interceptors.response.use(response => {
	// 返回的data体
	let dataAxios = response.data;
	// 预定好的状态码，解构出来
	const { respCode } = dataAxios;
	if (respCode == COMMON_SUCCESS) {
		return dataAxios;
		// 正常肯定会有状态码出现的，如果没有可能是外部接口
	} else {
		switch (respCode) {
			case COMMON_SUCCESS:
			case 0:
				return dataAxios;
			case LOGIN_SID_INVALID:
				router.push({ path: '/login' });
			default:
				break;
		}
	}
});

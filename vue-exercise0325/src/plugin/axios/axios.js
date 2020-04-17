import axios from 'axios';
import { Notification } from 'element-ui';
// 花式打印控制台日志
import { log } from '@/utils/log';
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
service.interceptors.response.use(
	response => {
		// 返回的data体
		let dataAxios = response.data;
		// 预定好的状态码，解构出来
		const { respCode } = dataAxios;
		if (respCode == COMMON_SUCCESS) {
			return dataAxios;
			// 正常肯定会有状态码出现的，如果没有可能是外部接口
		} else {
			switch (respCode) {
				// case COMMON_SUCCESS:
				case 0:
					return dataAxios;
				// 当用户没有登录，或者登录sid失效
				case LOGIN_SID_INVALID:
					router.push({ path: '/login' });
					break;
				// 后台出错
				case COMMON_SERVER_ERROR:
					errorCreate(`[ code:${COMMON_SERVER_ERROR} ] ${dataAxios.respMsg}:${response.config.url}`);
					break;
				default:
					return dataAxios;
					break;
			}
		}
	},
	error => {
		// 处理http/https的错误状态码，不是respCode
		if (error && error.response) {
			let status = error.response.status;
			switch (status) {
				case 400:
					error.message = '请求错误';
					break;
				case 401:
					error.message = '未授权，请登录';
					break;
				case 403:
					error.message = '拒绝访问';
					break;
				case 404:
					error.message = `请求地址出错:${error.response.config.url}`;
					break;
				case 408:
					error.message = `请求超时`;
					break;
				case 500:
					error.message = `服务器内部错误`;
					break;
				case 501:
					error.message = `服务器未实现`;
					break;
				case 502:
					error.message = `网关错误`;
					break;
				case 503:
					error.message = `服务不可用`;
					break;
				case 504:
					error.message = `网关超时`;
					break;
				case 505:
					error.message = `HTTP版本不受支持`;
					break;
				default:
					break;
			}
			errorLog(error)
			return Promise.reject(error)
		}
	}
);

// 创建错误
function errorCreate(msg) {
	const err = new Error(msg);
	errorLog(err);
	throw err;
}

// 记录错误
function errorLog(err) {
	// 打印到控制台
	if (process.env.NODE_ENV === 'development') {
		log.danger('>>>>>>> Error <<<<<<<');
		console.log(err);
	}
	// 显示提示
	Notification({
		title: '系统错误',
		message: err.message,
		type: 'error',
		duration: 5 * 1000
	});
}

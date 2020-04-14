import Mock from 'mockjs';
import { UrlParas } from './formatQuery.js';
import menuList from './local/menu.js';
const column = [
	{
		label: '首页'
	}
];

// 设置拦截ajax请求的相应时间
Mock.setup({
	timeout: '200-600'
});

let data = Mock.mock('api/get_menu', 'get', {
	status:200,
	data:{
		respCode: 0,
		result: menuList,
		respMsg: '请求成功'
	}
});
export default data 

import Mock from 'mockjs';
import { UrlParas } from '../formatQuery.js';

const column = [
	{
		label: '首页'
	}
];

let data = Mock.mock('api/get_dictionary', 'get', dictionaryJson);

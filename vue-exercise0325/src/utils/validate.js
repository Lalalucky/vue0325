import checkStr from './checkStr.js' ;

let validatePhone = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!checkStr(value, 'phone')) {
		callback(new Error('请输入正确的手机号码!'));
	} else {
		callback();
	}
};

let validateAge = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!checkStr(value, 'positiveNumber')) {
		callback(new Error('请输入正确的年龄!'));
	} else {
		callback();
	}
};
let validateEmail = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!checkStr(value, 'email')) {
		callback(new Error('请输入正确的邮箱地址!'));
	} else {
		callback();
	}
};
let validateIdCard = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!checkStr(value, 'card')) {
		callback(new Error('请输入正确的身份证号码!'));
	} else {
		callback();
	}
};
let validatePostal = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!checkStr(value, 'postal')) {
		callback(new Error('请输入正确的邮政编码!'));
	} else {
		callback();
	}
};
let validatePrice = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (!isPriceNumber(value)) {
		callback(new Error('请输入正确的价格格式(保留两位小数)'));
	} else {
		callback();
	}
};
let validateStrLength = (rule, value, callback) => {
	if (value === '' || value === null || value === undefined) {
		callback();
	} else if (value.length >= 200) {
		callback(new Error('简介必须小于两百字'));
	} else {
		callback();
	}
};

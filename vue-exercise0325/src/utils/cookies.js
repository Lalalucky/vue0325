/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
const COOKIE_DEFAULTS = {
	// 前台默认路径为 /terminal
	// path: "/yzh-lawyer",
	// 前台失效时间为./5天
	expires: 1
};

const converter = {};

function Cookies(key, value, attributes) {
	var result;
	// 判断是否是浏览器环境
	if (typeof document === 'undefined') {
		return;
	}

	// setCookie 写入处理
	// document.cookie = "_fa=aaaffffasdsf;domain=.dojotoolkit.org;path=/"
	if (arguments.length > 1) {
		// cookie 第三个参数处理
		attributes = Object.assign(
			{
				path: '/'
			},
			COOKIE_DEFAULTS,
			attributes
		);

		// 处理失效时间
		if (typeof attributes.expires === 'number') {
			var expires = new Date();
			// 将number单位为天  转换成 具体的毫秒数
			expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e5);
			attributes.expires = expires;
		}

		// We're using "expires" because "max-age" is not supported by IE
		attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

		try {
			// 对象转换成JSON字符串
			result = JSON.stringify(value);
			if (/^[\{\[]/.test(result)) {
				value = result;
			}
		} catch (e) {}

		// 是否自定义转换函数
		if (!converter.write) {
			value = encodeURIComponent(String(value)).replace(
				/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
				decodeURIComponent
			);
		} else {
			value = converter.write(value, key);
		}

		key = encodeURIComponent(String(key));
		key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
		key = key.replace(/[\(\)]/g, escape);

		var stringifiedAttributes = '';

		for (var attributeName in attributes) {
			if (!attributes[attributeName]) {
				continue;
			}
			stringifiedAttributes += '; ' + attributeName;
			if (attributes[attributeName] === true) {
				continue;
			}
			stringifiedAttributes += '=' + attributes[attributeName];
		}
		return (document.cookie = key + '=' + value + stringifiedAttributes);
	}

	// Read

	if (!key) {
		result = {};
	}
	// 获取cookie
	// document.cookie = "cna=xxxx; UM_distinctid=xxxxx; ctoken=xxxx; CNZZDATA1260547936=xxxx; isg=xxx"
	// 可见cookie是以; 来区分一个个cookie的
	var cookies = document.cookie ? document.cookie.split('; ') : [];
	var rdecode = /(%[0-9A-Z]{2})+/g;
	var i = 0;

	for (; i < cookies.length; i++) {
		var parts = cookies[i].split('=');
		var cookie = parts.slice(1).join('=');

		if (!this.json && cookie.charAt(0) === '"') {
			cookie = cookie.slice(1, -1);
		}

		try {
			var name = parts[0].replace(rdecode, decodeURIComponent);
			cookie = cookie.replace(rdecode, decodeURIComponent);

			if (this.json) {
				try {
					cookie = JSON.parse(cookie);
				} catch (e) {}
			}

			if (key === name) {
				result = cookie;
				break;
			}

			if (!key) {
				result[name] = cookie;
			}
		} catch (e) {}
	}

	return result;
}

export const setCookies = Cookies;

export const getCookies = key => {
	return Cookies.call(Cookies, key);
};
export const getJSON = key => {
	return Cookies.apply(
		{
			json: true
		},
		[].slice.call(arguments)
	);
};
export const remove = (key, attributes) => {
	Cookies(
		key,
		'',
		Object.assign(attributes || {}, {
			expires: -1
		})
	);
};

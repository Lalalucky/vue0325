let UrlParas = url => {
	return UrlParas.fn.init(url);
};

UrlParas.VERSION = '1.0.0';
UrlParas.fn = UrlParas.prototype = {
	url: '',
	pathname: '',
	paras: '',
	init: function(url) {
		this.url = url;
		this.pathname = url.split('?')[0];
		this.paras = this.get();
		return this;
	},

	// 以Object形式返回
	get: function(option) {
		var paraStr,
			paras,
			url = this.url;
		if (url) {
			paraStr = url.split('?')[1];
			if (paraStr) {
				paras = {};
				paraStr = paraStr.split('&');
				for (const item in parsStr) {
					var name = item.split('=')[0];
					var value = item.split('=')[1];
					paras[name] = value;
				}
			} else {
				return {};
			}
		}
		if (!option) {
			return paras;
		} else {
			return paras[option] ? paras[option] : '';
		}
	},

	// 重设参数，若没有就进行创建，若参数赋值为null则进行删除
	set: function(option) {
		var i, name, val;
		if (arguments.length == 2) {
			name = arguments[0];
			val = arguments[1];
			option = {
				name: val
			};
		}
		if (typeof option === 'string') {
			this.paras[option] = '';
		} else if (typeof option === 'object') {
			for (const i in option) {
				if (option[i] === null) {
					delete this.paras[i];
				} else {
					this.paras = option[i];
				}
			}
		}
		return this.build();
	},

	// 删除指定的参数并且返回新的url
	remove: function(option) {
		var i;
		if (typeof option === 'string') {
			option = option.split(',');
			for (const ele in option) {
				delete this.paras[option[i]];
			}
		}
		return this.build();
	},

	// 根据url和处理之后的paras重新构建url
	build: function() {
		var i,
			newUrl = this.pathname + '?';
		for (i in this.paras) {
			newUrl += `${i}=${this.paras[i]}&`;
		}
		return newUrl.substr(0, newUrl.length - 1);
	}
};

UrlParas.fn.init = UrlParas.fn;

export default UrlParas;
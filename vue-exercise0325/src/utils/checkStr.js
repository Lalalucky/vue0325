/******************************************
 *  主要是一些类型的检测工具类
 *  如 browser 的浏览器类型检测
 *     type    数据类型检测
 *     card-id 身份证检测
 * 
 * 
 *   一般返回值都是   Boolean 类型  如 checkStr  isBoolean 。。。
 *   复杂的检测 请返回对象类型 格式参考
 *   {
 *      status : 0 - ...,  //请注意所有的成功请用0 其他其用1,2....
 *      msg: '你输入的身份证长度或格式错误'
 *   }
 ******************************************/


export const checkStr = (str, type) => {
  switch (type) {
    case 'plus': //判断是否是正数
      return /^\d+(?=\.{0,1}\d+$|$)/.test(str);
    case 'float':
      return !/^\d+(\.\d+)?$/.test(str); //非负浮点数
    case 'phone': //手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': //座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': //身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'fakePwd': //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[0-9a-zA-Z]{8,16}$/.test(str);
    case 'postal': //邮政编码
      return /^[1-9]\d{5}(?!\d)$/.test(str);
    case 'QQ': //QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': //邮箱
      return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
    case 'money': //金额(小数点2位)
      return /^\d*(?:\.\d{0,2})?$/.test(str);
    case 'complexMoney':
      return /(^\-?[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
    case 'URL': //网址
      return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str);
    case 'IP': //IP
      return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
    case 'date': //日期时间
      return (
        /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      );
    case 'number': //数字
      return /^[0-9]$/.test(str);
    case 'positiveNumber': //正整数
      return /^\+?[1-9][0-9]*$/.test(str);
    case 'nonnegativePositive': //非负整数
      return /^\+?[0-9]*$/.test(str);
    case 'english': //英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': //中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': //小写
      return /^[a-z]+$/.test(str);
    case 'upper': //大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': //HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
}


/**
 * 
 * 
 */
export const isPriceNumber=(_keyword)=>{
  _keyword=_keyword.toString();
  if (
    _keyword == '0' ||
    _keyword == '0.' ||
    _keyword == '0.0' ||
    _keyword == '0.00'
  ) {
    _keyword = '0';
    return true;
  } else {
    var index = _keyword.indexOf('0');
    var length = _keyword.length;
    if (index == 0 && length > 1) {
      /*0开头的数字串*/

      var reg = /^[0]{1}[.]{1}[0-9]{1,2}$/;
      if (!reg.test(_keyword)) {
        return false;
      } else {
        return true;
      }
    } else {
      /*非0开头的数字*/

      var reg = /^[1-9]{1}[0-9]{0,10}[.]{0,1}[0-9]{0,2}$/;
      if (!reg.test(_keyword)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
}

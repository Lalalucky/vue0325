/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
const typeColor = (type = 'default') => {
  let color = '';
  switch (type) {
    case 'default':
      color = '#35495E';
      break;
    case 'primary':
      color = '#3488ff';
      break;
    case 'success':
      color = '#43B883';
      break;
    case 'warning':
      color = '#e6a23c';
      break;
    case 'danger':
      color = '#f56c6c';
      break;
    default:
      break;
  }
  return color;
};

class Log {
  /**
   * @description 打印一个 [ title | text ] 样式的信息
   * @param {String} title title text
   * @param {String} info info text
   * @param {String} type style
   */
  capsule(title, info, type = 'primary') {
    console.log(
      `%c ${title} %c ${info} %c`,
      'background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;',
      `background:${typeColor(type)}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      'background:transparent'
    );
  }
  /**
   * @description 打印彩色文字
   */
  colorful(textArr) {
    console.log(`%c${textArr.map(t => t.text || '').join('%c')}`, ...textArr.map(t => `color: ${typeColor(t.type)};`));
  }
  primary(text) {
    this.colorful([{ text, type: 'primary' }]);
  }
  success(text) {
    this.colorful([{ text, type: 'primary' }]);
  }
  warning(text) {
    this.colorful([{ text, type: 'primary' }]);
  }
  danger(text) {
    this.colorful([{ text, type: 'primary' }]);
  }
}
let log = new Log();

export { Log, log as default };

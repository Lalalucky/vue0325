
import busPlugin from './bus/index.js' 

export default {
  async install(Vue,options){
    // 当前环境  --区分为  开发环境 'development' ; 生产环境 : 'production'
    Vue.prototype.$NODE_ENV = process.env.NODE_ENV ;
    // 当前
  }
}
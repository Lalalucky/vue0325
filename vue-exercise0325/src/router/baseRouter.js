import { baseRoutesConfig, defaultRedirectRouter, isPermissionCheck } from './config';

const asyncRouterMap = [];

const routerFile = require.context('./modules', false, /\.js$/);
routerFile.keys().forEach(key => {
  let moduleDefault = routerFile(key).default;
	Array.isArray(moduleDefault) ? asyncRouterMap.push(...moduleDefault) : asyncRouterMap.push(moduleDefault);
});

let baseRoutes = [];
// if (!isPermissionCheck) {
//   baseRoutes = baseRoutesConfig.concat(asyncRouterMap).concat([defaultRedirectRouter])
// }else{
//   baseRoutes = baseRoutesConfig ;
// }
  baseRoutes = baseRoutesConfig.concat(asyncRouterMap).concat([defaultRedirectRouter])
export { baseRoutes, asyncRouterMap };

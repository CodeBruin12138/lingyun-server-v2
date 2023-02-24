/**
 * 商品相关路由;
 */
const Router = require('@koa/router');
// 中间件;

// 控制器;

// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/goods' });
// 用户注册接口;
router.post('/add');

module.exports = router;

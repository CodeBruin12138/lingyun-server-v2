/**
 * 商品相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const { addCartController } = require('../controller/cart_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/cart' });
// 添加购物车;
router.post('/addCart', verifyUserToken, addCartController);

module.exports = router;

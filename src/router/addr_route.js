/**
 * 地址相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const { addAddressController } = require('../controller/addr_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/address' });
// 添加地址;
router.post('/addAddress', verifyUserToken, addAddressController);
// 获取地址列表;
// 更新地址;
// 删除地址;
// 设置默认地址;
// 获取默认地址;

module.exports = router;

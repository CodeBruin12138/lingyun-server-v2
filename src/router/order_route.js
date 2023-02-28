/**
 * 订单相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const {
  addOrderController,
  getOrderListController,
  updateOrderStatusController,
} = require('../controller/order_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/order' });
// 添加订单;
router.post('/addOrder', verifyUserToken, addOrderController);
//获取订单列表;
router.get('/getOrderList', verifyUserToken, getOrderListController);
//更新订单状态;
router.patch(
  '/updateOrderStatus/:id',
  verifyUserToken,
  updateOrderStatusController
);

module.exports = router;

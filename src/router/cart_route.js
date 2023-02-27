/**
 * 商品相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const {
  addCartController,
  getCartListController,
  updateCartController,
  deleteCartController,
  selectAllCartController,
  unSelectAllCartController,
} = require('../controller/cart_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/cart' });
// 添加购物车;
router.post('/addCart', verifyUserToken, addCartController);
// 获取购物车列表;
router.get('/getCartList', verifyUserToken, getCartListController);
// 更新购物车;
router.patch('/updateCart/:id', verifyUserToken, updateCartController);
//删除购物车;
router.delete('/deleteCart', verifyUserToken, deleteCartController);
//全选购物车;
router.post('/checkAllCart', verifyUserToken, selectAllCartController);
// 取消全选购物车;
router.post('/unCheckAllCart', verifyUserToken, unSelectAllCartController);

module.exports = router;

/**
 * 地址相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const {
  addAddressController,
  getAddressListController,
  updateAddressController,
  deleteAddressController,
  setDefaultAddressController,
} = require('../controller/addr_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/address' });
// 添加地址;
router.post('/addAddress', verifyUserToken, addAddressController);
// 获取地址列表;
router.get('/getAddressList', verifyUserToken, getAddressListController);
// 更新地址;
router.put('/updateAddress/:id', verifyUserToken, updateAddressController);
// 删除地址;
router.delete('/deleteAddress/:id', verifyUserToken, deleteAddressController);
// 设置默认地址;
router.patch(
  '/setDefaultAddress/:id',
  verifyUserToken,
  setDefaultAddressController
);
// 获取默认地址;
module.exports = router;

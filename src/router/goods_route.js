/**
 * 商品相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const { verifyUserToken, isAdmin } = require('../middleware/auth_middleware');
const { goodsFormatIsStandard } = require('../middleware/goods_middleware');
// 控制器;
const {
  addGoodsController,
  updateGoodsController,
  onGoodsController,
  offGoodsController,
  getGoodsListController,
  getGoodsListByLikeController,
} = require('../controller/goods_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/goods' });
// 添加商品接口;
router.post(
  '/addGoods',
  verifyUserToken,
  isAdmin,
  goodsFormatIsStandard,
  addGoodsController
);
// 修改商品;
router.put(
  '/updateGoods/:id',
  verifyUserToken,
  isAdmin,
  goodsFormatIsStandard,
  updateGoodsController
);
// 直接删除商品(仅限发布者操作)
// router.delete(
//   '/rootAdminDel/:id',
//   verifyUserToken,
//   isAdmin,
//   rootAdminDelController
// );
// 下架商品;
router.post('/offGoods/:id/off', verifyUserToken, isAdmin, offGoodsController);
// 上架商品;
router.post('/onGoods/:id/on', verifyUserToken, isAdmin, onGoodsController);
// 获取商品列表;
router.get('/getGoodsList', getGoodsListController);
//根据喜好获取商品列表;
router.get('/getGoodsListByLike', getGoodsListByLikeController);

module.exports = router;

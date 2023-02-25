/**
 * 商品相关的控制器;
 */

// 数据库操作;
const {
  createGoods,
  updateGoods,
  delGoods,
} = require('../service/goods_service');
// 错误类型;
const {
  addGoodsError,
  updateGoodsError,
  invalidGoodsId,
  delGoodsError,
} = require('../constant/goods_error_type_constant');
class GoodsController {
  // 添加商品;
  async addGoodsController(ctx, next) {
    try {
      const {
        goods_name,
        goods_price,
        goods_num,
        goods_image,
        goods_classify,
        goods_data,
      } = ctx.request.body;
      const goods_shop = ctx.state.user.user_shop;
      const { createdAt, updatedAt, ...res } = await createGoods({
        goods_name,
        goods_price,
        goods_num,
        goods_image,
        goods_shop,
        goods_classify,
        goods_data,
      });
      ctx.body = {
        code: 0,
        message: '添加商品成功',
        result: res,
      };
    } catch (error) {
      console.error('添加商品失败', error);
      ctx.app.emit('error', addGoodsError, ctx);
      return;
    }
  }
  // 修改商品信息;
  async updateGoodsController(ctx, next) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body);
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改商品信息成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('修改商品信息失败', error);
      ctx.app.emit('error', updateGoodsError, ctx);
      return;
    }
  }
  // 店长直接删除商品;
  async rootAdminDelController(ctx, next) {
    try {
      const res = await delGoods(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: '删除商品成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('删除商品失败', error);
      ctx.app.emit('error', delGoodsError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new GoodsController();

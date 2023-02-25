/**
 * 商品相关的控制器;
 */

// 数据库操作;
const { createGoods } = require('../service/goods_service');
// 错误类型;
const { addGoodsError } = require('../constant/goods_error_type_constant');
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
}

// 导出实例化对象;
module.exports = new GoodsController();

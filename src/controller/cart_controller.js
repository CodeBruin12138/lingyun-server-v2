/**
 * 购物车相关的控制器;
 */
// 数据库操作;
const { addCartOrUpdateCartService } = require('../service/cart_service');
// 错误类型;
const { addCartError } = require('../constant/cart_error_type_constant');
class CartController {
  // 添加购物车;
  async addCartController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      const goods_id = ctx.request.body.goods_id;
      // 操作数据库;
      const result = await addCartOrUpdateCartService(user_id, goods_id);
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '添加购物车成功',
        result,
      };
    } catch (error) {
      console.error('添加购物车失败', error);
      ctx.app.emit('error', addCartError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new CartController();

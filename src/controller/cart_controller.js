/**
 * 购物车相关的控制器;
 */
// 数据库操作;
const {
  addCartOrUpdateCartService,
  getCartListService,
  updateCartService,
  deleteCartService,
  selectAllCartService,
  unSelectAllCartService,
} = require('../service/cart_service');
// 错误类型;
const {
  addCartError,
  getCartListError,
  updateCartError,
  cartParameterError,
  deleteCartError,
  selectAllCartError,
  unSelectAllCartError,
} = require('../constant/cart_error_type_constant');
class CartController {
  // 添加购物车;
  async addCartController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      const goods_id = ctx.request.body.goods_id;
      // 操作数据库;
      const result = await addCartOrUpdateCartService({ user_id, goods_id });
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
  // 获取购物车列表;
  async getCartListController(ctx) {
    try {
      // 获取用户信息;
      const { pageNum = 1, pageSize = 10 } = ctx.request.query;
      const user_id = ctx.state.user.id;
      // 操作数据库;
      const result = await getCartListService({ user_id, pageNum, pageSize });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '获取购物车列表成功',
        result,
      };
    } catch (error) {
      console.error('获取购物车列表失败', error);
      ctx.app.emit('error', getCartListError, ctx);
      return;
    }
  }
  // 更新购物车;
  async updateCartController(ctx) {
    try {
      // 获取用户信息;
      const { id } = ctx.request.params;
      const { number, selected } = ctx.request.body;
      if (number === undefined && selected === undefined) {
        // 没有传递参数;
        console.error('购物车参数错误', ctx.request.body);
        ctx.app.emit('error', cartParameterError, ctx);
        return;
      }
      //操作数据库;
      const result = await updateCartService({
        id,
        number,
        selected,
      });
      ctx.body = {
        code: 0,
        message: '更新购物车成功',
        result,
      };
    } catch (error) {
      console.error('更新购物车失败', error);
      ctx.app.emit('error', updateCartError, ctx);
      return;
    }
  }
  //删除购物车;
  async deleteCartController(ctx) {
    try {
      // 获取用户信息;
      const { cart_ids } = ctx.request.body;
      //操作数据库;
      const result = await deleteCartService(cart_ids);
      ctx.body = {
        code: 0,
        message: '删除购物车成功',
        result,
      };
    } catch (error) {
      console.error('删除购物车失败', error);
      ctx.app.emit('error', deleteCartError, ctx);
      return;
    }
  }
  //全选购物车;
  async selectAllCartController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      // 操作数据库;
      const result = await selectAllCartService(user_id);
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '全选购物车成功',
        result,
      };
    } catch (error) {
      console.error('全选购物车失败', error);
      ctx.app.emit('error', selectAllCartError, ctx);
      return;
    }
  }
  // 取消全选购物车;
  async unSelectAllCartController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      // 操作数据库;
      const result = await unSelectAllCartService(user_id);
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '取消全选购物车成功',
        result,
      };
    } catch (error) {
      console.error('取消全选购物车失败', error);
      ctx.app.emit('error', unSelectAllCartError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new CartController();

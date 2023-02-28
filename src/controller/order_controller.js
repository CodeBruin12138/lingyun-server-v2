/**
 * 订单相关的控制器;
 */

// 数据库操作;
const {
  addOrderService,
  getOrderListService,
  updateOrderStatusService,
} = require('../service/order_service');
// 错误类型;
const {
  createOrderError,
  getOrderListError,
  updateOrderStatusError,
} = require('../constant/order_error_type_constant');
class OrderController {
  // 生成订单;
  async addOrderController(ctx) {
    try {
      // 获取参数;
      const user_id = ctx.state.user.id;
      const { address_id, goods_info, total } = ctx.request.body;
      //生成订单编号;
      const order_number =
        'ly' + Date.now() + Math.random().toString().slice(2, 10);
      // 操作数据库;
      const result = await addOrderService({
        user_id,
        address_id,
        goods_info,
        total,
        order_number,
      });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '生成订单成功',
        result,
      };
    } catch (error) {
      console.error('生成订单失败', error);
      ctx.app.emit('error', createOrderError, ctx);
      return;
    }
  }
  // 获取订单列表;
  async getOrderListController(ctx) {
    try {
      // 获取参数;
      const user_id = ctx.state.user.id;
      // 解构参数;
      const { pageNum = 1, pageSize = 10, status = 0 } = ctx.request.query;
      // 操作数据库;
      const result = await getOrderListService({
        user_id,
        pageNum,
        pageSize,
        status,
      });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '获取订单列表成功',
        result,
      };
    } catch (error) {
      console.error('获取订单列表失败', error);
      ctx.app.emit('error', getOrderListError, ctx);
      return;
    }
  }
  // 更新订单状态;
  async updateOrderStatusController(ctx) {
    try {
      // 获取参数;
      const id = ctx.params.id;
      const status = ctx.request.body.status;
      // 操作数据库;
      const result = await updateOrderStatusService({ id, status });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '更新订单状态成功',
        result,
      };
    } catch (error) {
      console.error('更新订单状态失败', error);
      ctx.app.emit('error', updateOrderStatusError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new OrderController();

/**
 * 订单相关的数据库操作;
 */

// 引入数据库模型;
const OrderModel = require('../model/order_model');
class OrderService {
  // 生成订单;
  async addOrderService({
    user_id,
    address_id,
    goods_info,
    total,
    order_number,
  }) {
    // 操作数据库;
    const result = await OrderModel.create({
      user_id,
      address_id,
      goods_info,
      total,
      order_number,
    });
    // 返回结果;
    return result;
  }
  // 获取订单列表;
  async getOrderListService({ user_id, pageNum, pageSize, status }) {
    // 操作数据库;
    const result = await OrderModel.findAndCountAll({
      // 查询字段;
      attributes: [
        'id',
        'goods_info',
        'order_number',
        'total',
        'status',
        'createdAt',
      ],
      // 查询条件;
      where: {
        user_id,
        status,
      },
      // 分页;
      offset: (pageNum - 1) * pageSize,
      // 限制条数;
      limit: pageSize,
      // 排序;
      order: [['id', 'DESC']],
    });
    // 返回结果;
    return {
      pageNum,
      pageSize,
      total: result.count,
      list: result.rows,
    };
  }
  // 更新订单状态;
  async updateOrderStatusService({ id, status }) {
    // 操作数据库;
    const result = await OrderModel.update(
      // 更新字段;
      {
        status,
      },
      // 查询条件;
      {
        where: {
          id,
        },
      }
    );
    // 返回结果;
    return result;
  }
}
// 导出实例化对象;
module.exports = new OrderService();

/**
 * 订单相关的错误类型;
 */
module.exports = {
  createOrderError: {
    code: '70001',
    message: '生成订单失败',
  },
  getOrderListError: {
    code: '70002',
    message: '获取订单列表失败',
  },
  updateOrderStatusError: {
    code: '70003',
    message: '更新订单状态失败',
  },
};

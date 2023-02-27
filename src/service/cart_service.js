/**
 * 购物车相关的数据库操作;
 */
// 模型;
class CartService {
  // 添加商品;
  async addCartOrUpdateCartService({ user_id, goods_id }) {
    return {
      id: 1,
      user_id: 1,
      goods_id: 1,
      number: 1,
      selected: true,
    };
  }
}
// 导出实例化对象;
module.exports = new CartService();

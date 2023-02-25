/**
 * 商品相关的数据库操作;
 */
// 模型;
const GoodsModel = require('../model/goods_model');
class GoodsService {
  // 添加商品;
  async createGoods(goods) {
    const res = await GoodsModel.create(goods);
    return res.dataValues;
  }
}
// 导出实例化对象;
module.exports = new GoodsService();

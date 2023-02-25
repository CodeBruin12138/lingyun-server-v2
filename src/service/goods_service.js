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
  // 修改商品信息;
  async updateGoods(id, goods) {
    const res = await GoodsModel.update(goods, { where: { id } });
    return res[0] > 0 ? true : false;
  }
  // 删除商品;
  async delGoods(id) {
    const res = await GoodsModel.destroy({ where: { id } });
    return res > 0 ? true : false;
  }
}
// 导出实例化对象;
module.exports = new GoodsService();

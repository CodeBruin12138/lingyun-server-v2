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
  // 下架商品;
  async delGoods(id) {
    const res = await GoodsModel.destroy({ where: { id } });
    return res > 0 ? true : false;
  }
  //上架商品;
  async onGoods(id) {
    const res = await GoodsModel.restore({ where: { id } });
    return res > 0 ? true : false;
  }
  //获取所有商品;
  async getWholeGoodsList(pageNum, pageSize) {
    // 获取所有商品;
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await GoodsModel.findAndCountAll({
      offset,
      limit: pageSize * 1,
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }
  //获取所有商品;
  async getGoodsListByLike({ pageNum, pageSize, goods_classify }) {
    // 获取所有商品;
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await GoodsModel.findAndCountAll({
      where: { goods_classify },
      offset,
      limit: pageSize * 1,
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }
}
// 导出实例化对象;
module.exports = new GoodsService();

/**
 * 购物车相关的数据库操作;
 */
const { Op } = require('sequelize');
// 模型;
const CartModel = require('../model/cart_model');
const GoodsModel = require('../model/goods_model');
class CartService {
  // 添加商品;
  async addCartOrUpdateCartService({ user_id, goods_id }) {
    // 根据用户id和商品id查询购物车;
    let result = await CartModel.findOne({
      // 查询条件;
      where: {
        [Op.and]: {
          user_id,
          goods_id,
        },
      },
    });
    // 判断是否存在;
    if (result) {
      // 存在, 更新;
      await result.increment('number');
      return await result.reload();
    } else {
      // 不存在, 添加;
      return await CartModel.create({
        user_id,
        goods_id,
        number: 1,
        selected: true,
      });
    }
  }
  // 获取购物车列表;
  async getCartListService({ user_id, pageNum, pageSize }) {
    // 查询条件;
    const offset = (pageNum - 1) * pageSize;
    const { count, rows } = await CartModel.findAndCountAll({
      where: { user_id },
      // 查询字段;
      attributes: ['id', 'number', 'selected'],
      offset,
      limit: pageSize * 1,
      include: {
        // 关联查询;
        model: GoodsModel,
        as: 'goods_info',
        // 查询字段;
        attributes: [
          'id',
          'goods_name',
          'goods_price',
          'goods_num',
          'goods_image',
          'goods_discounts',
          'goods_shop',
          'goods_classify',
          'goods_sell',
          'goods_data',
          'deletedAt',
        ],
      },
    });
    return {
      pageNum,
      pageSize,
      total: count,
      list: rows,
    };
  }
  // 更新购物车;
  async updateCartService({ id, number, selected }) {
    // 根据id查询购物车;
    const result = await CartModel.findByPk(id);
    // 判断是否存在;
    if (!result) return '';
    // 判断是否传入number;
    number !== undefined ? await result.update({ number }) : '';
    // 判断是否传入selected;
    if (selected !== undefined) {
      // 更新;
      result.selected = selected;
    }
    // 保存;
    return await result.save();
  }
  // 删除购物车;
  async deleteCartService(cart_ids) {
    // 根据id查询购物车;
    const result = await CartModel.destroy({
      // 查询条件;
      where: {
        id: {
          [Op.in]: cart_ids,
        },
      },
    });
    // 返回结果;
    return result;
  }
  //全选购物车;
  async selectAllCartService(user_id) {
    // 更新;
    return await CartModel.update({ selected: true }, { where: { user_id } });
  }
  //取消全选购物车;
  async unSelectAllCartService(user_id) {
    // 更新;
    return await CartModel.update({ selected: false }, { where: { user_id } });
  }
}
// 导出实例化对象;
module.exports = new CartService();

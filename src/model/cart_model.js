/**
 * 购物车数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 导入数据库模型;
const GoodsModel = require('./goods_model');
// 创建购物车模型;
const CartModel = seq.define('ly_cart', {
  goods_id: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品id',
  },
  user_id: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '用户id',
  },
  number: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '产品数量',
  },
  selected: {
    // 数据类型;
    type: DataTypes.BOOLEAN,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 默认值;
    defaultValue: true,
    // 备注;
    comment: '勾选状态',
  },
});
// 关联表;
CartModel.belongsTo(GoodsModel, {
  // 外键;
  foreignKey: 'goods_id',
  // 别名;
  as: 'goods_info',
});
// 强制同步表;
// CartModel.sync({ force: true });
module.exports = CartModel;

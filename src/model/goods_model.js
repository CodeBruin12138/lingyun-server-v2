/**
 * 商品数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 创建商品模型;
const GoodsModel = seq.define('ly_goods', {
  goods_name: {
    // 数据类型;
    type: DataTypes.STRING,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品名',
  },
  goods_price: {
    // 数据类型;
    type: DataTypes.DECIMAL(10, 2),
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品价格',
  },
  goods_num: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品库存',
  },
  goods_image: {
    // 数据类型;
    type: DataTypes.STRING,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品图片',
  },
  goods_discounts: {
    // 数据类型;
    type: DataTypes.DECIMAL(10, 2),
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 默认值;
    defaultValue: 0.0,
    // 备注;
    comment: '商品优惠价格',
  },
  goods_shop: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品所属店铺',
  },
  goods_classify: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品分类码',
  },
  goods_sell: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 默认值;
    defaultValue: 0,
    // 备注;
    comment: '商品已售卖数',
  },
  goods_data: {
    // 数据类型;
    type: DataTypes.STRING,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品详细信息',
  },
});

// 强制同步表;
// GoodsModel.sync({ force: true });
module.exports = GoodsModel;

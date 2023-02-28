/**
 * 订单数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 创建购物车模型;
const OrderModel = seq.define('ly_order', {
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
  address_id: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '地址id',
  },
  goods_info: {
    // 数据类型;
    type: DataTypes.TEXT,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '商品信息',
  },
  total: {
    // 数据类型;
    type: DataTypes.DECIMAL(10, 2),
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '总价',
  },
  order_number: {
    // 数据类型;
    type: DataTypes.CHAR,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '订单编号',
  },
  status: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 默认值;
    defaultValue: 0,
    // 备注;
    comment: '订单状态, 0:未支付,1:已支付,2:已发货,3:已签收,4:取消;',
  },
});

// 强制同步表;
// OrderModel.sync({ force: true });
module.exports = OrderModel;

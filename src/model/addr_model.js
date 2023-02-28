/**
 * 地址数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 创建地址模型;
const AddressModel = seq.define('ly_address', {
  user_id: {
    // 数据类型;
    type: DataTypes.INTEGER,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '用户ID',
  },
  consignee: {
    // 数据类型;
    type: DataTypes.STRING,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '收货人',
  },
  phone: {
    // 数据类型;
    type: DataTypes.BIGINT,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '收货人电话',
  },
  address: {
    // 数据类型;
    type: DataTypes.STRING,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 备注;
    comment: '收货人地址',
  },
  is_default: {
    // 数据类型;
    type: DataTypes.BOOLEAN,
    // 能否为空;
    allowNull: false,
    // 是否唯一;
    unique: false,
    // 默认值;
    defaultValue: false,
    // 备注;
    comment: '是否默认地址',
  },
});

// 强制同步表;
// AddressModel.sync({ force: true });
module.exports = AddressModel;

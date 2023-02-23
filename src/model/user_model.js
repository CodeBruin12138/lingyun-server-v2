/**
 * 用户数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 创建用户模型;
const UserModel = seq.define('ly_user', {
  user_name: {
    // 数据类型;
    type: DataTypes.BIGINT,
    // 能否为空;
    allowNull: false,
    // 备注;
    comment: '',
  },
});

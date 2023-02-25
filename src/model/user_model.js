/**
 * 用户数据库模型;
 */
const { DataTypes } = require('sequelize');
// 导入数据库连接;
const seq = require('../db/seq');
// 创建用户模型;
const UserModel = seq.define(
  'ly_user',
  {
    user_name: {
      // 数据类型;
      type: DataTypes.BIGINT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: true,
      // 备注;
      comment: '用户名,唯一',
    },
    user_pwd: {
      // 数据类型;
      type: DataTypes.STRING,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 备注;
      comment: '用户密码',
    },
    user_title: {
      // 数据类型;
      type: DataTypes.STRING,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 备注;
      comment: '用户网名',
    },
    user_portrait: {
      // 数据类型;
      type: DataTypes.STRING,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue: 'ly_123456789',
      // 备注;
      comment: '用户头像',
    },
    user_shop: {
      // 数据类型;
      type: DataTypes.BIGINT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue: 0,
      // 备注;
      comment: '用户店铺号',
    },
    is_admin: {
      // 数据类型;
      type: DataTypes.BIGINT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue: 0,
      // 备注;
      comment: '是否为管理员',
    },
    user_age: {
      // 数据类型;
      type: DataTypes.BIGINT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue: 18,
      // 备注;
      comment: '用户年龄',
    },
    user_sex: {
      // 数据类型;
      type: DataTypes.BIGINT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue: 0,
      // 备注;
      comment: '用户性别,0为保密,1为男性,2为女性',
    },
    user_explained: {
      // 数据类型;
      type: DataTypes.TEXT,
      // 能否为空;
      allowNull: false,
      // 是否唯一;
      unique: false,
      // 默认值;
      defaultValue:
        '所谓成长，是渐渐放下执念，内心归于平静的旅程,谁对谁错已经不重要了',
      // 备注;
      comment: '用户个性签名',
    },
  },
  { paranoid: true }
);

// 强制同步表;
// UserModel.sync({ force: true });
module.exports = UserModel;

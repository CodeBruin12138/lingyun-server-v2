/**
 * 用户相关的数据库操作;
 */
// 模型;
const UserModel = require('../model/user_model');

class UserService {
  // 添加用户;
  async createUser({ user_name, user_pwd, user_title }) {
    const res = await UserModel.create({ user_name, user_pwd, user_title });
    return res.dataValues;
  }
  // 查询用户;
  async getUserInfo({
    id,
    user_name,
    user_pwd,
    user_title,
    user_portrait,
    user_age,
    user_sex,
    user_explained,
    user_shop,
    is_admin,
  }) {
    // 定义where条件
    const whereOpt = {};
    // 如果参数存在就拷贝到where条件里面;
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    user_pwd && Object.assign(whereOpt, { user_pwd });
    user_title && Object.assign(whereOpt, { user_title });
    user_portrait && Object.assign(whereOpt, { user_portrait });
    user_age && Object.assign(whereOpt, { user_age });
    user_sex && Object.assign(whereOpt, { user_sex });
    user_explained && Object.assign(whereOpt, { user_explained });
    user_shop && Object.assign(whereOpt, { user_shop });
    is_admin && Object.assign(whereOpt, { is_admin });
    const res = await UserModel.findOne({
      // 查询那些字段;
      attributes: [
        'id',
        'user_name',
        'user_pwd',
        'user_title',
        'user_portrait',
        'user_age',
        'user_sex',
        'user_explained',
        'user_shop',
        'is_admin',
      ],
      where: whereOpt,
    });
    // 判断是否查询到字段;
    return res ? res.dataValues : null;
  }
}
// 导出实例化对象;
module.exports = new UserService();

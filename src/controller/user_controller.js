/**
 * 用户相关的控制器;
 */
// 数据库操作;
const { createUser } = require('../service/user_service');
// 错误类型;
const {
  userRegistrationError,
} = require('../constant/user_error_type_constant');
class UserController {
  // 用户注册控制器;
  async userRegistration(ctx) {
    try {
      // 获取用户请求信息;
      const user_pwd = ctx.request.body.user_pwd;
      const user_name = Date.now();
      const user_title = `ly_${user_name}`;
      // 操作数据库;
      const res = await createUser({ user_name, user_pwd, user_title });
      ctx.body = {
        code: 0,
        message: '注册成功',
        result: {
          id: res.id,
          user_name: res.user_name,
          user_title: res.user_title,
          user_portrait: res.user_portrait,
          user_age: res.user_age,
          user_sex: res.user_sex,
          user_explained: res.user_explained,
        },
      };
    } catch (error) {
      console.error('用户注册失败', error);
      ctx.app.emit('error', userRegistrationError, ctx);
      return;
    }
  }
  // 用户登录控制器;
  async userLogin(ctx) {
    try {
      ctx.body = '登陆成功';
    } catch (error) {}
  }
}

// 导出实例化对象;
module.exports = new UserController();

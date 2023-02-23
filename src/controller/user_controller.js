/**
 * 用户相关的控制器;
 */
// 数据库操作;
const { createUser } = require('../service/user_service');

class UserController {
  // 用户注册控制器;
  async userRegistration(ctx) {
    try {
      // 获取用户请求信息;
      const user_pwd = ctx.request.body.user_pwd;
      // 操作数据库;
      const res = await createUser({ user_pwd });
      console.log(res);
    } catch (error) {}
  }
  // 用户登录控制器;
  async userLogin(ctx) {
    ctx.body = '登陆成功';
  }
}

// 导出实例化对象;
module.exports = new UserController();

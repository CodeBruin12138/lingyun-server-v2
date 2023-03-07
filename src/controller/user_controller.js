/**
 * 用户相关的控制器;
 */
const jwt = require('jsonwebtoken');
// 数据库操作;
const {
  createUser,
  getUserInfo,
  updateById,
} = require('../service/user_service');
// 错误类型;
const {
  userRegistrationError,
  userLoginError,
  userUpdatePasswordError,
  adminLoginError,
  notIsAdmin,
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
      // 获取用户请求信息;
      const { user_name } = ctx.request.body;
      // 根据用户名获取用户数据库信息并剔除用户密码;
      const { user_pwd, ...res } = await getUserInfo({ user_name });
      ctx.body = {
        code: 0,
        message: '登录成功',
        result: {
          token: jwt.sign(res, 'lingyun', { expiresIn: '1d' }),
          user: {
            user_name: res.user_name,
            user_portrait: res.user_portrait,
            user_title: res.user_title,
            user_age: res.user_age,
            user_explained: res.user_explained,
            user_sex: res.user_sex,
          },
        },
      };
    } catch (error) {
      console.error('用户登录失败', error);
      ctx.app.emit('error', userLoginError, ctx);
      return;
    }
  }
  // 用户修改密码控制器;
  async userUpdatePassword(ctx) {
    try {
      // 获取用户信息;
      const id = ctx.state.user.id;
      // 获取用户新修改的密码;
      const user_pwd = ctx.request.body.user_pwd;
      // 操作数据库;
      const res = await updateById({ id, user_pwd });
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改密码成功',
          result: '',
        };
      } else {
        console.error('修改密码失败', ctx.request.body);
        ctx.app.emit('error', userUpdatePasswordError, ctx);
        return;
      }
    } catch (error) {
      console.error('修改密码失败', error);
      ctx.app.emit('error', userUpdatePasswordError, ctx);
      return;
    }
  }
  // 管理员登录控制器;
  async adminLogin(ctx) {
    try {
      // 获取用户请求信息;
      const { user_name } = ctx.request.body;
      // 根据用户名获取用户数据库信息;
      const { user_pwd, ...res } = await getUserInfo({ user_name });
      ctx.body = {
        code: 0,
        message: '管理员登录成功',
        result: {
          token: jwt.sign(res, 'lingyun', { expiresIn: '1d' }),
          user: res,
        },
      };
    } catch (error) {
      console.error('管理员登录失败', error);
      ctx.app.emit('error', adminLoginError, ctx);
      return;
    }
  }
  // 直接验证token是否有效;
  async verifyUserTokenController(ctx) {
    try {
      // 获取用户信息;
      const {
        id,
        user_name,
        user_title,
        user_portrait,
        user_age,
        user_sex,
        user_explained,
        user_shop,
        is_admin,
      } = ctx.state.user;
      console.log('用户已登录', ctx.state.user);
      ctx.body = {
        code: 0,
        message: '用户已登录',
        result: {
          id,
          user_name,
          user_title,
          user_portrait,
          user_age,
          user_sex,
          user_explained,
          user_shop,
          is_admin,
        },
      };
    } catch (error) {
      console.error('用户未登录', error);
      ctx.app.emit('error', userLoginError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new UserController();

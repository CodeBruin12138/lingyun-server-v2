/**
 * 用户相关的中间件;
 */
// 数据库操作;
const { getUserInfo } = require('../service/user_service');
// 错误类型;
const {
  userNameInexistence,
  userFormateError,
  userLoginParameterError,
} = require('../constant/user_error_type_constant');
// 判断用户密码是否符合格式;
const userPassWordFormatIsStandard = async (ctx, next) => {
  try {
    // 获取用户请求信息;
    const user_pwd = ctx.request.body.user_pwd;
    // 如果字符超过限制;
    if (user_pwd.length > 20) {
    }
    // 定义正则表达式;
    const userPassWordFormatStandard =
      /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
    // 判断是否符合正则;
    const res = userPassWordFormatStandard.test(user_pwd);
    if (!res) {
    }
    await next();
  } catch (error) {}
};
// 判断用户登录参数是否完整;
const userLoginParameter = async (ctx, next) => {
  try {
    // 获取用户请求参数;
    const { user_name, user_pwd } = ctx.request.body;
    // 判断用户名或者密码是否完整;
    if (!user_name || !user_pwd) {
      ctx.app.emit('error', userFormateError, ctx);
      return;
    }
    // 判断用户是否存在;
    if (!(await getUserInfo({ user_name }))) {
      ctx.app.emit('error', userNameInexistence, ctx);
      return;
    }
    await next();
  } catch (error) {
    console.error('检查用户参数失败', ctx.request.body);
    ctx.app.emit('error', userLoginParameterError, ctx);
    return;
  }
};
module.exports = {
  userLoginParameter,
  userPassWordFormatIsStandard,
};

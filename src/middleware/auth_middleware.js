/**
 * 认证相关的中间件;
 */

const jwt = require('jsonwebtoken');
// 错误类型;
const { tokenExpiredError } = require('../middleware/auth_middleware');
// 验证用户token;
const verifyUserToken = async (ctx, next) => {
  try {
    // 获取用户请求信息;
    const { authorization } = ctx.request.header;
    // 提取token;
    const token = authorization.replace('Bearer', '');
    // 解析token;
    const user = jwt.verify(token, 'lingyun');
    // 把解析到的用户信息挂载到状态;
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case 'TokenExpiredError':
        console.log('token已过期', error);
        ctx.app.emit('error', tokenExpiredError, ctx);
        return;
      case 'NotBeforeError':
        console.log('无效的token', error);
        ctx.app.emit('error', notBeforeError, ctx);
        return;
    }
  }
  await next();
};
module.exports = {
  verifyUserToken,
};

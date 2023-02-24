/**
 * 认证相关的中间件;
 */
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
// 数据库操作;
const { getUserInfo } = require('../service/user_service');
// 错误类型;
const {
  tokenExpiredError,
  jsonWebTokenError,
} = require('../constant/auth_error_type_constant');
const {
  notIsAdmin,
  adminLoginError,
} = require('../constant/user_error_type_constant');
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
    console.log(error);
    switch (error.name) {
      case 'TokenExpiredError':
        console.log('token已过期', error);
        ctx.app.emit('error', tokenExpiredError, ctx);
        return;
      case 'JsonWebTokenError':
        console.log('无效的token', error);
        ctx.app.emit('error', jsonWebTokenError, ctx);
        return;
    }
  }
  await next();
};
// 验证用户是否为管理员;
const verifyUserIsAdmin = async (ctx, next) => {
  try {
    // 获取用户请求信息;
    const { user_name } = ctx.request.body;
    // 根据用户名获取用户数据库信息;
    const { user_pwd, ...res } = await getUserInfo({ user_name });
    // 如果账号数据存在店铺;
    if (res.is_admin == 0 || res.user_shop == 0) {
      console.error('该账号非管理员账号', ctx.request.body);
      ctx.app.emit('error', notIsAdmin, ctx);
      return;
    }
  } catch (error) {
    console.log('管理员登录失败', error);
    ctx.app.emit('error', adminLoginError, ctx);
    return;
  }
  await next();
};
// 通过token验证用户是否为管理员;
const isAdmin = async (ctx, next) => {
  try {
    // 获取已挂载的用户信息;
    const { is_admin, user_shop } = ctx.state.user;
    // 如果账号数据存在店铺;
    if (is_admin == 0 || user_shop == 0) {
      console.error('该账号非管理员账号', ctx.request.body);
      ctx.app.emit('error', notIsAdmin, ctx);
      return;
    }
  } catch (error) {
    console.log('管理员登录失败', error);
    ctx.app.emit('error', adminLoginError, ctx);
    return;
  }
  await next();
};

// 读取非法文件并遍历删除;
const delNonlicetFile = async (ctx, next) => {
  fs.readdir(path.join(__dirname, '../upload'), function (err, files) {
    // 如果读取错误;
    if (err) {
      return console.error('删除upload文件夹中非法文件失败');
    }
    // 遍历读取到的文件并判断文件名;
    files.forEach(function (file) {
      // 定义正则表达式;
      const zhengze = /^ly_/;
      // 判断是否符合正则;
      let res = zhengze.test(file);
      // 如果不符合;
      if (!res) {
        // 删除文件;
        fs.unlink(
          path.join(__dirname, '../upload') + '/' + file,
          function (err) {
            if (err) {
              // return console.error(err);
            }
            // console.log('文件删除成功！');
          }
        );
      }
    });
  });
  await next();
};

module.exports = {
  verifyUserToken,
  verifyUserIsAdmin,
  isAdmin,
  delNonlicetFile,
};

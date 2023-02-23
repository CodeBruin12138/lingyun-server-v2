const Router = require('@koa/router');
// 中间件;
const {
  userPassWordFormatIsStandard,
  userLoginParameter,
  userPasswordEncryption,
  verifyPassword,
} = require('../middleware/user_middleware');
const { verifyUserToken } = require('../middleware/auth_middleware');
// 控制器;
const {
  userRegistration,
  userLogin,
  userUpdatePassword,
} = require('../controller/user_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/user' });
// 用户注册接口;
router.post(
  '/register',
  userPassWordFormatIsStandard,
  userPasswordEncryption,
  userRegistration
);
// 用户登录接口;
router.post('/login', userLoginParameter, verifyPassword, userLogin);
// 用户修改密码接口;
router.patch(
  '/updatePassword',
  userPassWordFormatIsStandard,
  verifyUserToken,
  userUpdatePassword
);

module.exports = router;

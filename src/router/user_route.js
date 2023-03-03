/**
 * 用户相关路由;
 */
const Router = require('@koa/router');
// 中间件;
const {
  userPassWordFormatIsStandard,
  userLoginParameter,
  userPasswordEncryption,
  verifyPassword,
} = require('../middleware/user_middleware');
const {
  verifyUserToken,
  verifyUserIsAdmin,
} = require('../middleware/auth_middleware');
// 控制器;
const {
  userRegistration,
  userLogin,
  userUpdatePassword,
  adminLogin,
  verifyUserTokenController,
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
  userPasswordEncryption,
  userUpdatePassword
);
// 管理员登录;
router.post(
  '/adminLogin',
  userLoginParameter,
  verifyPassword,
  verifyUserIsAdmin,
  adminLogin
);
// 校验用户是否登录;
router.get('/verifyUserToken', verifyUserToken, verifyUserTokenController);

module.exports = router;

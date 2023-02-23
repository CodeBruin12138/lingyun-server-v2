const Router = require('@koa/router');
// 中间件;
const {
  userPassWordFormatIsStandard,
  userLoginParameter,
  userPasswordEncryption,
} = require('../middleware/user_middleware');
// 控制器;
const {
  userRegistration,
  userLogin,
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
router.post('/login', userLoginParameter, userLogin);
module.exports = router;

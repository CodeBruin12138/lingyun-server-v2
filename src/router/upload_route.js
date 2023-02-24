/**
 * 文件上传相关路由;
 */
const Router = require('@koa/router');
// 中间件;

// 控制器;
const { goodsUpload } = require('../controller/upload_controller');
// 实例化路由并绑定前缀;
const router = new Router({ prefix: '/upload' });
router.post('/goodsUpload', goodsUpload);

module.exports = router;

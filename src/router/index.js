const fs = require('fs');
const Router = require('@koa/router');
// 实例化Router对象;
const router = new Router();
// 同步读取当前文件目录并遍历文件;
fs.readdirSync(__dirname).forEach((file) => {
  // 对文件名进行判断, 剔除当前文件;
  if (file !== 'index.js') {
    let r = require('./' + file);
    // 注册路由;
    router.use(r.routes());
  }
});
module.exports = router;

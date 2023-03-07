const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const cors = require('@koa/cors');
const { koaBody } = require('koa-body');
const router = require('../router/index');
const errorHandling = require('./errorHandling');
// 实例化koa对象;
const app = new Koa();
// 注册cors,用于解决跨域问题;
app.use(cors());
// 注册koa-body,用于解析请求数据;
app.use(
  koaBody({
    // 打开文件上传支持;
    multipart: true,
    formidable: {
      // 文件保存目录;
      uploadDir: path.join(__dirname, '../upload'),
      // 是否保留文件扩展名;
      keepExtensions: true,
    },
    //请求解析限制;
    parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
  })
);
// 设置静态资源路径;
app.use(koaStatic(path.join(__dirname, '../../../upload')));
// 注册路由并判断请求方式是否支持;
app.use(router.routes()).use(router.allowedMethods());
// 统一的错误处理;
app.on('error', errorHandling);
module.exports = app;

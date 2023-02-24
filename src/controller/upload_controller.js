/**
 * 文件上传相关的控制器;
 */
// 数据库操作;

// 错误类型;

class UploadController {
  async goodsUpload(ctx, next) {
    try {
      ctx.body = '商品图片上传成功';
    } catch (error) {}
  }
}

// 导出实例化对象;
module.exports = new UploadController();

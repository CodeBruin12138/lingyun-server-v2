/**
 * 文件上传相关的控制器;
 */
const fs = require('fs');
const path = require('path');
// 数据库操作;

// 错误类型;
const { goodsUploadError } = require('../constant/upload_error_type_constant');
const { unsupportedFormat } = require('../constant/auth_error_type_constant');
class UploadController {
  async goodsUpload(ctx, next) {
    try {
      // 获取文件上传后的信息;
      const { file } = ctx.request.files;
      // 生成新的文件名;
      const newName =
        path.join(__dirname, '../../../upload') +
        '/' +
        'ly_' +
        file.newFilename;
      // 对文件进行重新命名;
      fs.rename(file.filepath, newName, (err) => {
        if (err) {
          // console.log('出错');
        } else {
          // console.log('未出错');
        }
      });
      const fileTypes = ['image/jpeg', 'image/png'];
      if (file) {
        if (!fileTypes.includes(file.mimetype)) {
          ctx.app.emit('error', unsupportedFormat, ctx);
          return;
        }
        ctx.body = {
          code: 0,
          message: '商品图片上传成功',
          result: {
            goods_img: 'ly_' + file.newFilename,
          },
        };
      } else {
        console.error('商品图片上传失败', ctx.state.user);
        ctx.app.emit('error', goodsUploadError, ctx);
        return;
      }
    } catch (error) {
      console.error('商品图片上传失败', error);
      ctx.app.emit('error', goodsUploadError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new UploadController();

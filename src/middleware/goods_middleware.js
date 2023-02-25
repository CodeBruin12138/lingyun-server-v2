/**
 * 商品相关的中间件;
 */

// 数据库操作;

// 错误类型;
const { goodsFormatError } = require('../constant/goods_error_type_constant');
// 校验商品参数是否合规
const goodsFormatIsStandard = async (ctx, next) => {
  try {
    const {
      goods_name,
      goods_price,
      goods_num,
      goods_image,
      goods_classify,
      goods_data,
    } = ctx.request.body;
    if (!goods_name || !goods_price) {
      console.log('商品参数错误', ctx.request.body);
      ctx.app.emit('error', goodsFormatError, ctx);
      return;
    }
    if (!goods_num || !goods_image) {
      console.log('商品参数错误', ctx.request.body);
      ctx.app.emit('error', goodsFormatError, ctx);
      return;
    }
    if (!goods_classify || !goods_data) {
      console.log('商品参数错误', ctx.request.body);
      ctx.app.emit('error', goodsFormatError, ctx);
      return;
    }
  } catch (error) {
    console.log('商品参数错误', error);
    ctx.app.emit('error', goodsFormatError, ctx);
    return;
  }
  await next();
};
module.exports = {
  goodsFormatIsStandard,
};

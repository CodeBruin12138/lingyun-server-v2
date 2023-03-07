/**
 * 商品相关的控制器;
 */

// 数据库操作;
const {
  createGoods,
  updateGoods,
  delGoods,
  onGoods,
  getWholeGoodsList,
  getGoodsListByLike,
  getGoodsDetailS,
} = require('../service/goods_service');
// 错误类型;
const {
  addGoodsError,
  updateGoodsError,
  invalidGoodsId,
  offGoodsError,
  onGoodsError,
  getGoodsListError,
  invalidGoodsClassifyCode,
  getGoodsDetailError,
} = require('../constant/goods_error_type_constant');
class GoodsController {
  // 添加商品;
  async addGoodsController(ctx) {
    try {
      const {
        goods_name,
        goods_price,
        goods_num,
        goods_image,
        goods_classify,
        goods_data,
      } = ctx.request.body;
      const goods_shop = ctx.state.user.user_shop;
      const { createdAt, updatedAt, ...res } = await createGoods({
        goods_name,
        goods_price,
        goods_num,
        goods_image,
        goods_shop,
        goods_classify,
        goods_data,
      });
      ctx.body = {
        code: 0,
        message: '添加商品成功',
        result: res,
      };
    } catch (error) {
      console.error('添加商品失败', error);
      ctx.app.emit('error', addGoodsError, ctx);
      return;
    }
  }
  // 修改商品信息;
  async updateGoodsController(ctx) {
    try {
      const res = await updateGoods(ctx.params.id, ctx.request.body);
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改商品信息成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('修改商品信息失败', error);
      ctx.app.emit('error', updateGoodsError, ctx);
      return;
    }
  }
  // 店长直接删除商品;
  // async rootAdminDelController(ctx) {
  //   try {
  //     const res = await delGoods(ctx.params.id);
  //     if (res) {
  //       ctx.body = {
  //         code: 0,
  //         message: '删除商品成功',
  //         result: '',
  //       };
  //     } else {
  //       ctx.app.emit('error', invalidGoodsId, ctx);
  //       return;
  //     }
  //   } catch (error) {
  //     console.error('删除商品失败', error);
  //     ctx.app.emit('error', delGoodsError, ctx);
  //     return;
  //   }
  // }
  // 下架商品;
  async offGoodsController(ctx) {
    try {
      const res = await delGoods(ctx.params.id);
      if (res) {
        ctx.body = {
          code: 0,
          message: '下架商品成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('下架商品失败', error);
      ctx.app.emit('error', offGoodsError, ctx);
      return;
    }
  }
  // 上架商品;
  async onGoodsController(ctx) {
    try {
      const res = await onGoods(ctx.params.id);
      console.log(res);
      if (res) {
        ctx.body = {
          code: 0,
          message: '上架商品成功',
          result: '',
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('上架商品失败', error);
      ctx.app.emit('error', onGoodsError, ctx);
      return;
    }
  }

  // 获取商品列表(获取所有商品);
  async getGoodsListController(ctx) {
    try {
      // 获取用户请求的参数,如果不存在就使用默认值;
      const { pageNum = 1, pageSize = 10 } = ctx.request.query;
      const res = await getWholeGoodsList(pageNum, pageSize);
      ctx.body = {
        code: 0,
        message: '获取商品列表成功',
        result: res,
      };
    } catch (error) {
      console.error('获取商品列表失败', error);
      ctx.app.emit('error', getGoodsListError, ctx);
      return;
    }
  }
  // 根据用户兴趣获取商品列表;
  async getGoodsListByLikeController(ctx) {
    try {
      // 获取用户请求的参数,如果不存在就使用默认值;
      const { pageNum = 1, pageSize = 10, goods_classify } = ctx.request.query;
      const res = await getGoodsListByLike({
        pageNum,
        pageSize,
        goods_classify,
      });
      if (res.list.length > 0) {
        ctx.body = {
          code: 0,
          message: '获取商品列表成功',
          result: res,
        };
      } else {
        console.error('无效的商品分类码', ctx.request.query);
        ctx.app.emit('error', invalidGoodsClassifyCode, ctx);
        return;
      }
    } catch (error) {
      console.error('获取商品列表失败', error);
      ctx.app.emit('error', getGoodsListError, ctx);
      return;
    }
  }
  // 根据商品id获取商品详情;
  async getGoodsDetailController(ctx) {
    try {
      const res = await getGoodsDetailS(ctx.params.id);
      console.log(res);
      if (res) {
        ctx.body = {
          code: 0,
          message: '获取商品详情成功',
          result: res,
        };
      } else {
        ctx.app.emit('error', invalidGoodsId, ctx);
        return;
      }
    } catch (error) {
      console.error('获取商品详情失败', error);
      ctx.app.emit('error', getGoodsDetailError, ctx);
      return;
    }
  }
}

// 导出实例化对象;
module.exports = new GoodsController();

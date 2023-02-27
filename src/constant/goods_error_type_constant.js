/**
 * 商品相关的错误类型;
 */
module.exports = {
  addGoodsError: {
    code: '40001',
    message: '添加商品失败',
  },
  goodsFormatError: {
    code: '40002',
    message: '商品参数错误',
  },
  IsGoodsAdminError: {
    code: '40003',
    message: '非商品管理员修改出错',
  },
  updateGoodsError: {
    code: '40004',
    message: '修改商品信息失败',
  },
  invalidGoodsId: {
    code: '40005',
    message: '无效的商品ID',
  },
  delGoodsError: {
    code: '40006',
    message: '删除商品失败',
  },
  offGoodsError: {
    code: '40007',
    message: '下架商品失败',
  },
  onGoodsError: {
    code: '40008',
    message: '上架商品失败',
  },
  getGoodsListError: {
    code: '40009',
    message: '获取商品列表失败',
  },
};

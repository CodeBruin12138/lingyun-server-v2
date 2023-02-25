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
};

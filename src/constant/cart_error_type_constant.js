/**
 * 商品相关的错误类型;
 */
module.exports = {
  addCartError: {
    code: '50001',
    message: '添加购物车失败',
  },
  getCartListError: {
    code: '50002',
    message: '获取购物车列表失败',
  },
  updateCartError: {
    code: '50003',
    message: '更新购物车失败',
  },
  cartParameterError: {
    code: '50004',
    message: '购物车参数错误',
  },
  deleteCartError: {
    code: '50005',
    message: '删除购物车失败',
  },
  selectAllCartError: {
    code: '50006',
    message: '全选购物车失败',
  },
  unSelectAllCartError: {
    code: '50007',
    message: '取消全选购物车失败',
  },
};

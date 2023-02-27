/**
 * 地址相关的控制器;
 */
// 数据库操作;
const { addAddressService } = require('../service/addr_service');
// 错误类型;
const { addAddressError } = require('../constant/addr_error_type_constant');
class AddressController {
  // 添加地址;
  async addAddressController(ctx, next) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      // 获取地址信息;
      const { consignee, phone, address } = ctx.request.body;
      // 操作数据库;
      const result = await addAddressService({
        user_id,
        consignee,
        phone,
        address,
      });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '添加地址成功',
        result,
      };
    } catch (error) {
      console.error('添加地址失败', error);
      ctx.app.emit('error', addAddressError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new AddressController();

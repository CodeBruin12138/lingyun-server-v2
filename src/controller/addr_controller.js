/**
 * 地址相关的控制器;
 */
// 数据库操作;
const {
  addAddressService,
  getAddressListService,
  updateAddressService,
  deleteAddressService,
  setDefaultAddressService,
} = require('../service/addr_service');
// 错误类型;
const {
  addAddressError,
  getAddressListError,
  updateAddressError,
  deleteAddressError,
  setDefaultAddressError,
} = require('../constant/addr_error_type_constant');
class AddressController {
  // 添加地址;
  async addAddressController(ctx) {
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
  // 获取地址列表;
  async getAddressListController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      // 操作数据库;
      const result = await getAddressListService(user_id);
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '获取地址列表成功',
        result,
      };
    } catch (error) {
      console.error('获取地址列表失败', error);
      ctx.app.emit('error', getAddressListError, ctx);
      return;
    }
  }
  //更新地址;
  async updateAddressController(ctx) {
    try {
      //获取地址id;
      const { id } = ctx.params;
      // 获取地址信息;
      const { consignee, phone, address } = ctx.request.body;
      // 操作数据库;
      const result = await updateAddressService({
        id,
        consignee,
        phone,
        address,
      });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '更新地址成功',
        result,
      };
    } catch (error) {
      console.error('更新地址失败', error);
      ctx.app.emit('error', updateAddressError, ctx);
      return;
    }
  }
  // 删除地址;
  async deleteAddressController(ctx) {
    try {
      // 获取地址id;
      const { id } = ctx.params;
      // 操作数据库;
      const result = await deleteAddressService(id);
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '删除地址成功',
        result,
      };
    } catch (error) {
      console.error('删除地址失败', error);
      ctx.app.emit('error', deleteAddressError, ctx);
      return;
    }
  }
  //设置默认地址;
  async setDefaultAddressController(ctx) {
    try {
      // 获取用户信息;
      const user_id = ctx.state.user.id;
      // 获取地址id;
      const { id } = ctx.params;
      // 操作数据库;
      const result = await setDefaultAddressService({ user_id, id });
      // 返回结果;
      ctx.body = {
        code: 0,
        message: '设置默认地址成功',
        result,
      };
    } catch (error) {
      console.error('设置默认地址失败', error);
      ctx.app.emit('error', setDefaultAddressError, ctx);
      return;
    }
  }
}
// 导出实例化对象;
module.exports = new AddressController();

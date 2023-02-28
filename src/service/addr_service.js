/**
 * 地址相关的数据库操作;
 */

// 模型;
const AddressModel = require('../model/addr_model');
class AddressService {
  // 获取地址列表;
  async getAddressListService(user_id) {
    // 操作数据库;
    const result = await AddressModel.findAll({
      // 查询的字段;
      attributes: ['id', 'consignee', 'phone', 'address', 'is_default'],
      // 查询条件;
      where: {
        user_id,
      },
    });
    // 返回结果;
    return result;
  }
  // 添加地址;
  async addAddressService({ user_id, consignee, phone, address }) {
    // 操作数据库;
    const result = await AddressModel.create({
      user_id,
      consignee,
      phone,
      address,
    });
    // 返回结果;
    return result;
  }
  // 修改地址;
  async updateAddressService({ id, consignee, phone, address }) {
    // 操作数据库;
    const result = await AddressModel.update(
      // 修改的字段;
      {
        consignee,
        phone,
        address,
      },
      // 查询条件;
      {
        where: {
          id,
        },
      }
    );
    // 返回结果;
    return result;
  }
  //删除地址;
  async deleteAddressService(id) {
    // 操作数据库;
    const result = await AddressModel.destroy({
      // 查询条件;
      where: {
        id,
      },
    });
    // 返回结果;
    return result;
  }
  // 设置默认地址;
  async setDefaultAddressService({ user_id, id }) {
    // 先修改所有的都为非默认;
    // 操作数据库;
    await AddressModel.update(
      // 修改的字段;
      {
        is_default: false,
      },
      // 查询条件;
      {
        where: {
          user_id,
        },
      }
    );
    // 再修改指定的为默认;
    const result = await AddressModel.update(
      // 修改的字段;
      {
        is_default: true,
      },
      // 查询条件;
      {
        where: {
          id,
        },
      }
    );
    // 返回结果;
    return result;
  }
}
// 导出实例化对象;
module.exports = new AddressService();

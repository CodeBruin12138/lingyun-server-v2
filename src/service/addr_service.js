/**
 * 地址相关的数据库操作;
 */

// 模型;

class AddressService {
  // 获取地址列表;
  async getAddressListService() {}
  // 添加地址;
  async addAddressService({ user_id, consignee, phone, address }) {}
  // 删除地址;
  async deleteAddressService(data) {}
  // 修改地址;
  async updateAddressService(data) {}
}
// 导出实例化对象;
module.exports = new AddressService();

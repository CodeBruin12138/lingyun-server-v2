/**
 * 用户相关的数据库操作;
 */
class UserService {
  // 添加用户;
  async createUser() {
    return '写入数据库成功';
  }
}
// 导出实例化对象;
module.exports = new UserService();

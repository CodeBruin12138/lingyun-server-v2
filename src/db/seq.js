/**
 * 数据库连接;
 */
const { Sequelize } = require('sequelize');
// 实例化对象并配置数据库;
const seq = new Sequelize('lingyun', 'root', 'admin@12138', {
  host: 'localhost',
  dialect: 'mysql',
});
// 测试数据库连接;
// seq
//   .authenticate()
//   .then(() => {
//     console.log('数据库连接成功');
//   })
//   .catch(() => {
//     console.log('数据库连接失败');
//   });
module.exports = seq;

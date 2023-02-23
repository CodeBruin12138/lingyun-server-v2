const dotenv = require('dotenv');

// 读取.env文件到环境变量;
dotenv.config();
// 导出;
module.exports = process.env;

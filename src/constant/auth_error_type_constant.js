/**
 * 权限相关的错误类型;
 */
module.exports = {
  tokenExpiredError: {
    code: '20001',
    message: 'token已过期',
  },
  jsonWebTokenError: {
    code: '20002',
    message: '无效的token',
  },
  unsupportedFormat: {
    code: '20003',
    message: '不支持的文件格式',
  },
};

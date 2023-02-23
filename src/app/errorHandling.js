/**
 * 统一错误处理;
 */
module.exports = (error, ctx) => {
  /**
   * 如果需要按照网络标准错误状态码进行返回就打开下面的注释,对照错误类型表自行添加;
   */
  // let status = 500;
  // switch (error.code) {
  //   case '10001':
  //     status = 400;
  //     break;
  //   case '10002':
  //     status = 409;
  //     break;
  //     // 以此类推;
  //   default:
  //     status = 500;
  // }
  // ctx.status = status;
  ctx.body = error;
};

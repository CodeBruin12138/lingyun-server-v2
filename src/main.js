const { APP_PORT } = require('./config/config_default');
const app = require('./app/index');
app.listen(APP_PORT, () => {
  console.log(`凌云系统启动成功,当前端口为${APP_PORT}`);
});

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// 設定預設的 middleware (logger, static, cors)
server.use(middlewares);

// 為了讓部署後的 API 能正常運作，將資料掛載到路由上
server.use(router);

// Zeabur 會自動分配 PORT，所以我們優先讀取 process.env.PORT
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
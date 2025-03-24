const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// 路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 设置端口并启动服务器
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});
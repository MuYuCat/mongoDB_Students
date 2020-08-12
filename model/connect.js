
const mongoose = require('mongoose');
// 创建数据库
mongoose.connect('mongodb://localhost/playground',{ useNewUrlParser: true, useUnifiedTopology:true })
    .then(() =>console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))
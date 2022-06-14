// 1 导入mysql模块
const mysql = require('mysql')
// 2 建立链接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库ip
    user: 'root', // 登录数据库的账号
    password: '123456', // 密码
    database: 'my_db_01' // 数据库名
})
// 3 暴露出去
module.exports = db
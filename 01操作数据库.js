// 1 导入mysql模块
const mysql = require('mysql')
// 2 建立链接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库ip
    user: 'root', // 登录数据库的账号
    password: '123456', // 密码
    database: 'my_db_01' // 数据库名
})

// 3 测试MySQL是否正常
// db.query('select 1', (err, result) => {
//     // 报错
//     if(err) return console.log(err.message)
//     console.log(result)
// })

// 查询数据-结果是数组
db.query('select * from users', (err, result) => {
    // 报错
    if(err) return console.log(err.message)
    console.log(result)
})

// 导入数据库模块
const db = require('../db/index')
// 密码加密
const bcrypt = require('bcryptjs')

// 注册用户-处理函数
exports.regUser = (req, res) => {
    // 获取客户端的提交的数据
    const userinfo = req.body
    console.log(userinfo);
    // 对表单中的数据校验
    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, message: '用户名或密码不能为空' })
    }
    //  定义sql语句
    const sqlString = 'select * from ev_users where username=?'
    db.query(sqlString, userinfo.username, (err, results) => {
        if (err) {
            return res.send({ status: 1, message: err.message })
        }
        console.log(results);
        // 判断用户名称是否被暂用
        if (results.length > 0) {
            return res.send({ status: 1, message: '用户名称已被暂用' })
        }
    })
    // res.send('reduser ok')// 只能有一个send
    // 调用bcrypt.hashSync()对密码加密
    userinfo.username = bcrypt.hashSync(userinfo.password, 10)
}


// 处理函数
exports.login = (req, res) => {
    res.send('login ok')
}
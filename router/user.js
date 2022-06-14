const express = require('express')
const router = express.Router()

// 导入处理函数
const user_hanhler = require('../router_handler/user')

// 注册接口
router.post('/reguser', user_hanhler.regUser)

// 登录接口
router.post('/login', user_hanhler.login)

module.exports = router
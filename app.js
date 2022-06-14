const express = require('express')
const app = express()

// 跨域中间件
const cors = require('cors')
app.use(cors())

// 解析表单数据中间件-只解析application/x-www-form-urlencoded格式的数据
app.use(express.urlencoded({ extended: false }))

// 路由
const userRouter = require('./router/user')
app.use('/api', userRouter)

app.listen(3000, () => {
    console.log('server at http://127.0.0.1:3000');
})
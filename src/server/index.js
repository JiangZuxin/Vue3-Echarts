// 引入express
const express = require('express')
const app = express()
// 引入跨域
const cors = require('cors')

// 引用路由文件
const chartOne = require('./router/one.js')
const chartTwo = require('./router/two.js')
const chartThree = require('./router/three.js')
const chartFour = require('./router/four.js')
const chinamap = require('./router/map.js')

// 挂载跨域
app.use(cors())

// 挂载路由
app.use('/one', chartOne)
app.use('/two', chartTwo)
app.use('/three', chartThree)
app.use('/four', chartFour)
app.use('/china', chinamap)

// 挂载端口
app.listen(3000)

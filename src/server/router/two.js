const express = require('express')
const router = express.Router()
// 引用数据
const data = require('../mock/two.json')

// 配置路由
router.get('/data', function (req, res) {
  res.send({ msg: '第一个接口', data })
})

// 暴露路由
module.exports = router

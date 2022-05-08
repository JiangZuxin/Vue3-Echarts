import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引用flexible
import 'lib-flexible/flexible'

// 引用echarts
import * as echarts from 'echarts'

// 引入axios
import axios from 'axios'

const app = createApp(App)

// 设置请求基准路径
axios.defaults.baseURL = 'http://120.77.13.205:3000/'

// 全局设置axios
app.config.globalProperties.$http = axios

// 全局设置echarts
app.config.globalProperties.$echarts = echarts

// 全局配置页面路由
app.use(store)
app.use(router)

app.mount('#app')

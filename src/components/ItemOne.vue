<template>
  <div>
    <h2>销售总计图</h2>
    <div class="chart" id="chartDom"></div>
  </div>
</template>

<script>
import { onMounted, reactive, getCurrentInstance } from 'vue'

export default {
  setup() {
    // 通过getCurrentInstance()方法中的proxy属性可以代替this（setup方法中不能用this） 解构赋值
    let { proxy } = getCurrentInstance()
    //  创建接受请求的数据于接受x轴的数据于y轴的数据 别忘了return
    let data = reactive({})
    let xdata = reactive([])
    let ydata = reactive([])
    // 设置数据请求方法 不要忘了return
    async function getState() {
      data = await proxy.$http.get('/one/data')
      // console.log(data.data.data.chartData)
    }

    // 创建处理数据的方法
    function setData() {
      // 遍历数据并且去除对应的值
      xdata = data.data.data.chartData.map((v) => v.title)
      ydata = data.data.data.chartData.map((v) => v.num)
      // console.log('x', xdata)
      // console.log('y', ydata)
    }

    onMounted(() => {
      // 初始化echarts
      let myChart = proxy.$echarts.init(document.getElementById('chartDom'))
      getState().then(() => {
        setData()
        //绘制图表
        myChart.setOption({
          xAxis: {
            type: 'value',
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            // 隐藏x轴分隔线
            splitLine: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            // 插入数据
            data: xdata
          },
          // 配置图标的位置  不包含坐标轴中的文字
          grid: {
            top: '3%',
            left: '1%',
            bottom: '3%',
            right: '6%',
            containLabel: true // 包含坐标轴中的文字
          },
          series: [
            {
              data: ydata,
              type: 'bar',
              //   设置图形上的文字
              label: {
                show: true, // 显示数值
                position: 'right', //位置
                axisName: {
                  color: '#fff'
                }
              },
              // 设置柱状图区域样式
              itemStyle: {
                // 如果传递数组，则需要传递四个元素，依次表示 左上，右上，右下、左下
                borderRadius: [0, 20, 20, 0],
                // color:"red"如果写死值那么是一个固定的颜色
                // 我们需要设置渐变色使用
                // new echarts.graphic.LinearGradient(a,b,c,d,arr)来进行设置
                // a ,b,c,d为0或1
                // a:1 arr中的颜色右到左
                // c:1 arr中的颜色左到右
                // b:1 arr中的颜色下到上
                // d:1 arr中的颜色上到下
                color: new proxy.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: '#005eaa'
                  },
                  {
                    offset: 0.5,
                    color: '#339ca8'
                  },
                  {
                    offset: 1,
                    color: '#cda819'
                  }
                ])
              }
            }
          ],
          tooltip: {
            show: true,
            borderRadius: 10
          }
        })
        // 让echarts根据浏览器大小改变动态该改变
        window.onresize = function () {
          //自适应大小
          myChart.resize()
        }
      })
    })

    return { getState, data, xdata, ydata, setData }
  }
}
</script>

<style lang="less" scoped>
h2 {
  /* 48像素 */
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.25rem;
}
.chart {
  /* 高度360 */
  height: 4.5rem;
  // background-color: gray;
}
</style>

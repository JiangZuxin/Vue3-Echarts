<template>
  <div>
    <h2>周库存总计图</h2>
    <div class="chart" id="chartDomd"></div>
  </div>
</template>

<script>
import { reactive, getCurrentInstance, onMounted } from 'vue'
export default {
  setup() {
    // 通过getCurrentInstance()方法中的proxy属性可以代替this（setup方法中不能用this） 解构赋值
    let { proxy } = getCurrentInstance()
    let data = reactive({})
    async function getState() {
      data = await proxy.$http.get('four/data')
    }

    onMounted(() => {
      getState().then(() => {
        // console.log('柱子', data.data.data.chartData)

        let myChart = proxy.$echarts.init(document.getElementById('chartDomd'))
        myChart.setOption({
          xAxis: {
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            type: 'category',
            data: data.data.data.chartData.day
          },
          yAxis: {
            // 设置坐标轴上文字颜色
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            type: 'value',
            // 隐藏y轴分隔线
            splitLine: {
              show: false
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              //设置鼠标选中样式为阴影
              type: 'shadow'
            }
          },
          legend: {}, //图例
          grid: {
            //位置
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true //设置包含坐标轴
          },
          series: [
            {
              name: '服饰',
              type: 'bar',
              data: data.data.data.chartData.num.Chemicals,
              stack: 'total',
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: 'series' //聚焦当前高亮的数据所在的系列的所有图形。
              }
            },
            {
              name: '数码',
              type: 'bar',
              data: data.data.data.chartData.num.Clothes,
              stack: 'total',
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: 'series' //聚焦当前高亮的数据所在的系列的所有图形。
              }
            },
            {
              name: '家电',
              type: 'bar',
              data: data.data.data.chartData.num.Electrical,
              stack: 'total',
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: 'series' //聚焦当前高亮的数据所在的系列的所有图形。
              }
            },
            {
              name: '家居',
              type: 'bar',
              data: data.data.data.chartData.num.digit,
              stack: 'total',
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: 'series' //聚焦当前高亮的数据所在的系列的所有图形。
              }
            },
            {
              name: '日化',
              type: 'bar',
              data: data.data.data.chartData.num.gear,
              stack: 'total',
              label: {
                //图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                show: true
              },
              emphasis: {
                //高亮的图形样式和标签样式。
                focus: 'series' //聚焦当前高亮的数据所在的系列的所有图形。
              }
            }
          ]
        })
        // 让echarts根据浏览器大小改变动态该改变
        window.onresize = function () {
          //自适应大小
          myChart.resize()
        }
      })
    })
    return { getState, data }
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

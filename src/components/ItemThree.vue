<template>
  <div>
    <h2>库存总计图</h2>
    <div class="chart" id="chartDomb"></div>
  </div>
</template>

<script>
import { onMounted, reactive, getCurrentInstance } from 'vue'
export default {
  setup() {
    // 通过getCurrentInstance()方法中的proxy属性可以代替this（setup方法中不能用this） 解构赋值
    let { proxy } = getCurrentInstance()
    let data = reactive({})

    //获取数据
    async function getState() {
      data = await proxy.$http.get('three/data')
    }

    //在dom加载完成后动态展示图标
    onMounted(() => {
      getState().then(() => {
        // console.log('饼状图：', data.data.data.chartData)

        //初始化echarts
        let myChart = proxy.$echarts.init(document.getElementById('chartDomb'))
        myChart.setOption({
          legend: {
            //设置图例
            top: 'bottom' //放到最下面
          },
          series: [
            {
              //   name: 'Nightingale Chart',
              type: 'pie', //饼图
              radius: [10, 100], //饼图的半径数组的第一项是内半径，第二项是外半径
              center: ['50%', '45%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
              roseType: 'area', //设置成玫瑰图
              itemStyle: {
                borderRadius: 10 //用于指定饼图扇形区块的内外圆角半径，
              },
              data: data.data.data.chartData //数据
            }
          ],
          // 设置饼状图的颜色
          color: [
            '#c12e34',
            '#e6b600',
            '#0098d9',
            '#2b821d',
            '#005eaa',
            '#339ca8'
          ],
          //提示框，鼠标悬浮交互时的信息提示
          tooltip: {
            show: true, //默认值true，可选为：true（显示） | false（隐藏）
            borderRadius: 10 //提示边框圆角，单位px，默认为4
          }
        })
        // 让echarts根据浏览器大小改变动态该改变
        window.onresize = function () {
          //自适应大小
          myChart.resize()
        }
      })
    })

    return {
      getState,
      data
    }
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

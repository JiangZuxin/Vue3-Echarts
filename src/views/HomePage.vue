<template>
  <div>
    <header>
      <h1>大数据可视化--vue3.0与echarts</h1>
    </header>
    <!-- 大容器 -->
    <section class="container">
      <!-- 左 -->
      <section class="itemLeft">
        <!-- 使用组件 -->
        <ItemPage>
          <item-one></item-one>
        </ItemPage>
        <ItemPage>
          <item-two></item-two>
        </ItemPage>
      </section>
      <!-- 中 -->
      <section class="itemCenter">
        <MapPage></MapPage>
      </section>
      <!-- 右 -->
      <section class="itemRight">
        <ItemPage>
          <item-three></item-three>
        </ItemPage>
        <ItemPage>
          <item-four></item-four>
        </ItemPage>
      </section>
    </section>
  </div>
</template>

<script>
import ItemPage from '../components/ItemPage.vue'
import ItemOne from '../components/ItemOne.vue'
import ItemTwo from '../components/ItemTwo.vue'
import ItemThree from '../components/ItemThree.vue'
import ItemFour from '../components/ItemFour.vue'
import MapPage from '../components/MapPage.vue'

export default {
  name: 'HomePage',
  components: {
    ItemPage,
    ItemOne,
    ItemTwo,
    ItemThree,
    ItemFour,
    MapPage
  }
}
</script>

<style lang="less" scoped>
// 头部样式
header {
  height: 0.625rem;
  min-width: 1200px;
  // 设置头部背景透明淡蓝色
  background-color: rgba(0, 0, 255, 0.2);
  // 设置标题h1样式
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 0.625rem;
  }
}
// 主体容器样式
.container {
  // 这里就不需要设置使用rem了 使用rem那么页面就会根据html根结点大小改变而改变了
  min-width: 1300px;
  min-height: 690px;
  margin: 0 auto;
  // 盒子上10px，左右10px，下0内边距
  padding: 0.125rem 0.125rem 0;

  display: flex;
  // 设置左中右子盒子占比
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    // 高度848px
    height: 10.6rem;
    // border: 1px solid blue;
    // 内边距10px
    padding: 0.15rem;
    // 外边距
    margin: 0.1565rem 0.1978rem 0.1978rem 0.1978rem;
  }
}
</style>

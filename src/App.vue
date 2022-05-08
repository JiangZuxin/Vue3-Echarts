<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body {
  // 设置整体页面背景
  background: url('./assets/bg.jpg') top center no-repeat;
}
</style>

<template>
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ItemPage'
}
</script>

<style lang="less" scoped>
.item {
  height: 5.125rem;
  width: 6.25rem;
  border: 1px solid blue;
  margin: 0.25rem;
  background: rgba(12, 130, 255, 0.85);
}
</style>

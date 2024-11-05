<template>
  <div class="base-title">
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'BaseTitle',
  props: {
    title: String
  }
};
</script>

<style lang="less" scoped>
.base-title {
  width: 100%;
  height: 50px;
  color: var(--primary-color);
}
</style>

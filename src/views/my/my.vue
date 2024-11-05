<template>
  <div class="page-container">
    <div class="page-content"></div>
    <NavBar :active="3" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

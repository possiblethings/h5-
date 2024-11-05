<template>
  <div class="page-container">
    <FallBack>
      <template #title> User registration </template>
    </FallBack>
  </div>
</template>

<script>
import FallBack from '@/components/FallBack';

export default {
  components: { FallBack }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

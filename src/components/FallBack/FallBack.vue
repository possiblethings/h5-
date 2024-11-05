<template>
  <div class="head-fall-back">
    <div class="handle-back" @click="$router.go(-1)">
      <img class="icon" :src="require('./left.png')" alt="back" />
    </div>
    <div class="title-text">
      <slot name="title"></slot>
    </div>
    <div class="other">
      <slot name="other"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FallBack',
  props: {
    backPath: String
  }
};
</script>

<style lang="scss" scoped>
.head-fall-back {
  position: relative;
  width: 100%;
  /* height: 50px; */
  padding: 20px 20px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .handle-back {
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      width: 80%;
      height: 80%;
    }
  }
  .title-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 18px;
  }
}
</style>

<template>
  <div class="nav-bar">
    <template v-for="(item, index) in menus">
      <div :key="index" class="nav-item" @click="handleChangeMenu(item.path)">
        <div class="nav-icon">
          <img
            class="icon"
            :src="
              require(`@/assets/img/navbar/${item.icon + (active === index ? '_active' : '')}.png`)
            "
            alt="icon"
          />
        </div>
        <div class="nav-label" :class="{ active: index === active }">{{ item.label }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    active: Number
  },
  data() {
    return {
      menus: [
        {
          label: this.$t('navbar.home'),
          icon: 'icon_home',
          path: '/home'
        },
        {
          label: this.$t('navbar.shop'),
          icon: 'icon_shop',
          path: '/shop'
        },
        {
          label: this.$t('navbar.record'),
          icon: 'icon_record',
          path: '/record'
        },
        {
          label: this.$t('navbar.my'),
          icon: 'icon_user',
          path: '/my'
        }
      ]
    };
  },
  methods: {
    handleChangeMenu(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

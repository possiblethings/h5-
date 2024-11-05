<template>
  <div class="page-container">
    <div class="page-content">
      <div class="add"></div>
    </div>
    <NavBar :active="0" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
// import { fetchLogin } from '@/service/login';
export default {
  components: {
    NavBar
  },
  data() {
    return {

    }
  },
  methods: {
    async getData() {
      // Request
      let params = {
        password: "123456", 
        phone:"qq@qq.com",
        token :""
      }
      let res = await fetchLogin(params)
      console.log(res,'res')
        console.log('aaaa')
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>

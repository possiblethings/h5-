<template>
  <div class="login-container">
    <div class="form-box">
      <div class="title-box">
        <div class="title">用户登录</div>
        <div class="logo-bg" v-if="pageTab=='login'"></div>
      </div>
      <template v-if="pageTab=='login'">
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="lgoinPerson.phone"  placeholder="电子邮件"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="lgoinPerson.password" placeholder="密码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-checked">
            <div class="left-box">
              <div class="checkbox">
                <Checkbox v-model="checkbox" />
              </div>
              <label class="title">记住密码</label>
            </div>
            <div class="right-box">
              <label @click="pageTab='password'" class="forget-password">忘记密码?</label>
            </div>
          </div>
        </div>
        <div class="submit-operation">
          <div class="submit-btn" @click="login">登录</div>
          <div class="register-link" @click="pageTab='register'">现在注册</div>
        </div>
      </template>
      <template v-if="pageTab=='register'">
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="registerPerson.phone"  placeholder="电子邮件"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="registerPerson.password" placeholder="密码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="registerPerson.invite_code" placeholder="验证登录密码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="registerPerson.confirmPassword" placeholder="推荐代码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="registerPerson.code" placeholder="验证码"/>
          </div>
        </div>
        <div class="submit-operation">
          <div class="submit-btn" >现在注册</div>
          <div class="register-link" @click="pageTab='login'">也有账号</div>
        </div>
      </template>
      <template v-if="pageTab=='password'">
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="passwordPerson.phone"  placeholder="电子邮件"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="passwordPerson.code" placeholder="验证码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="passwordPerson.password" placeholder="新密码"/>
          </div>
        </div>
        <div class="input-item">
          <div class="form-input">
            <input class="uni-input-input" v-model="passwordPerson.confirmPassword" placeholder="确认新密码"/>
          </div>
        </div>
        <div class="submit-operation">
          <div class="submit-btn">确定</div>
          <!-- <div class="register-link" @click="pageTab='login'">登录</div> -->
          <div class="register-link" @click="login">登录</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { Form , Field ,Checkbox,Toast  } from 'vant';
import { fetchLogin } from '@/service/user';
import { localCache,sessionCache } from '@/utils/storage';
export default {
  name: 'Login',
  components:{
    Form,
    Field,
    Checkbox
  },
  data(){
    return{
      pageTab:'login',
      checkbox:true,
      lgoinPerson:{
        password:'',
        phone:'',
        token:''
      },
      registerPerson:{
        password:'',
        phone:'',
        invite_code:'',
        confirmPassword:'',
        code:''
      },
      passwordPerson:{
        type:'password',
        token:'',
        code: '',
        confirmPassword: '',
        password: '',
        phone: ''
      }
    }
  },
  methods:{
    async login(){
      let params = {
        password:this.lgoinPerson.password,
        phone:this.lgoinPerson.phone,
        token:this.lgoinPerson.token,
      }
      let res = await fetchLogin(params)
      if(res.status_code == 400){
        Toast(`${res.message}`)

      }else if(res.status_code == 200){
        Toast(`${res.message}`)
        sessionCache.setItem('token',res.data.token);
        this.$router.push('/home');
      }
      console.log(res,'res')
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
<style scoped>
.checkbox >>> .van-checkbox__icon{
  font-size: 3rem;
  margin-right: 8px;
}
.checkbox >>> .van-checkbox__icon--round .van-icon {
  border-radius:0px
}
.checkbox >>> .van-checkbox__icon--checked .van-icon{
  border: 1px solid #1ea77e;
  background-color: #1ea77e !important;
  color: #fff;
}
</style>
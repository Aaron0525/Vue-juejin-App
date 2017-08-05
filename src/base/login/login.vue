<template>
  <transition name="move">
    <div v-show="showFlag" class="login">
      <div class="login-head"><i class="iconfont" @click="hide()">&#xe687;</i></div>
      <div class="logo"></div>
      <div class="login-container">
        <input type="text" name="ueser-name" class="username-name" placeholder="邮箱/手机号">
        <input type="password" name="password" class="password" placeholder="密码">
      </div>
      <div class="login-Btn-container">
        <input type="button" name="login-Btn" class="login-Btn" value="登录">
        <div class="login-select">
          <span class="forget">忘记密码？</span>
          <span class="reg-id">注册账号</span>
        </div>
      </div>
      <div class="other-login">
        <div class="other-login-title">其他登陆方式</div>
        <div class="other-login-ic">
          <i class="iconfont">&#xe6a1;</i>
          <i class="iconfont wechat-login">&#xe632;</i>
          <i class="iconfont">&#xe609;</i>
        </div>
      </div>
      <div class="login-foot">
        <div class="APP-name">掘金 · juejin.im</div>
        <div class="login-agreement">已阅读并同意软件许可服务协议</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        showFlag: false
      }
    },
    props: {

    },
    watch: {

    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      Update() {
        this.$emit('')
      }

    },
    components:{
    }
  };
</script>

<style>
  .login {
    z-index: 1300;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: #FFF;
  }
  .login-head {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .login-head i {
    position: absolute;
    padding: 0 10px 0 10px;
    display: block;
    transform:rotate(180deg);
    color: #007AFF;
    font-size: 20px;
  }
  .login .logo {
    height: 150px;
    width: 100%;
    background: url('./logo.png') center 20px no-repeat;
    background-size: 20%;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .login-container {
    width: 100%;
    height: 100px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .login-container .username-name {
    width: 90%;
    height: 50px;
    margin-left: 10%;
    outline: none;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .login-container .password {
    width: 90%;
    height: 50px;
    margin-left: 10%;
    outline: none;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .login-Btn-container {
    width: 100%;
    padding-top: 20px;
    text-align: center;
  }
  .login-Btn-container .login-Btn {
    width: 85%;
    height: 40px;
    border-radius: 5px;
    outline: none;
    background-color: #007FFF;
    color: #fff;
    letter-spacing: 3px;
  }
  .login-Btn-container .login-select {
    height: 20px;
    padding-top: 20px;
  }
  .login-Btn-container .login-select .forget {
    float: left;
    margin-left: 7.5%;
  }
  .login-Btn-container .login-select .forget {
    float: left;
    margin-left: 7.5%;
  }
  .login-Btn-container .login-select .reg-id {
    float: right;
    margin-right: 7.5%;
    color: #007FFF;
  }
  .other-login {
    padding-top: 80px;
    text-align: center;
  }
  .other-login-title {
    color: #000;
    padding-bottom: 20px;
  }
  .login-foot {
    text-align: center;
  }
  .other-login-ic i{
    font-size: 26px;
    color: #007FFF;
  }
  .wechat-login {
    padding-left: 30px;
    padding-right: 30px;
  }
  .login-foot {
    padding-top: 30px;
  }
  .login-foot .APP-name {
    color: #CAC7C7;
    width: 130px;
    line-height: 22px;
    font-size: 14px;
    background: #F3F0F0;
    margin: 0 auto;
  }
  .login-agreement {
    padding-top: 40px;
    font-size: 12px;
    color: #D4D0D0;
  }
</style>
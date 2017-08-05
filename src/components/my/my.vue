<template>
  <div id="my">
    <div class="my_title">我的</div>
    <div class="my_header">
        <div class="user_img" @click="selectLogin()"><img src="./me.jpg"></div>
        <div class="des" @click="selectPersonalpage()">
            <p class="user_name">途中人</p>
            <span class="user_work">前端工程师</span>
        </div>
    </div>
    <login ref="login"></login>
    <personalpage ref="personalpage"></personalpage>
    <div class="my_items">
        <ul>
            <li><i class="iconfont my_ic">&#xe65e;</i>我喜欢的</li>
            <li><i class="iconfont my_ic">&#xe602;</i>收藏集</li>
            <li><i class="iconfont my_ic read">&#xe6e2;</i>阅读过的文章</li>
            <li><i class="iconfont my_ic manage">&#xe6ba;</i>标签管理</li>
        </ul>
    </div>
    <div class="my_set">
        <ul>
            <li class="feedback"><i class="iconfont my_ic">&#xe60f;</i>意见反馈</li>
            <li><i class="iconfont my_ic">&#xe676;</i>设置</li>
        </ul>
    </div>
  </div>
</template>

<script>
  import personalpage from 'base/personalpage/personalpage'
  import login from 'base/login/login'

  export default {
    data() {
      return {

      }
    },
    props: {

    },
    created(){

    },
    methods: {
      selectPersonalpage() {
        this.$refs.personalpage.show()
      },
      selectLogin() {
        this.$refs.login.show()
      }
    },
    components: {
      personalpage,
      login
    }
  }
</script>

<style>
#my {
    -webkit-overflow-scrolling: touch;
}
.my_title {
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    color: #000;
    /* border-bottom: 0.5px solid #A7A7AB; */
    background-color: #f5f5f7;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.my_header {
    position: relative;
    display: flex;
    height: 100px;
    width: 100%;
    margin-top: 20px;
    background: #fff;
}
.my_header .user_img {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    margin-top: 25px;
}
.user_img img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.my_header .des {
    flex: 1;
    padding-left: 20px;
    padding-top: 30px;
    background: url('./right2.png') 92% center no-repeat;
    background-size: 4%;
}
.my_header .des p{
    font-size: 18px;
    line-height: 20px;
    font-weight: 500;
    color: #000;
    padding-bottom: 2px;
}
.my_header .des .user_work{
    font-size: 14px;
    font-weight: 400;
}
.my_header .des i{
    position: absolute;
    display: inline-block;
    right: 10px;
}
.my_items {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
}
.my_items ul li{
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #000;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.my_ic {
    color: #ABB4BF;
    font-size: 18px;
    padding-left: 20px;
    padding-right: 30px;
}
.my_set {
    width: 100%;
    background-color: #fff;
    margin-top: 20px;
}
.my_set ul li{
    display: block;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #000;
}
.feedback {
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
</style>

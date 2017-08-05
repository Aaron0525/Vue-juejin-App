<template>
  <transition name="move">
    <div v-show="showFlag" class="personalpage">
      <div class="personalpage-head"><i class="iconfont" @click="hide">&#xe687;</i>个人主页</div>
      <div class="personalpage-infor">
        <div class="top">
          <div class="top-user-img"><img src="./me.jpg"></div>
          <div class="top-user-des">
            <span class="top-user-name">途中人</span>
            <span class="top-user-zhiye">前端工程师</span>
            <span class="top-user-jie">待业程序员!</span>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-focus"><span class="focus-num">34</span>关注</div>
          <div class="bottom-focused"><span class="focused-num">2</span>关注者</div>
          <span class="edit" @click="selectInformation()">编辑</span>
        </div>
      </div>
      <information ref="information"></information>

      <div class="personal-list state"><span>动态</span><i class="iconfont">&#xe687;</i></div>
      <div class="personal-list like-aiticle"><span>喜欢的文章</span><i class="iconfont">&#xe687;</i></div>
      <div class="personal-list"><span>关注的标签</span><i class="iconfont">&#xe687;</i></div>
      <div class="personal-list website"><span><i class="iconfont">&#xe61c;</i></span>www.upyang.com<i class="iconfont">&#xe687;</i></div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import information from 'base/information/information'

  export default {
    data() {
      return {
        showFlag: false
      }
    },
    props: {

    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      selectInformation() {
        this.$refs.information.show()
      }
    },
    components: {
      information
    }
  }
</script>

<style>
.personalpage {
  z-index: 1100;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #efeff4;
}
.personalpage-head {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #000;
  background-color: #f5f5f7;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.personalpage-head i {
  position: absolute;
  padding: 0 10px 0 10px;
  display: block;
  transform:rotate(180deg);
  color: #007AFF;
  font-size: 20px;
  font-weight: 600;
}
.personalpage-infor {
  height: 150px;
  background: #fff;
}
.personalpage-infor .top {
  width: 100%;
  height: 100px;
}
.top-user-img {
  float: left;
  width: 60px;
  height: 60px;
  margin-left: 20px;
  margin-top: 20px;
}
.top-user-img img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.top-user-des {
  width: 100%;
  height: 80px;
  margin-left: 80px;
  padding-left: 20px;
  padding-top: 20px;
}
.top-user-des span {
  display: block;
}
.top-user-name {
  color: #000;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
}
.top-user-zhiye {
  color: #000;
  line-height: 20px;
}
.top-user-jie {
  font-size: 14px;
  line-height: 16px;
}
.personalpage-infor .bottom {
  height: 50px;
}
.personalpage-infor .bottom span {
  display: block;
  font-size: 18px;
  color: #000;
}
.bottom-focus {
  float: left;
  width: 50px;
  height: 100%;
  padding-left: 20px;
  font-size: 14px;
}
.bottom-focused {
  float: left;
  width: 50px;
  padding-left: 28px;
  height: 100%;
  font-size: 14px;
}
.edit {
  float: right;
  width: 70px;
  height: 25px;
  color: #007AFF !important;
  font-size: 15px !important;
  border: 1px solid #007AFF;
  border-radius: 5px;
  line-height: 25px;
  text-align: center;
  margin-right: 20px;
  margin-top: 2px;
}
.state {
  margin-top: 10px;
  margin-bottom: 10px;
}
.personal-list {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.personal-list span {
  float: left;
  display: block;
  padding-left: 20px;
  color: #000;
}
.personal-list i {
  float: right;
  margin-right: 20px;
}
.website {
  margin-top: 10px;
  margin-bottom: 10px;
}
.like-aiticle {
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
</style>
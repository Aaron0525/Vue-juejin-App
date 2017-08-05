<template>
  <transition name="move">
    <div v-show="showFlag" class="listdetail">
      <div class="detail-head">
        <div class="Btn-back" @click="hide"><i class="iconfont">&#xe607;</i></div>
        <div class="author-infor">
          <div class="author-img"><img :src="list.author_img" ></div>
          <span>{{list.author}}</span>
        </div>
        <div class="Btn-fenxiang"></div>
      </div>
      <div class="detail-content">
        <div class="head-img">
          <img :src="list.list_img">
        </div>
        <div class="content-read">
          <div class="list-title">{{list.title}}</div>
          <div class="main-read">{{list.read}}</div>
        </div>
      </div>
      <div class="foot">
        <div class="font-item"><i class="iconfont">&#xe600;</i></div>
        <div class="font-item"><i class="iconfont">&#xe65a;</i></div>
        <div class="font-item"><i class="iconfont">&#xe602;</i></div>
        <div class="like-num">喜欢 {{list.like}}</div>

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
      list: {
        type: Object
      }
    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      }
    }
  };
</script>

<style>
  .listdetail {
    z-index: 1100;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    transform: translate3d(0, 0, 0);
  }
  .move-enter-active, .move-leave-active {
      transition: all 0.2s linear;
  }
  .move-enter, .move-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .listdetail .detail-head {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #f5f5f7;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
    color: #000;
  }
  .detail-head .Btn-back {
    float: left;
    height: 100%;
    width: 40px;
    text-align: center;
  }
  .Btn-back i{
    transform:rotate(180deg);
    color: #007AFF;
    font-size: 20px;
    font-weight: 600;
  }
  .Btn-fenxiang {
    float: right;
    width: 60px;
    height: 100%;
    background: url(./fenxiang.png) center center no-repeat;
    background-size: 32%;
  }
  .author-infor {
    flex: 1;
  }
  .author-infor .author-img {
    float: left;
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .author-infor .author-img img{
    display: block;
    width: 30px;
    height: 30px;
    margin-top: 5px;
    border-radius: 50%;
  }
  .author-infor  span {
    float: left;
    display: inline-block;
    width: 50px;
    font-size: 15px;
  }
  .detail-content .head-img {
    height: 180px;
    width: 100%;
  }
  .detail-content .head-img img{
    height: 100%;
    width: 100%;
  }
  .detail-content .content-read {
    color: #000;
    padding: 20px 15px 20px 15px;
  }
  .content-read .list-title {
    padding-bottom: 30px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
  }
  .main-read {
    font-size: 15px;
    line-height: 20px;
  }
  .foot {
    z-index: 1300;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 48px;
    line-height: 48px;
    background-color: #F5F5F5;
    box-shadow: inset 0px 1px 1px -1px #A7A7AB;
  }
  .foot .font-item {
    flex: 1;
    text-align: center;
  }
  .foot .font-item i{
    font-size: 22px;
  }
  .foot .like-num {
    float: left;
    margin-right: 20px;
    width: 55%;
    font-size: 14px;
    text-align: right;
    height: 100%;
  }
</style>

<template>
  <div class="afterend">
    <scroll class="afterend-roll-container" :data="home">
    <div class="afterend-container">
      <div class="aftertend-hot">
          <div class="aftertend-hot-head">
              <div class="left"><i class="iconfont">&#xe67c;</i>后端热门</div>
              <div class="right"><i class="iconfont refresh">&#xe6d3;</i><i class="iconfont">&#xe6bf;</i></div>
          </div>
          <div v-for="item in home.recommend">
              <div class="aftertend-hot-list" @click="selectlist(item)">
                  <div class="recommend-infor">
                      <p>{{item.title}}</p>
                      <div class="recommend-infor-ic">
                          <span><i class="iconfont">&#xe641;</i>{{item.like}}</span>
                          <span><i class="iconfont">&#xe631;</i>{{item.author}}</span>
                          <span><i class="iconfont">&#xe603;</i>{{item.time}}前</span>
                      </div>
                  </div>
                  <div class="recommend-img">
                      <img :src="item.image">
                  </div>
              </div>
          </div>
      </div>
      <div class="newslist-container">
      <div @click="selectlist(item)" class="newslist" v-for="item in find.content">
          <div class="recommend-infor">
            <p>{{item.title}}</p>
            <span>{{item.like}}人喜欢·{{item.author}}·{{item.time}}前</span>
            <img v-lazy="item.image">
          </div>
      </div>
      <listdetail :list="selectedlist" ref="listdetail"></listdetail>
  </div>
    </div>
    </scroll>
    <listdetail :list="selectedlist" ref="listdetail"></listdetail>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import {ERR_OK} from 'api/config'
  import newslist from 'base/newslist/newslist'
  import listdetail from 'base/listdetail/listdetail'


  export default {
    data() {
        return {
          find: {
            type: Object
          },
          home: {
            type: Object
          },
          selectedlist: {}
        };
    },
    props: {

    },
    created() {
      this.$http.get('./api/find').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.find = response.data;
          }
      });
      this.$http.get('./api/home').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.home = response.data;
            console.log(this.home);
          }
      });
    },
    methods: {
      selectlist(item) {
        this.selectedlist = item;
        this.$refs.listdetail.show();
      }
    },
    components: {
      newslist,
      listdetail,
      Scroll

    }
  }
</script>

<style>
  .afterend {
    height: auto;
    margin-top: 50px;
    overflow: hidden;
  }
  .afterend-roll-container {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 10px;
  }
  .aftertend-hot {
    width: 100%;
    height: auto;
    background: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  .aftertend-hot-head {
    width: 100%;
    height: 37px;
    line-height: 37px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .aftertend-hot-head .left {
    float: left;
    color: #007AFF;
    font-size: 15px;
    padding-left: 10px;
  }
  .aftertend-hot-head .left i{
    padding-right: 5px;
    font-size: 15px;
  }
  .aftertend-hot-head .right {
    float: right;
    padding-right: 10px;
  }
  .aftertend-hot-head .right i {
    padding: 8px 5px 8px 10px;
    font-size: 20px;
    font-weight: 600;
    color: #E0E0E0;
  }
  .aftertend-hot-list {
    position: relative;
    height: 100px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .aftertend-hot-list .recommend-infor {
    float: left;
    width: 70%;
    padding-top: 20px;
    padding-left: 12px;
  }
  .recommend-infor-ic {
    padding-top: 5px;
  }
  .recommend-infor-ic span {
    display: inline-block;
    height: 14px;
    line-height: 14px;
    padding-right: 5px;
    font-size: 10px;
    color: #E0E0E0;
  }
  .recommend-infor-ic span i {
    font-size: 14px;
  }
  .recommend-infor p {
    color: #000;
    line-height: 20px;
  }
  .aftertend-hot-list .recommend-img {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 12px;
    top: 20px;
  }
  .aftertend-hot-list .recommend-img img {
    width: 60px;
    height: 60px;
  }
  .newslist-container {
    height: auto;
    padding-bottom: 48px;
  }
  .newslist {
    position: relative;
    height: 80px;
    padding-top: 20px;
    background: #fff;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .newslist .recommend-infor {
    padding-left: 12px;
  }
  .newslist .recommend-infor p {
    width: 70%;
    color: #000;
    line-height: 20px;
    padding-top: 2px;
    padding-bottom: 4px;
  }
  .newslist .recommend-infor span {
    font-size: 14px;
  }
  .newslist .recommend-infor img{
    position: absolute;
    height: 60px;
    width: 60px;
    right: 12px;
    top: 50%;
    margin-top: -30px;
  }
</style>

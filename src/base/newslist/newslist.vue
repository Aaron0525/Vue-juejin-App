<template>
  <div class="newslist-container-height" ref="contentWrapper">
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
</template>

<script>
  import {ERR_OK} from 'api/config'
  import BScroll from 'better-scroll'
  import listdetail from 'base/listdetail/listdetail'

  export default {
    data() {
        return {
          find: {
            type: Object
          },
          selectedlist: {},
        };
    },
    props: {

    },
    created() {
      this.$http.get('./api/find').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.find = response.data;
            // this.$nextTick(() => {
            //         this._initScroll();
            //     });
          }
      });
    },
    methods: {
      selectlist(item) {
        this.selectedlist = item;
        this.$refs.listdetail.show();
      },
      _initScroll() {
        this.meunScroll = new BScroll(this.$refs.contentWrapper, {
            click: true
          });
      }
    },
    components: {
      listdetail
    }
  }
</script>

<style>
  /* .newslist-container-height {
    position: absolute;
    width: 100%;
    height: 88%;
    margin-bottom: 48px;
    overflow: hidden;
  } */
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

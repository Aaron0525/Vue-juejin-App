<template>
  <div id="find">
    <div class="find-head" @click="selectSearch()">
        <div class="search-container">
          <div class="searchBox">
            <i class="iconfont search_img">&#xe669;</i>
            搜索
          </div>
        </div>
    </div>
    <search ref="search"></search>
    <scroll class="find-roll-container" :data="newslist">
        <div class="content-wrapper" ref="contentWrapper">
            <div class="recommend">
            <div class="recommend-content">
                <div v-if="recommends.length" class="slider-wrapper">
                    <slider>
                        <div v-for="item in recommends">
                            <a :href="item.linkUrl">
                                <img :src="item.picUrl">
                            </a>
                        </div>
                    </slider>
                </div>
            </div>
            </div>
            <div class="hot">
                <div class="hot_item">
                    <i class="hot_ic week"></i>
                    <span>本周最热</span>
                </div>
                <div class="hot_item">
                    <i class="hot_ic collect"></i>
                    <span>收藏集</span>
                </div>
                <div class="hot_item">
                    <i class="hot_ic activity"></i>
                    <span>线下活动</span>
                </div>
                <div class="hot_item">
                    <i class="hot_ic zhuanlan"></i>
                    <span>专栏</span>
                </div>
            </div>
            <div class="boil">
                <div class="boil_tit" @click="selectBoil()">
                    <i class="boil_tit_img"></i>
                    沸点
                    <div class="right_img"><i class="iconfont">&#xe687;</i></div>
                </div>
                <div class="boil_img">
                    <div class="find-boil-container" ref="boilWrapper">
                    <ul id="wp">
                        <li @click="selectboildetail(item)" class="boil_img_1" v-for="item in find.boildetail"><img :src="item.image"><span><p>{{item.title}}</p></span></li>
                        <span class="view_all" @click="selectBoil()">查看全部</span>
                    </ul>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="content_head">
                    <div class="head_left">热门文章</div>
                    <div class="head_right"><i class="iconfont">&#xe77e;</i>定制热门</div>
                </div>
                <div class="content_list">
                    <div class="loading-container" v-show="!newslist.length">
                        <loading></loading>
                    </div>

                    <ul>
                        <li @click="selectlist(item)" class="cont_list_item" v-for="item in find.content">
                            <div class="list_item_container">
                                <p>{{item.title}}</p>
                                <span>{{item.like}}人喜欢·{{item.author}}·{{item.time}}前</span>
                                <img v-lazy="item.image">
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </scroll>
    <boil ref="boil"></boil>-
    <boildetail :boildetails="selectedboil" ref="boildetail"></boildetail>
    <listdetail :list="selectedlist" ref="listdetail"></listdetail>
  </div>
</template>

<script>
  import Scroll from 'base/scroll/scroll'
  import Slider from 'base/slider/slider'
  import {getRecommend} from 'api/recommend'
  import {getNewslist,getBoilList} from 'api/newslist'
  import {ERR_OK} from 'api/config'
  import BScroll from 'better-scroll'
  import listdetail from 'base/listdetail/listdetail'
  import search from 'base/search/search'
  import boil from 'base/boil/boil'
  import boildetail from 'base/boildetail/boildetail'
  import moment from 'moment'
  import loading from 'base/loading/loading'


  export default {
    data() {
      return {
        recommends: [],
        find: {
          type: Object
        },
        newslist: {
            type: Object
        },
        selectedlist: {},
        selectedboil: {},
        boillist: {
            type: Object
        }
      };
    },
    props: {

    },
    computed: {

    },
    created() {
      this._getRecommend()
      this.$http.get('./api/find').then((response) => {
          response = response.body;
          if (response.errno === ERR_OK) {
            this.find = response.data;
            this.$nextTick(() => {
                this._initScroll();
            });
          }
      })
      this._getNewslist()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommends = res.data.slider

          }
        })
      },
      _getNewslist() {
        getNewslist().then((res) => {
          if (res.s === 1) {
            this.newslist = res.d.entrylist
            console.log(this.newslist)
          }
        })
      },
      // 获取沸点栏目线上数据
      // _getBoilList() {
      //   getBoilList().then((res) => {
      //       if(res.s === 1) {
      //           this.boillist = res.d.entrylist
      //           console.log(thhis.boillist);
      //       }
      //   })
      // },
      selectlist(item) {
        this.selectedlist = item;
        this.$refs.listdetail.show();
      },
      selectSearch() {
        this.$refs.search.show();
      },
      selectBoil() {
        this.$refs.boil.show();
      },
      selectboildetail(item) {
        this.selectedboil = item;
        this.$refs.boildetail.show()
      },
      ChangeTime(time) {
        let Origin_data = new Date(time);
        let Now_date = new Date();
        let differ_Month = Math.abs(Now_date.getMonth() - Origin_data.getMonth())
        let differ_Day = Math.abs(Now_date.getDate() - Origin_data.getDate())
        let differ_Hour = Math.abs(Now_date.getHours() - Origin_data.getHours())
        let differ_minute = Math.abs(Now_date.getMinutes() - Origin_data.getMinutes())

        let result = ""
        if(differ_Month > 0) {
            result = differ_Month + "月"

        } else if(differ_Day > 0) {
            result = differ_Day + "天"
        } else if(differ_Hour > 0) {
            result = differ_Hour + "小时"
        } else if(differ_minute > 0) {
            result = differ_minute + "分钟"
        } else {
            result = "0分钟前"
        }
        return result
      },
      _initScroll() {
        this.foodsScroll = new BScroll(this.$refs.boilWrapper, {
            click: true,
            scrollX: true,
            probeType: 3
          });
      }
    },
    components: {
      Slider,
      listdetail,
      search,
      boil,
      boildetail,
      loading,
      Scroll
    }
  }
</script>

<style>
#find {
    overflow: hidden;
    padding-bottom: 48px;
}
.find-head {
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 40px;
    top: 0;
    background-color: #fff;
    text-align: center;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.find-roll-container {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 200px;
}
.content-wrapper {

}
.search-container {
    width: 95%;
    height: 30px;
    padding-top: 5px;
    padding-left: 2.5%;
}
.searchBox {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: #E0E1E5;
    border-radius: 5px;
}
.search_img {
    font-size: 20px;
}
.recommend {
    width: 100%;
    top: 40px;
    bottom: 0;
}
.recommend .recommend-content {
    height: 100%;
    overflow: hidden;
}
.recommend .recommend-content .slider-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.hot {
    display: flex;
    width: 100%;
    height: 90px;
    line-height: 100px;
    margin-top: 10px;
    background: #fff;
    color: #2E3135;
}
.hot .hot_item {
    flex: 1;
    text-align: center;
}
.hot_ic {
    display: block;
    height: 50px;
    padding-top: 13px;
}
.hot .hot_item span {
    display: block;
    height: 25px;
    line-height: 20px;
}
.week {
    background: url('./image/hot_1.png') center center no-repeat;
    background-size: 35%;
}
.collect {
    background: url('./image/hot_2.png') center center no-repeat;
    background-size: 35%;
}
.activity {
    background: url('./image/hot_3.png') center center no-repeat;
    background-size: 40%;
}
.zhuanlan {
    background: url('./image/hot_4.png') center center no-repeat;
    background-size: 30%;
}
.boil {
    height: 160px;
    width: 100%;
    margin-top: 10px;
    background-color: #fff;
}
.boil .boil_tit {
    height: 45px;
    line-height: 45px;
    color: #000;
    font-size: 15px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.boil_tit_img {
    display: block;
    float: left;
    width: 24px;
    height: 100%;
    margin-left: 12px;
    margin-right: 5px;
    background: url('./image/boil_point.png') left center no-repeat;
    background-size: 70%;
}
.right_img {
    float: right;
    width: 18px;
    height: 100%;
    margin-right: 10px;
}
.boil .boil_img {
    width: auto;
    height: 120px;
    overflow-x: auto !important;
}
::-webkit-scrollbar {
    display: none;
}
.find-boil-container {

}
.boil .boil_img ul {
    height: 120px;
    width: 1055px;
    padding-left: 10px;
    overflow-x: auto;
    white-space: nowrap;
}
.boil .boil_img ul li {
    position: relative;
    display: inline-block;
    /* float: left; */
    height: 90px;
    width: 180px;
    border-radius: 5px;
    margin: 10px;
    margin-left: 0;
}
.boil .boil_img ul li span {
    position: absolute;
    display: block;
    width: 180px;
    height: 90px;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
    box-shadow: inset 180px 10px 5px rgba(0,0,0,.4);
}
.boil .boil_img ul li span p {
    width: 145px;
    height: 35px;
    padding-left: 20px;
    padding-right: 15px;
    padding-top: 25px;
    font-size: 15px;
    line-height: 18px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis !important;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.boil_img_1 {
    /* background-image: url(./image/boil_item_1.png); */
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
}
.boil_img_1 img{
    position: absolute;
    top: 0;
    left: 0;
    height: 90px;
    width: 180px;
    border-radius: 5px;
}
/* .boil_img_2 {
    background-image: url(./image/boil_item_2.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.boil_img_3 {
    background-image: url(./image/boil_item_3.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.boil_img_4 {
    background-image: url(./image/boil_item_4.png);
    background-repeat: no-repeat;
    background-size: cover;
}
.boil_img_5 {
    background-image: url(./image/boil_item_5.png);
    background-repeat: no-repeat;
    background-size: cover;
} */
.view_all {
    position: absolute;
    display: inline-block;
    height: 90px;
    line-height: 130px;
    text-align: center;
    width: 90px;
    margin-top: 10px;
    color: #53AAFF;
    font-size: 15px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
    background: url(./image/right3.png) center 12px no-repeat;
    background-size: 40%;
}
.content {
    background-color: #FFF;
    margin-top: 10px;
}
.content .content_head {
    height: 45px;
    line-height: 45px;
    font-size: 15px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.content .content_head .head_left {
    float: left;
    width: 30%;
    color: #000;
    padding-left: 40px;
    background: url(./image/hot_red.png) 12px center no-repeat;
    background-size: 11%;
}
.content .content_head .head_right {
    float: right;
    width: 30%;
    text-align: right;
    padding-right: 12px;
}
.content .content_head .head_right i{
    margin-right: 5px;
}

.content_list ul{
    display: block;
}
.content_list .cont_list_item {
    position: relative;
    display: block;
    height: 80px;
    padding-top: 20px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.content_list .cont_list_item .list_item_container {
    padding-left: 12px;
}
.list_item_container p {
    width: 70%;
    color: #000;
    font-size: 16px;
    line-height: 18px;
    padding-top: 2px;
    padding-bottom: 10px;
}
.list_item_container span {
    font-size: 14px;
}

.content_list .cont_list_item  img {
    position: absolute;
    height: 60px;
    width: 60px;
    top: 50%;
    margin-top: -30px;
    right: 12px;
}
img[src=""] {
    opacity: 0;
}
.loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
</style>

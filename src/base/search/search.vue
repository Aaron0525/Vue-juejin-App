<template>
  <transition name="move">
    <div v-show="showFlag" class="search">
      <div class="search-head"><i class="iconfont" @click="hide">&#xe687;</i>搜索</div>
      <div class="search-frame">
        <i class="iconfont">&#xe669;</i>
        <input type="search" name="btn_search" class="Btn-frame" placeholder="搜索">
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
  .search {
    z-index: 1100;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    background: #fff;
  }
  .search .search-head {
    height: 40px;
    width: 100%;
    line-height: 40px;
    color: #000;
    background: #f5f5f7;
    text-align: center;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  }
  .search .search-head i {
    position: absolute;
    padding: 0 10px 0 10px;
    display: block;
    transform:rotate(180deg);
    color: #007AFF;
    font-size: 20px;
    font-weight: 600;
  }
  .search-frame {
    margin: 10px;
    height: 30px;
    line-height: 30px;
    background-color: #E0E1E5;
    border-radius: 5px;
  }
  .search-frame i {
    float: left;
    display: block;
    height: 30px;
    width: 40px;
    font-size: 20px;
    text-align: center;
  }
  .Btn-frame {
    width: 85%;
    height: 30px;
    background-color: #E0E1E5;
    border-radius: 5px;
    outline:none;
  }
  input::-ms-input-placeholder{text-align: left;}
  input::-webkit-input-placeholder{text-align: left;}
</style>
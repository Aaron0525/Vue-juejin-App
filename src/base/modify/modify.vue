<template>
  <transition name="move">
    <div v-show="showFlag" class="modify">
      <div class="modify-head"><i class="iconfont" @click="hide">&#xe687;</i>{{modify_item.name}}
      <span class="save" @click="Update">保存</span></div>
      <div class="modify-box"><input type="text" name="" :value="modify_item.result"></div>
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
      modify_item: {
        type: Object
      }
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
.modify {
  z-index: 1100;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #efeff4;
}
.modify-head {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #000;
  background-color: #f5f5f7;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.modify-head i {
  position: absolute;
  padding: 0 10px 0 10px;
  display: block;
  transform:rotate(180deg);
  color: #007AFF;
  font-size: 20px;
  font-weight: 600;
}
.modify-head .save {
  display: block;
  float: right;
  padding-right: 10px;
  color: #007AFF;
}
.modify-box {
  height: 50px;
  width: 100%;
  background: #fff;
  margin-top: 30px;
}
.modify-box input {
  width: 90%;
  height: 30px;
  margin-top: 10px;
  margin-left: 10px;
  outline: none;
}
</style>
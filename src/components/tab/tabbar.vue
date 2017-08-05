<template>
  <div class="tabbar">
    <router-link tag="div" class="tabbar-item" to="/home/homepage">
      <span class="tabbar-link">首页</span>
    </router-link>
    <router-link tag="div" class="tabbar-item" to="/home/frontend">
      <span class="tabbar-link">前端</span>
    </router-link>
    <router-link tag="div" class="tabbar-item" to="/home/product">
      <span class="tabbar-link">产品</span>
    </router-link>
    <router-link tag="div" class="tabbar-item" to="/home/design">
      <span class="tabbar-link">设计</span>
    </router-link>
    <router-link tag="div" class="tabbar-item" to="/home/afterend">
      <span class="tabbar-link">后端</span>
    </router-link>
    <div class="show_set"><i class="iconfont">&#xe7f9;</i></div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
.tabbar {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  font-size: 14px;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  background-color: #f5f5f7;
}
.tabbar .tabbar-item {
  flex: 1;
  text-align: center;
}
.tabbar-link{
  display: block;
  width: 100%;
  height: 100%;
}
.router-link-active .tabbar-link{
  color: #007AFF;
  border-bottom: 1px solid #006CFF;
}
.show_set {
  width: 40px;
  height: 100%;
  padding-right: 10px;
  text-align: right;
}
</style>

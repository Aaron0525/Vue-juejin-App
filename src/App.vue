<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
      components: {
          Tab
      }
  }
</script>

<style>

</style>

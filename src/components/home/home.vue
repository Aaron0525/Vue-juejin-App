<template>
  <div id="homehead">
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
    import Tabbar from '../tab/tabbar'

    export default {
        components: {
            Tabbar
        }
    }
</script>

<style>
#homehead{
}
</style>

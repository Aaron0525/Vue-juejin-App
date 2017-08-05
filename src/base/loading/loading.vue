<template>
  <div class="loading">
    <img width="24" height="24" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped>
  .loading {
    width: 100%;
    text-align: center;
  }
  .loading  .desc {
    line-height: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
  }

</style>

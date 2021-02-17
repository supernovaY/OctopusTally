<template>
  <div>
    <router-view />
    <hr />
  </div>
</template>

<script lang="ts">
export default {
  name: "App.vue"
}
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #333;
    line-height: 1.5;
    font-family: $font-hei;
  }
</style>

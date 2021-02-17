<template>
  <nav>
  <router-link to="/money" class="item" active-class="selected">
    <Icon name="money"></Icon>
    记账</router-link>
  <router-link to="/labels" class="item" active-class="selected">
    <Icon name="label"></Icon>
    标签</router-link>
  <router-link to="/statistics" class="item" active-class="selected">
    <Icon name="statistics"></Icon>
    统计</router-link>
  </nav>
</template>

<script lang="ts">
  // import x from '@/assets/icons/label.svg'
  // import y from '@/assets/icons/money.svg'
export default {
  name: "Nav"
}
</script>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";
  nav {
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    > .item{
      padding: 8px 0 4px;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 12px;
      .icon {width: 32px; height: 32px;}}
    > .item.selected{
      color: $color-highlight;
    }
  }
</style>
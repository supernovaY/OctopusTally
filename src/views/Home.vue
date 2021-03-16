<template>
  <div>
    <Roof>章鱼记账</Roof>
    <Bill></Bill>
    <Today></Today>
    <Create></Create>
  </div>
</template>

<script>
import Vue from "vue";
import Bill from '@/components/Home/Bill'
import Today from "@/components/Home/Today";
import Create from "@/components/Home/Create";

Vue.component('Bill',Bill)
Vue.component('Today',Today)
Vue.component('Create',Create)
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.element::-webkit-scrollbar { width: 0 !important }
div {
  background: #f5f5f9;
}
</style>

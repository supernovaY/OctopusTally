<template>
  <div class="roof">
    <slot></slot>
  </div>
</template>

<script>
export default{
  name: 'Roof'
}
</script>

<style scoped lang="scss">
 .roof{
   height: 50px;
   width: 100%;
   font-weight: bold;
   border-radius: 5px;
   font-size: 18px;
   background: #eceff1;
   display: flex;
   justify-content: center;
   align-items: center;
 }
</style>

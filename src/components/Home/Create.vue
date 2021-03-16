<template>
  <router-link to="/money" class="create">
    <svg class="icon">
      <use xlink:href="#icon-create"></use>
    </svg>记一笔...</router-link>
</template>

<script>
export default{
  name: 'Create'
}
</script>

<style scoped lang="scss">
.create {
  position: fixed;
  max-width: 500px;
  width: 100%;
  height: 40px;
  background: #0f956f;
  border-radius: 5px;
  bottom: 0;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  >.icon {
    width: 1.5em; height: 1.5em;
    margin-right: 10px;
  }
}
.create :active:hover{
  opacity: 0.5;
}
</style>

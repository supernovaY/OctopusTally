<template>
  <div class="billArea">
    <div class="billText">本月支出</div>
    <div class="billExpend">￥2342.00</div>
    <div class="billIncome">
      <span>本月收入</span>
      <div class="billIncomeText">暂无收入</div>
      <span>预算剩余</span>
      <div class="billIncomeText" @click="$emit">￥55153</div>
    </div>
    <router-link to="/statistics" class="billChart">查看记账列表
    <svg class="icon">
      <use xlink:href="#icon-chart"></use>
    </svg>
    </router-link>
  </div>
</template>

<script>
export default{
  name: 'Bill'
}
</script>

<style scoped lang="scss">
$margin: 10px;
.billArea {
  height: 200px;
  margin: $margin;
  background: #fff;
  border-radius: $margin;
  >.billText {
    position: relative;
    margin: $margin;
    top: $margin;
    color: #9b9b9b;
  }
  >.billExpend {
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: $margin;
  }
  >.billIncome {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    > span {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
      margin-left: $margin;
      color: #9b9b9b;
    }
    > .billIncomeText {
      display: inline-block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      position: relative;
      font-size: 16px;
      font-weight: bold;
      margin-right: 15px;
    }
  }
  > .billChart{
    display: flex;
    height: 70px;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    color: #0f956f;
    >.icon {
      width: 1.5em; height: 1.5em;
      margin-right: $margin;
    }
  }
  >.billChart:active{
    background: lightgray;
    opacity: 0.5;
    transition: opacity 600ms;
  }
}
</style>

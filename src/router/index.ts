import Vue from 'vue'
import VueRouter from 'vue-router'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from "@/views/NotFound.vue"
import EditLabel from '@/views/EditLabel.vue'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home' // 重定向
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path:'/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '*', // 检查路径是否为上面设置的，否则跳到指定页面
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router

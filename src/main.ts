import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Roof from '@/components/Home/Roof.vue';

Vue.config.productionTip = false

Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
Vue.component('Roof',Roof)

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')

window.onload = function () {
  setTimeout(function (){
    window.scroll(0,100)
  },0)
}

import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'
import data from './components/data.vue'
import notemaster from './components/notemaster.vue'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const routes=[
  
  { path:'/data/:type' ,component:data},
  { path:'/notemaster' ,component:notemaster}

]
const router=new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  el: '#app',
router,
  render: h => h(App)
})

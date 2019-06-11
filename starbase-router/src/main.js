import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import data from './components/data.vue';


const routes =[
  
  {path:'/data/:type' ,component:data}

]
const router=new VueRouter({
routes,
mode:"history"
})
  




Vue.use(BootstrapVue)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

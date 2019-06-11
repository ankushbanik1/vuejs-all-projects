import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Addsmothie from '@/components/Addsmothie'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index, 
      
    },
    {
      path: '/add-smothie',
      name: 'Addsmothie',
      component: Addsmothie, 
      
    }

  ]
})

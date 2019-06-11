import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.config.productionTip = false
// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
}).$mount('#app')

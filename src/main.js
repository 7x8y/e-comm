import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header.vue'
import '@/assets/card_data.js'

Vue.config.productionTip = false

new Vue({
  Header,
  router,
   
  render: h => h(App)
}).$mount('#app')

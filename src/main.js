import Vue from 'vue'
import App from './App.vue'
import './assets/styles/styles.css'
import router from './router/router'
import store from './store/store'

Vue.use(router)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

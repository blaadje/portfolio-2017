// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueThreejs from 'vue-threejs/package'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueThreejs)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

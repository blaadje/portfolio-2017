import Vue from 'vue'
import App from './App'
import store from './store'
import { sync } from 'vuex-router-sync'
import { DynamicReactiveRefs } from 'vue-reactive-refs'
import router from './router'

Vue.use(DynamicReactiveRefs)
Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

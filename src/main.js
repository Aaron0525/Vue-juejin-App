import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import Vuelazyload from 'vue-lazyload'

import './common/stylus/reset.styl'
import './common/stylus/icon.styl'
import './common/stylus/scale-1px.styl'

Vue.config.productionTip = false

Vue.use(Vuelazyload, {
    loading: require('common/image/me.jpg')
})
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

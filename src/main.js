import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
import Vant from 'vant';

import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
NutUI.install(Vue);

Vue.config.productionTip = false
Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

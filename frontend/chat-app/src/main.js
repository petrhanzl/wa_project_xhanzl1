import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { auth } from './api/util/firebaseInit';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false


let app;

auth.onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')

  }
})


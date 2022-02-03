import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import {Outils} from "./mixins/outils.js";
Vue.mixin(Outils);

Vue.prototype.$api =axios.create({
  baseURL:"https:allweb.fun/coop/api/",
params:{},
headers: {'Authorization': "fa7780b85bc0ea3b815aeb6755878bbca747d12d"}
});
Vue.prototype.$bus = new Vue();

Vue.prototype.$api.interceptors.request.use(function(config){
  //console.log(config);
  if(store.state.token){
  //config.params.token = 'test';
  config.params.token= store.state.token;
  }
  return config;
});

Vue.config.productionTip = false

//import Navigation from '@/components/Navigation'
Vue.component('Navigation', ()=>import('@/components/Navigation.vue'));

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

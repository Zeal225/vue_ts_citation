// @ts-ignore
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

// @ts-ignore
Vue.use(axios)

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  render: (h: (arg0: { components: { Footer: {}; }; mounted(): void; }) => void) => h(App)
}).$mount('#app');

router.beforeEach((to, from, next) => {
  store.commit('showNavBarHideAllMutation');
  next();
});

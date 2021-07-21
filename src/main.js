/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
import Vue from 'vue';
import VueMatomo from 'vue-matomo';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

if (process.env.VUE_APP_MATOMO_SITEID != 0) {
  Vue.use(VueMatomo, {
    host: 'https://retru.conacyt.mx/',
    siteId: process.env.VUE_APP_MATOMO_SITEID,
    trackerFileName: 'matomo',
    router: router,
    enableLinkTracking: true,
    requireConsent: false,
    trackInitialView: true,
    debug: true,
  });
}

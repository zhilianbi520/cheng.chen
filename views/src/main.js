// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery';
import Vue from 'vue';
import App from './App';
import router from './router';
import VueSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import vueg from 'vueg';
import 'vueg/css/transition-min.css';


Vue.config.productionTip = false;

// add transition
Vue.use(vueg, router, {
  forwardAnim: 'slideInRight',
});
// add swiper
Vue.use(VueSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

import Vue from 'vue';
import Router from 'vue-router';
import headbg from '@/components/headbg';
import ResumeMain from '@/components/ResumeMain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headbg',
      component: headbg,
    },
    {
      path: '/main',
      name: 'main',
      component: ResumeMain,
    },
  ],
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '@/pages/index/index.vue';
import Demo from '@/pages/demo/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
    },
  ],
});

export default router;

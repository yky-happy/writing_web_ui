import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component:Index
    }
  ]
})

export default router

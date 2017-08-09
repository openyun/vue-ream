import Vue from 'vue'
import Router from 'vue-router'
import meta from 'vue-meta'
import elementUi from 'element-ui'
Vue.use(Router)
Vue.use(elementUi)
Vue.use(meta)
export default () => {
  const router = new Router({
    mode: 'history',
    routes: [{
      path: '/:keyword?',
      component: () => import('../views/Home.vue')
    }, {
      path: '/book/:id',
      component: () => import('../views/detail.vue')
    }]
  })

  return router
}

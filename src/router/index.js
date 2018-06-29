import Vue from 'vue'
import Router from 'vue-router'

// import empty from '@/views/empty.vue'
// 按组件打包
// const _import = file => () => import('@/views/' + file + '.vue')
// 分组打包
const demo = () => import(/* webpackChunkName: "demo" */ '@/views/demo/index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/demo'
    }, {
      path: '/demo',
      component: demo
    }
  ]
})

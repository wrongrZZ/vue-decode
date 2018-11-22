import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/Main'
import routerRest from '@/views/router-test'
import vuxRest from '@/views/vux-test'
import vbase from '@/views/vbase'
import signature from '@/views/signature'
import trouter from '@/views/test/router'

Vue.use(Router)

/**
 * isFunction:  是否是功能
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      title: '主页',
      isFunction: false
    },
    {
      path: '/routerRest',
      name: 'routerRest',
      component: routerRest,
      title: '路由',
      isFunction: true,
      meta: {
        msg: '路由传值： vue-router 传值方式、方法传值、html 传值'
      }
    },
    {
      path: '/routerRest/trouter/:id',
      name: 'trouter',
      component: trouter,
      title: '路由测试',
      isFunction: false
    },
    {
      path: '/vuxRest',
      name: 'vuxRest',
      component: vuxRest,
      title: '状态管理vuex',
      isFunction: true,
      meta: {
        msg: '全局变量、函数等，保存修改，删除操作'
      }
    },
    {
      path: '/signature',
      name: 'signature',
      component: signature,
      title: '手写签名',
      isFunction: true,
      meta: {
        msg: '移动手写签名'
      }
    },
    {
      path: '/vbase',
      name: 'vbase',
      component: vbase,
      title: '技术支持',
      isFunction: true,
      meta: {
        msg: '本项目所使用的全部插件介绍，已经使用方法'
      }
    }
  ]
})

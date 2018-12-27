import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/view/home.vue'
import Index1 from '@/components/view/index/index.vue'
import Goods from '@/components/view/goods/goods.vue'

import All from '@/components/view/goodstabs/tab1.vue'
import Little from '@/components/view/goodstabs/tab2.vue'
import None from '@/components/view/goodstabs/tab3.vue'
import Delete from '@/components/view/goodstabs/tab4.vue'

import { ENGINE_METHOD_NONE } from 'constants';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      component: Home,
      children: [
        {
          path: '/index',
          name: '首页',
          component: Index1,
          hidden: true
        },
        {
          path: '/good',
          name: '商品',
          component: Goods,
          children: [
            {
              path: '/good',
              redirect: '/good/all'
            },
            {
              path: '/good/all',
              name: 'all',
              component: All
            },
            {
              path: '/good/little',
              name: 'little',
              component: Little,
            },
            {
              path: '/good/none',
              name: 'none',
              component: None,
            },
            {
              path: '/good/delete',
              name: 'delete',
              component: Delete
            }
          ]
        }
      ]
    }]

})

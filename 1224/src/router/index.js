import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/view/home.vue'
import Index1 from '@/components/view/index/index.vue'
import Goods from '@/components/view/goods/goods.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      component: Home ,
      children:[
        {
          path: '/index',
          name: '首页',
          component: Index1,
          hidden: true 
      },
       {
          path: '/good',
          name: '商品',
          component: Goods
      }
      ]
    }]
  
})

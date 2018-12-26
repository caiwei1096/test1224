<template>
  <div id="app">
  <el-menu 
  :default-active="activeIndex" 
  class="el-menu-demo" 
  mode="horizontal" 
  @select="handleSelect">
   <el-menu-item index="1">全部商品</el-menu-item>
   <el-menu-item index="2">库存不足</el-menu-item>
   <el-menu-item index="3">已下架</el-menu-item>
   <el-menu-item index="4">废除</el-menu-item>

  </el-menu>

<div class="line"></div>

  </div>
</template>

<script>
export default {
  name: 'goods',
  data(){
      return{
        activeIndex: '1',  
        list:[
            {name:'全部商品',index:'1'},
            {name:'库存不足',index:2},
            {name:'已下架',index:3},
            {name:'废除',index:4}
        ]

      }
  },
   methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>

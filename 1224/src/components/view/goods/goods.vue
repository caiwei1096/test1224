<template>
  <div id="app">
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
    <el-menu-item v-for="(val,index) in list" :index='val.index' :key=index>{{val.name}}({{val.count}})</el-menu-item>
      <!-- <el-menu-item index="/good/all">全部商品{{}}</el-menu-item>
      <el-menu-item index="/good/little">库存不足</el-menu-item>
      <el-menu-item index="/good/none">已下架</el-menu-item>
      <el-menu-item index="/good/delete">废除</el-menu-item> -->
    </el-menu>

    <div class="line"></div>
    <section class="content-container">
      <div class="grid-content bg-purple-light">
        <el-col class="content-wrapper">
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </el-col>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "goods",
  data() {
    return {
      activeIndex: "1",
      list: [
        { name: "全部商品", index: 'all',count:this.$store.getters.allcount},
        { name: "库存不足", index: 'little',count:this.$store.getters.lowstocks},
        { name: "已下架", index: 'none', },
        { name: "废除", index: 'delete'}
      ]
    };
  },
  // computed:{
  //    count:
  // },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style>
.el-menu--horizontal{
  width: 671px;
}
</style>

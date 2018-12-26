<template>
  <div id="app">
<el-row class="container">
 <el-col :span="20" class="main">
  <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<!--导航菜单-->
				<el-menu 
                :default-active="$route.path" 
                class="el-menu-vertical-demo" 
                @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened router v-show="!collapsed"
                     :collapse="collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" >{{child.name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>

</aside>
	<section class="content-container">
				<div class="grid-content bg-purple-light">
          <el-col  class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return{
sysName:'VUEADMIN',
				collapsed:false,
				
  }
},
methods:{
        handleopen() {
     
      },
      handleclose() {
       
      },
			handleselect: function (a, b) {
            },
            collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
}
}
</script>

<style lang='less'>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.main {
			display: flex;
		   width:100%;
		  .content-container {
              flex:1;
              
             }
}
</style>
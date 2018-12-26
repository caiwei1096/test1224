<template>
  <div class="hello">


<div class='box' v-show="!flag">
      <el-tabs :tab-position="tabPosition" style="height: 300px;"
 >
  <el-tab-pane v-for='(val,index) in list'
   :label="val.lable"
   :key=index
   ><div>{{val.name}}</div></el-tab-pane>

       
  </el-tabs>
  <el-button size="mini" round  plain type="primary" @click="flag=!flag">新建分类</el-button>
  </div>
<child v-show="flag" ref='mychild' class='mask' :list=list @my-show='fn'></child>
  </div>
</template>

<script>
import child from './mask.vue';
export default {
  name: 'all',
  data () {
    return {
     tabPosition: 'left',
     flag:false,
    list:[
      {name:'面包',lable:"面包",value:'选项1'},
      {name:'点心类',lable:"点心类",value:'选项2'},
      {name:'饮品',lable:"音品类",value:'选项3'},
      {name:'经典蛋糕',lable:"经典蛋糕",value:'选项4'},
      {name:'礼券',lable:"礼券",value:'选项5'},
    ]
    }
  },
components:{
    child
},
    methods: {
   fn(val){
        this.flag=val;
    }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.box{
margin-top:50px;
position: relative;
z-index: 1;

}
.mask{
    position: absolute;
    top:100px;
    left:200px;
    z-index: 2;
    width: 500px;
    height: 600px;
}

</style>

<template>
  <div class="hello">
<el-card class="box-card">
   <div class=mask>
    <header>新建分类</header>
<section>
<div class="box">
    分类名称:
     <el-input
    placeholder="请输入内容"
   v-model="input">
  </el-input>
</el-input>
       </div>
<div class="box">分类描述：
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入分类描述"
  v-model="textarea3">
</el-input>
</div>
<div class="box">类型： <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="(item,index) in list"
      :key="item.value"
      :label="item.name"
      :value="item.value">
    </el-option>
  </el-select>
</div>
<div class="box">限时置顶：  <el-radio v-model="radio" label="1">开启</el-radio>
  <el-radio v-model="radio" label="2">关闭</el-radio>
</div>
   </section>
   <footer>
<el-button size="small" round @click="cancel">取消</el-button>
<el-button size="mini" round @click="dialogFormVisible = false">确定</el-button>
   </footer>
  </div>
</el-card>
</div>
</template>

<script>
export default {
   props:['list'],
  data () {
    return {
         input: '',
         textarea3: '',
        radio: '1',
        value: '',
        dialogTableVisible: false,
        dialogFormVisible: false,
    }
  },
  
  methods:{
      cancel(){
          this.$emit('my-show',false)
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>


header{
    text-align: center
}

.box{
    margin: 20px 5px;
   .el-input__inner{
    width: 100px;
}
    
}
footer{
    float: right
}
</style>

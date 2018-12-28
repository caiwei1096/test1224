<template>
  <div id="alert">
    <el-button type="text" @click="open2">点击打开 Message Box</el-button>

  </div>
</template>

<script>
export default {
  name: 'alert',
  date(){
      return{
      count:1
      }
  },
  methods: {
      open2() {
        this.$confirm('确认把已选的'+this.count+'个商品沽清库存吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          }); 
            //  this.$emit('my-show',false)      
        });
      }
    },
    
}
</script>

<style>

</style>

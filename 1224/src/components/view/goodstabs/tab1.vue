<template>
  <div class="hello">
    <div class="boxright">
      <el-button-group>
        <el-button
          size="mini"
          v-for="(val,index) in listone"
          :key="index"
          @click="change(index)"
        >{{val.name}}</el-button>
        <el-dropdown trigger="click">
          <el-button size="mini">
            更多
            <i class="el-icon-caret-bottom"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改规格</el-dropdown-item>
            <el-dropdown-item>修改属性</el-dropdown-item>
            <el-dropdown-item>修改餐盒费</el-dropdown-item>
            <el-dropdown-item>移动分类</el-dropdown-item>
            <el-dropdown-item>修改售卖时间</el-dropdown-item>
            <el-dropdown-item>修改商品描述</el-dropdown-item>
            <el-dropdown-item>修改最小购买量和单位</el-dropdown-item>
            <el-dropdown-item>修改套餐设置</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>

      <el-button-group>
        <el-button size="small" type="primary">排序管理</el-button>
        <el-dropdown trigger="click">
          <el-button size="mini">新建商品</el-button>
          <el-dropdown-menu slot="dropdown" width="100px">
            <el-dropdown-item>填写商品信息</el-dropdown-item>
            <el-dropdown-item>极速录菜</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-button-group>

      <div class="selectbox">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55">1</el-table-column>
          <el-table-column label="商品" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="price" label="价格" width="100px"></el-table-column>
          <el-table-column prop="stock" label="库存" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">下架</el-button>
              <el-dropdown trigger="click">
                <el-button size="mini" type="text">更多</el-button>
                <el-dropdown-menu slot="dropdown" width="100px">
                  <el-dropdown-item>创建活动</el-dropdown-item>
                  <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="box" v-show="!flag">
      <el-tabs :tab-position="tabPosition" style="height: 300px;">
        <el-tab-pane v-for="(val,index) in list" :label="val.lable" :key="index">
          <div>{{val.name}}</div>
        </el-tab-pane>
      </el-tabs>
      <el-button size="mini" round plain type="primary" @click="flag=!flag">新建分类</el-button>
    </div>
    <child v-show="flag" ref="mychild" class="mask" :list="list" @my-show="fn"></child>
  </div>
</template>

<script>
import child from "./mask.vue";
// import alertlot from '@/common/alertlot.vue'
export default {
  name: "all",
  data() {
    return {
      listone: [
        { name: "沽清" },
        { name: "置满" },
        { name: "修改库存" },
        { name: "上架" },
        { name: "下架" },
        { name: "删除" }
      ],
      tabPosition: "left",
      flag: false,
      flag1: false,
      checked: true,
      options: [
        {
          value: "选项1",
          label: "修改规格"
        },
        {
          value: "选项2",
          label: "修改属性"
        },
        {
          value: "选项3",
          label: "修改餐盒费"
        },
        {
          value: "选项4",
          label: "移动分类"
        },
        {
          value: "选项5",
          label: "修改售卖时间"
        }
      ],
      value: "",
      options1: [
        {
          value1: "选项1",
          label: "填写商品信息"
        },
        {
          value1: "选项2",
          label: "急速录菜"
        }
      ],
      value1: "",
      list: [
        { name: "面包", lable: "面包", value: "选项1" },
        { name: "点心类", lable: "点心类", value: "选项2" },
        { name: "饮品", lable: "饮品", value: "选项3" },
        { name: "经典蛋糕", lable: "经典蛋糕", value: "选项4" },
        { name: "礼券", lable: "礼券", value: "选项5" }
      ],
      tableData: [
        {
          date: "面包",
          price: "11￥",
          stock: "库存",
          handle: "操作"
        },
        {
          date: "橘子",
          price: "12￥",
          stock: "库存",
          handle: "操作"
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    child
    // alertlot
  },
  methods: {
    //控制蒙层的显示隐藏
    fn(val) {
      this.flag = val;
    },
    fn1(val) {
      this.flag1 = val;
    },
    //点击沽清、置满、修改库存、上架、下架、删除 提示无可选择的商品
    change(index) {
    console.log(index,'index',this.listone[index].name)
      //判断this.multipleSelection.length长度 勾选的个数就是这个长度
      if (!this.multipleSelection.length) {
        const h = this.$createElement;
        this.$message({
          message: "请选择商品",
          type: "warning",
          center: true,
          showClose: true
        });
      } else {
      
          this.$confirm(
            "确认把已选的"+`${this.multipleSelection.length}`+"个商品" + `${this.listone[index].name}` + "库存吗?",
            "批量" + `${this.listone[index].name}`,
            {
              confirmButtonText: "确定",
              cancelButtonText: "取消",
              type: "warning"
            }
          )
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            })
            .catch(() => {
              this.$message({
                type: "info",
                message: "已取消删除"
              });
            });
        }
      
    },
    //选择多行数据时使用 Checkbox方法
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //选择多行数据时使用 Checkbox方法
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(this.multipleSelection.length);
      //如果是空数组代表没有勾选复选框
    },
    //编辑下架更多
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.hello {
  .boxright {
    position: absolute;
    top: 60px;
    margin: 15px 15px;
    padding-left: 150px;

    .selectbox {
      margin-top: 15px;
    }
  }
}
//选项卡的位置
.box {
  margin-top: 100px;
  position: absolute;
}
//蒙层的位置
.mask {
  position: absolute;
  top: 60px;
  left: 400px;
  z-index: 2;
  height: 400px;
  opacity: 10;
}
</style>
<style>
.el-input--mini .el-input__inner {
  width: 80px;
}
.el-input--small .el-input__inner {
  width: 100px;
  height: 28px;
  margin-left: 10px;
}
.el-button {
  height: 28px;
}

.el-button-group > .el-button:first-child {
  border-radius: 1;
}

.el-button-group > .el-dropdown > .el-button {
  border-top-left-radius: 1;
  border-bottom-left-radius: 4;
  border-left-color: #dcdfe6;
}

.el-button-group > .el-button:first-child {
  border-top-right-radius: 1;
  border-bottom-right-radius: 1;
}
</style>


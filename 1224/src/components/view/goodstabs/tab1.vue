<template>
  <div class="hello">
    <div class="boxright">
      <el-button-group>
        <el-button size="mini">沽清</el-button>
        <el-button size="mini">置满</el-button>
        <el-button size="mini">修改库存</el-button>
        <el-button size="mini">上架</el-button>
        <el-button size="mini">下架</el-button>
        <el-button size="mini">删除</el-button>
        <el-select v-model="value" placeholder="更多" size="mini">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-button-group>
      <el-button-group>
        <el-button size="small" type="primary">排序管理</el-button>
        <el-select v-model="value" placeholder="新建商品" size="small">
          <el-option
            v-for="item in options1"
            :key="item.value1"
            :label="item.label"
            :value="item.value1"
          ></el-option>
        </el-select>
      </el-button-group>
      <div class="selectbox">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="商品" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column prop="price" label="价格" width="100px"></el-table-column>
          <el-table-column prop="stock" label="库存" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="text"  @click="handleDelete(scope.$index, scope.row)">下架</el-button>
              <el-button size="mini" type="text"  @click="handleEdit(scope.$index, scope.row)">更多</el-button>
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
export default {
  name: "all",
  data() {
    return {
      tabPosition: "left",
      flag: false,
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
          date: "商品",
          price: "11￥",
          stock: "库存",
          handle: "操作"
        }
      ],
      multipleSelection: []
    };
  },
  components: {
    child
  },
  methods: {
    fn(val) {
      this.flag = val;
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
    overflow:scroll  ;overflow:auto;
    position: absolute;
    top: 60px;
    margin: 15px 15px ;
    padding-left: 150px;
 
    .selectbox {
      margin-top: 15px;
    }
  
}
}
//选项卡的位置
.box {
  margin-top: 100px;
  position:  absolute;;

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
.el-button--small,
.el-button--small.is-round {
  margin: 0 20px;
}
.el-button-group > .el-button:first-child {
  border-radius: 1;
}
</style>


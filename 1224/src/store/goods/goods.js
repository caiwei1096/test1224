const types = {

}

const state = {
    tableData: [
        {
            date: "面包",
            price: "11￥",
            stock: "0",
            handle: "操作"
        },
        {
            date: "橘子",
            price: "12￥",
            stock: "8",
            handle: "操作"
        }
    ]

}
const getters = {
  //用于计算全部库存、库存不足、已下架的库存数量
  //全部库存
  allcount:state=>state.tableData.length,
  //库存不足
  lowstocks:state=>state.tableData.filter((item,index)=>{return item.stock<1}).length
}
const mutations = {

}
const actions = {

}
export default {
    state,
    getters,
    mutations,
    actions
}
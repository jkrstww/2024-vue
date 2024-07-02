<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/record' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/record' }">咨询记录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="sn"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="location"
            label="地点">
        </el-table-column>
        <el-table-column
            prop="time"
            label="时间">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="联系方式">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="EditStatus(scope.row)">添加状态</el-button>
          </template>
          <!--          <template slot-scope="scope">-->
          <!--            <span v-if="scope.row.status === 1">完成咨询</span>-->
          <!--            <span v-else-if="scope.row.status === 2">旷约</span>-->
          <!--            <span v-else-if="scope.row.status === 3">请假</span>-->
          <!--            <span v-else-if="scope.row.status === 4">脱落</span>-->
          <!--            <span v-else-if="scope.row.status === 5">结案</span>-->
          <!--          </template>-->
        </el-table-column>
      </el-table>
    </el-card>

    <AddStatusDialog ref="addStatusDialog" @ok="getList"></AddStatusDialog>

    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryBody.pageNo"
        :page-sizes="[10]"
        :page-size="queryBody.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals">
    </el-pagination>
  </div>
</template>

<script>
import {consultantCheckRecord} from '@api/api'
import AddStatusDialog from '../../components/consultation/AddStatusDialog.vue'
export default {
  name: 'AddStatus',
  components: {AddStatusDialog},
  data () {
    return {
      tableData: [],
      totals: 0,
      queryBody: {
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    getList () {
      consultantCheckRecord(this.queryBody).then(res => {
        this.tableData = res.data.records
        this.totals = res.data.total
      })
    },
    handleCurrentChange (value) {
      this.queryBody.pageNo = value
      this.getList()
    },
    EditStatus (row) {
      console.log(row)
      this.$refs.addStatusDialog.show(row)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

<!--初访预约记录-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/review' }">初访管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/record' }">初访预约记录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="审批人">
          <el-input  placeholder="审批人"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="序号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="sid"
            label="学号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="visitTeacher"
            label="初访员"
            width="180">
        </el-table-column>
        <el-table-column
            prop="visitLocation"
            label="地点"
            width="180">
        </el-table-column>
        <el-table-column
            prop="riskRank"
            label="风险等级"
            width="180">
        </el-table-column>
        <el-table-column
            prop="conclusion"
            label="结论"
            width="180">
        </el-table-column>
        <el-table-column
            prop="visitTime"
            label="时间"
            width="180">
        </el-table-column>
      </el-table>

      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-sizes="[10]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {getVisitRecordsApprovedPage} from '@api/api'
export default {
  name: 'dutyManage',
  data () {
    return {
      title: '初访预约记录',
      tableData: [],
      totals: 0,
      pageNo: 1,
      pageSize: 10
    }
  },
  methods: {
    getList () {
      getVisitRecordsApprovedPage({
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then(res => {
        this.tableData = res.data.records
        this.totals = res.data.total
      })
    },
    handleCurrentChange (value) {
      this.pageNo = value
      this.getList()
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

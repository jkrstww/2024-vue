<!--追加咨询时段-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/record' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/additional' }">追加时段</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>

    <el-card class="container">
<!--      <el-form :inline="true" class="demo-form-inline">-->
<!--        <el-form-item label="学号">-->
<!--          <el-input v-model="sn" placeholder="学号"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="姓名">-->
<!--          <el-input v-model="name" placeholder="姓名"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item>-->
<!--          <el-button type="primary" @click = "getRecord" icon="el-icon-search">查询</el-button>-->
<!--          <el-button type="info" @click = "recordEdit" icon="el-icon-upload">添加</el-button>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            width="55">
        </el-table-column>
        <el-table-column
            prop="sn"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="times"
            label="咨询次数">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态">
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button v-if="scope.row.times < 8">暂无</el-button>
            <el-button v-else-if="scope.row.status === '暂无'" @click="request(scope.row)">申请追加</el-button>
            <el-button v-else-if="scope.row.status === '待批准'">等待回复</el-button>
            <el-button v-else @click="request(scope.row)">再次申请</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

<!--    <el-pagination-->
<!--        background-->
<!--        @size-change="handleSizeChange"-->
<!--        @current-change="handleCurrentChange"-->
<!--        :current-page="pageNo"-->
<!--        :page-sizes="[10]"-->
<!--        :page-size="pageSize"-->
<!--        layout="total, sizes, prev, pager, next, jumper"-->
<!--        :total="totals">-->
<!--    </el-pagination>-->
  </div>
</template>

<script>
import {getAddRequest, postAddRequest} from '@api/api'

export default {
  name: 'additionalConsultation',
  data () {
    return {
      tableData: [],
      title: '初访预约记录'
    }
  },
  methods: {
    getList () {
      getAddRequest({}).then(res => {
        this.tableData = res.data
      })
    },
    request (row) {
      postAddRequest(row).then(res => {
        this.getList()
        this.$message({
          message: '申请成功',
          type: 'success'
        })
      })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

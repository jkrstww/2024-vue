<!--咨询记录（咨询师）-->
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
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="学号">
          <el-input v-model="sn" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click = "getRecord" icon="el-icon-search">查询</el-button>
          <el-button type="info" @click = "recordEdit" icon="el-icon-upload">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="consultation"
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
            prop="reportId"
            label="咨询次数">
        </el-table-column>
        <el-table-column
            prop="status"
            label="咨询状态">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 1">完成咨询</span>
            <span v-else-if="scope.row.status === 2">旷约</span>
            <span v-else-if="scope.row.status === 3">请假</span>
            <span v-else-if="scope.row.status === 4">脱落</span>
            <span v-else-if="scope.row.status === 5">结案</span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <AddRecordDialog @ok="getRecord" ref="recordEdit"></AddRecordDialog>
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="[10, 20, 40, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totals">
    </el-pagination>
  </div>
</template>

<script>
import AddRecordDialog from '@/pages/main/components/consultation/AddRecordDialog'
import {pageConsultList} from '@api/api' // 改为获取咨询记录的接口
export default {
  name: 'consultationRecord',
  components: {
    AddRecordDialog
  },
  data () {
    return {
      consultation: [],
      sn: '',
      name: '',
      pageNo: 1,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    getRecord () {
      let obj = {
        sn: this.sn,
        name: this.name,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      pageConsultList(obj).then(res => {
        this.consultation = res.data
        this.total = res.total
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getRecord()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getRecord()
    },
    recordEdit () {
      this.$refs.recordEdit.show()
    }
  },
  created () {
    this.getRecord()
  }
}
</script>

<style scoped>

</style>

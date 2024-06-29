<template>
  <div>
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
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          prop="id"
          label="序号"
          width="240">
      </el-table-column>
      <el-table-column
          prop="sName"
          label="学生"
          width="240">
      </el-table-column>
      <el-table-column
          prop="consultTeacher"
          label="咨询师"
          width="240">
      </el-table-column>
      <el-table-column
          prop="createdTime"
          label="时间"
          width="240">
      </el-table-column>
      <el-table-column
          prop="evaluation"
          label="结论"
          width="240">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="handleDownload(scope.row)">下载</el-button>
        </template>
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
        :total="total">
    </el-pagination>
    <a target="_blank" :href="downloadPath" ref="downloadReport"></a>
  </div>
</template>

<script>
import {getReportPage} from '@api/api'

export default {
  name: 'ReportDownload',
  data () {
    return {
      tableData: [],
      total: 0,
      pageNo: 1,
      pageSize: 10,
      download: 'http://localhost:8088/api/file/downloadReport/?id=',
      fileId: 1,
      downloadPath: ''
    }
  },
  methods: {
    getList () {
      getReportPage({
        'pageNo': this.pageNo,
        'pageSize': this.pageSize
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    handleDownload (row) {
      this.downloadPath = this.download + row.id
      window.location.href = this.downloadPath
      // this.$refs.downloadReport.click()
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

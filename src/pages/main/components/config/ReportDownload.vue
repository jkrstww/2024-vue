<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input  placeholder="审批人"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>

      <el-form-item>
        <el-button @click="downloadBatch">批量下载</el-button>
<!--        <el-button  type="primary" v-if="selected.length() !== 0" @click="downloadBatch">批量下载</el-button>-->
      </el-form-item>
    </el-form>

    <el-table
        :data="tableData"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
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
      selected: [],
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
    },
    handleSelectionChange (val) {
      this.selected = val
    },
    downloadBatch () {
      if (this.selected.length === 0) {
        this.$message({
          message: '未选择',
          type: 'warning'
        })
        return
      }
      // const iframe = document.createElement('iframe')
      // iframe.style.display = 'none'
      // iframe.src = 'http://example.com/download?id=4'
      // document.body.appendChild(iframe)

      // fetch('http://example.com/download?id=4')
      //   .then(response => response.blob())
      //   .then(blob => {
      //     saveAs(blob, 'filename.docx')
      //   })

      // this.downloadPath = this.download + '4'
      // const link = document.createElement('a')
      // link.href = this.downloadPath
      // link.download = ''
      // link.click()

      // this.selected.forEach(i => {
      //   console.log(i)
      //   setTimeout(function () {
      //     this.downloadPath = this.download + this.tableData[i].id
      //     window.location.href = this.downloadPath
      //   }, i * 1000)
      // })

      for (let i in this.selected) {
        // console.log(i)
        this.downloadPath = this.download + this.tableData[i].id

        const iframe = document.createElement('iframe')
        iframe.src = this.downloadPath// 下载地址
        iframe.style.display = 'none' // 不可见
        iframe.style.height = '0' // 高度为0
        document.body.appendChild(iframe)

        // const link = document.createElement('a')
        // link.href = this.downloadPath
        // link.download = ''
        // link.click()
      }
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

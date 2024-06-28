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
      this.$refs.downloadReport.click()
      // console.log(res)
      // var blob = new Blob([res], {
      //   type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;chartset=utf-8'
      // })
      // var link = document.createElement('a')
      // link.href = window.URL.createObjectURL(blob)
      // link.target = '_blank'
      // link.click()

      // var blob = new Blob([res], {
      //   type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;chartset=UTF-8'
      // })
      // var url = window.URL.createObjectURL(blob)
      // var a = document.createElement('a')
      // a.href = url
      // // 文件名
      // a.download = this.res.id
      // a.click()

      // var blob = new Blob([res], {
      //   type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;chartset=utf-8'
      // })
      // var link = document.createElement('a')
      // link.href = window.URL.createObjectURL(blob)
      // link.download = 'a.docx'
      // link.click()
      // this.$axios
      //   .get('http://localhost:8088/api/file/downloadReport/?id=' + row.id, {responseType: 'blob'})// responseType应当添加
      //   .then(res => {
      //     // 获取文件名
      //     const fileName = res.headers['content-disposition'].split(';')[1].split('=')[1]
      //     const blob = new Blob([res.data])
      //     // 创建一个a标签并设置href属性，之后模拟人为点击下载文件
      //     let link = document.createElement('a')
      //     link.href = window.URL.createObjectURL(blob)
      //     link.download = fileName// 设置下载文件名
      //     link.click()// 模拟点击
      //     // 释放资源并删除创建的a标签
      //     URL.revokeObjectURL(link.href)
      //     document.body.removeChild(link)
      //   })

      // downloadReport({
      //   'id': row.id
      // }).then(response => response.blob())
      //   .then(blob => {
      //     const url = URL.createObjectURL(blob)
      //     const link = document.createElement('a')
      //     link.href = url
      //     link.download = 'filename.ext'
      //     link.click()
      //   })
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

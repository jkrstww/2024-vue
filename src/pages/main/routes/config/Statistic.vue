<!--统计分析-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/statistic' }">统计分析</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-tabs style="margin-left: 20px">
        <el-tab-pane label="结案报告" name="first">
          <ReportDownload ref="reportDownload"></ReportDownload>
        </el-tab-pane>

        <el-tab-pane label="咨询师管理" name="second">
          <ConsultTeacherExcel ref="consultTeacherExcel"></ConsultTeacherExcel>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import ReportDownload from '../../components/config/ReportDownload.vue'
import ConsultTeacherExcel from '../../components/config/ConsultTeacherExcel.vue'

export default {
  name: 'dutyManage',
  components: {ConsultTeacherExcel, ReportDownload},
  data () {
    return {
      title: '统计分析'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

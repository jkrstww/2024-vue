<!--结案报告-->
<!--结案报告需设有“来访者学号”；“来访者姓名”； “来访者性别”； “来访者院系”；“来访者联系电话”；“问题类型”；“咨询总次数”；“咨询效果自评”-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/record' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/finalReport' }">结案报告</el-breadcrumb-item>
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
          <el-button type="primary" @click = "getList" icon="el-icon-search">查询</el-button>
          <el-button type="info" @click = "finalReportEdit" icon="el-icon-upload">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="finalReports"
          style="width: 100%">
        <el-table-column
            width="55">
        </el-table-column>
        <el-table-column
            prop="sId"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="sName"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="sGender"
            label="性别">
          <template slot-scope="scope">
            <span v-if="scope.row.sGender === 0">男</span>
            <span v-if="scope.row.sGender === 1">女</span>
          </template>
        </el-table-column>
        <el-table-column
            prop="sAcademy"
            label="院系">
        </el-table-column>
        <el-table-column
            prop="sPhone"
            label="联系方式">
        </el-table-column>
        <el-table-column
            prop="times"
            label="咨询总数">
        </el-table-column>
        <el-table-column
            prop="problem"
            label="问题类型">
<!--          <template slot-scope="scope">-->
<!--            <span v-if="scope.row.problemType === 1">抑郁</span>-->
<!--            <span v-else-if="scope.row.problemType === 2">焦虑</span>-->
<!--            <span v-else-if="scope.row.problemType === 3">双相情感障碍</span>-->
<!--            <span v-else-if="scope.row.problemType === 4">躁狂</span>-->
<!--          </template>-->
        </el-table-column>
        <el-table-column
            prop="evaluation"
            label="咨询效果自评">
<!--          <template slot-scope="scope">-->
<!--            <div>{{ scope.row.evaluationShort }}</div>-->
<!--            <el-button type="text" @click="scope.row.showFullEvaluation = !scope.row.showFullEvaluation">详情</el-button>-->
<!--            <el-collapse v-model="scope.row.showFullEvaluation">-->
<!--              <el-collapse-item>-->
<!--                <template slot="title">咨询效果自评</template>-->
<!--                <div>{{ scope.row.evaluation }}</div>-->
<!--              </el-collapse-item>-->
<!--            </el-collapse>-->
<!--          </template>-->
        </el-table-column>
      </el-table>
    </el-card>
    <FinalReportEditDialog @ok="getList" ref="finalReportEdit"></FinalReportEditDialog>
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
  </div>
</template>

<script>
import {queryReport} from '@api/api'
import FinalReportEditDialog from '@/pages/main/components/consultation/FinalReportEditDialog'
export default {
  name: 'finalReport',
  components: {
    FinalReportEditDialog
  },
  data () {
    return {
      finalReports: [],
      sn: '',
      name: '',
      pageNo: 1,
      pageSize: 10,
      total: 0
    }
  },
  methods: {
    finalReportEdit () {
      this.$refs.finalReportEdit.show()
    },
    getList () {
      queryReport({
        report: {
          sId: this.sn,
          sName: this.name
        },
        pageDTO: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.finalReports = res.data.records
        this.total = res.data.total
      })
    },
    handleCurrentChange (value) {
      this.pageNo = value
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

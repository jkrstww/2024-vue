<!--咨询预约-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">咨询</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">咨询预约</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="预约状态">
          <el-input  placeholder="预约状态"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

        <el-button type="primary" @click="visitReserve">预约</el-button>
        <VisitRequestDialog ref="visitRequestDialog"></VisitRequestDialog>
      </el-form>

      <el-table
          :data="tableData"
          style="width: 100%">
        <el-table-column
            prop="id"
            label="序号"
            width="240">
        </el-table-column>
        <el-table-column
            prop="createdTime"
            label="时间"
            width="240">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            width="240">
        </el-table-column>
        <el-table-column
            label="操作">
          <template slot-scope="scope">
            <el-button
                v-if="scope.row.status == '已批准'"
                size="mini"
                @click="handleView(scope.row)">查看详情</el-button>
            <el-button
                v-else
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">撤销预约</el-button>
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
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'appointment',
  data () {
    return {
      dialogVisible: true,
      questionnaireDialogVisible: false,
      form: {
        region: ''
      },
      questions: ['问题1：最近一周内：我曾有过消极想法',
        '问题2：最近一周内：我曾有过消极行为',
        '问题3：最近一周内，我觉得不安而平静不下来',
        '问题4：最近一周内，我吃的和平常一样多',
        '问题5：最近一周内，我对未来抱有希望',
        '问题6：最近一周内，我觉得闷闷不乐',
        '问题7：最近一周内，我的情绪比较容易激动',
        '问题8：最近一周内，我的睡眠和往常一样好',
        '问题9：最近一周内，我无缘无故感到疲乏',
        '问题10：最近一周内，我的头脑和以往一样清晰'],
      answers: Array(10).fill('否'),
      score: 0,
      dangerLevel: 'safe'
    }
  },
  methods: {
    nextDialog () {
      this.dialogVisible = false
      this.questionnaireDialogVisible = true
    },
    calculateScore () {
      this.score = this.answers.filter(answer => answer === '是').length * 10
      if (this.answers[0] === '是' || this.answers[1] === '是' || this.score >= 60) {
        this.dangerLevel = 'danger'
      } else {
        this.dangerLevel = 'safe'
      }
    }
  }
}
</script>

<style scoped>
.radio-group{
  font-size: 20px;
  line-height: 1.8;
}
.consent-text {
  font-size: 18px;
  color: black;
}
</style>

<!--学生初访预约-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">初访</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/appointment' }">初访预约</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>

    <el-dialog
        title="心理咨询知情同意书"
        :visible.sync="dialogVisible"
        width="90%"
        :close-on-click-modal="false">
      <span class="consent-text">亲爱的来访者： 感谢您的信任。<br>
        心理咨询是咨询师与来访者之间建立的一种专业助人关系，其目的是使来访者从咨询师提供的专业服务中获益。为了维护您和咨询师的权益，保证心理咨询的顺利进行，在预约开始之前，请仔细阅读下列事项并确认。<br>
        1、本中心向本校全日制在读学生（不含休学中的学生）提供免费的心理咨询服务，不提供精神障碍的诊断、治疗、处方开具、医疗证明开具和心理治疗等服务。<br>
        2、咨询地点为三个校区的心理咨询室。一般情况下每周1次、每次咨询时间为45分钟。<br>
        3、为尽可能保证大多数同学权益，原则上每位来访者在一学期内最多可接受8次咨询，且不能预约同一天的多个时段。如有特殊情况，须经评估后才可继续咨询。<br>
        4、来访者应按预约时间提前十分钟到达咨询室。如不能如期来访，应提前在取消预约。如来访者迟到，咨询时间不予补足或延长，如来访者迟到时间超过 30 分钟或缺席，本次咨询取消且计入8次咨询之中。如来访者一学期内未有明确原因取消或迟到次数达到3次，将暂停本学期预约资格。<br>
        5、咨询师如因个人原因需取消或更改已预约的咨询时间，需提前告知来访者并约定新的咨询时间。<br>
        6、咨询师尊重和保护来访者的个人隐私，咨询相关个人信息都在严格保密的情况下进行保存，不会被泄露。为更好地帮助来访者，在隐去可识别身份的信息后，来访者的案例信息可能被用于本中心研讨和督导，所有参与人会承诺保密，且所有案例相关信息的运用都需遵守专业伦理规范。<br>
        7、如来访者的行为可能对自己或他人构成严重伤害，或出于司法原因作为呈堂证供，则咨询师可以突破保密原则，向有关单位报告来访者的情况。除此之外，咨询记录将妥善保存在本中心，不提供给包括来访者在内的任何机构与个人。<br>
        8、如来访者的情况不属于本中心工作范畴，咨询师会予以解释并告知合适的求助资源。<br>
        以上全部规定，本人已经阅读，并愿意遵守！</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="nextDialog">同 意</el-button>
      </span>
    </el-dialog>

    <el-dialog
        title="首访登记表"
        :visible.sync="questionnaireDialogVisible"
        width="60%"
        :close-on-click-modal="false">
      <el-form ref="form" :model="form" label-width="80px">
        <div v-for="(question, index) in questions" :key="index">
          <div>{{ question }}</div>
          <el-radio-group class="radio-group" v-model="answers[index]" @change="calculateScore">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </div>
        <el-form-item label="危机等级">
          <span>{{ dangerLevel }}</span>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="questionnaireDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-card class="container">
<!--      <el-form ref="form" :model="form" label-width="80px">-->
<!--        <el-form-item label="日期">-->
<!--          <el-select v-model="form.week" placeholder="请选择日期">-->
<!--            <el-option label="周一" value="week"></el-option>-->
<!--            <el-option label="周二" value="week"></el-option>-->
<!--            <el-option label="周三" value="week"></el-option>-->
<!--            <el-option label="周四" value="week"></el-option>-->
<!--            <el-option label="周五" value="week"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="时段">-->
<!--          <el-select v-model="form.period" placeholder="请选择日期">-->
<!--            <el-option label="早一" value="period"></el-option>-->
<!--            <el-option label="早二" value="period"></el-option>-->
<!--            <el-option label="早三" value="period"></el-option>-->
<!--            <el-option label="午一" value="period"></el-option>-->
<!--            <el-option label="午二" value="period"></el-option>-->
<!--            <el-option label="午三" value="period"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->

        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="预约状态">
            <el-input  placeholder="预约状态"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search">查询</el-button>
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
                  v-else-if="scope.row.status == '待批准'"
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.row)">撤销预约</el-button>
              <el-button
                  v-else-if="scope.row.status == '已拒绝'"
                  size="mini"
                  type="warning"
                  @click="handleDelete(scope.row)">删除记录</el-button>
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

      <VisitRecordViewDialog ref="visitRecordViewDialog" :infos="infos"></VisitRecordViewDialog>
    </div>
</template>

<script>
import VisitRequestDialog from '../../components/firstVisit/VisitRequestDialog.vue'
import FirstVisitEditDialog from '../../components/firstVisit/FirstVisitEditDialog.vue'
import VisitRecordViewDialog from '../../components/firstVisit/VisitRecordViewDialog.vue'
import {getVisitRecordsPage, visitReserveRequest, deleteVisitRecordById} from '@api/api'

export default {
  name: 'appointment',
  components: {
    VisitRequestDialog,
    FirstVisitEditDialog,
    VisitRecordViewDialog
  },
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
      dangerLevel: 'safe',
      isDanger: 0,
      tableData: [],
      pageNo: 1,
      pageSize: 10,
      total: 0,
      infos: []
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
        this.isDanger = 1
      } else {
        this.dangerLevel = 'safe'
        this.isDanger = 0
      }
    },
    visitReserve () {
      this.$refs.visitRequestDialog.show()
      visitReserveRequest({
        'isDanger': this.isDanger
      }).then(res => {
        this.getList()
      })
    },
    showRequestDialog () {
      this.$refs.visitRequestDialog.show()
    },
    getList () {
      getVisitRecordsPage({
        'pageNo': this.pageNo,
        'pageSize': this.pageSize
      }).then(res => {
        this.tableData = res.data.records
        this.total = res.data.total
      })
    },
    handleCurrentChange (value) {
      this.pageNo = value
      this.getList()
    },
    handleView (info) {
      this.infos[0] = info
      this.$refs.visitRecordViewDialog.show()
    },
    handleDelete (info) {
      console.log(info)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteVisitRecordById({
          'id': info.id
        })
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.getList()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
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
.radio-group{
  font-size: 20px;
  line-height: 1.8;
}
</style>

<!--结案报告编辑按钮-->
<!--结案报告需设有“来访者学号”；“来访者姓名”； “来访者性别”； “来访者院系”；“来访者联系电话”；“问题类型”；“咨询总次数”；“咨询效果自评”-->
<template>
  <div>
    <el-card class="container">
      <el-dialog
          title="结案报告"
          :visible.sync="dialogVisible"
          width="50%">
        <!--        咨询状态，包括完成咨询、旷约、请假、脱落、结案，如来访者结束8次咨询，但仍需继续咨询，可申请经中心审批后可追加时段，咨询师可有权限在（19）字段增设“第9次咨询状态”-->
        <el-form ref="form" label-width="100px">
          <el-form-item label="学号">
            <el-input v-model="form.sId"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <span>{{form.sName}}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span v-if="form.sGender === 0">男</span>
            <span v-if="form.sGender === 1">女</span>
          </el-form-item>
          <el-form-item label="院系">
            <span>{{form.sAcademy}}</span>
          </el-form-item>
          <el-form-item label="联系方式">
            <span>{{form.sPhone}}</span>
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="form.age" type="number"></el-input>
          </el-form-item>
<!--          <el-form-item label="姓名">-->
<!--            <el-input v-model="form.sName"></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="性别">-->
<!--            <el-select v-model="form.sGender" placeholder="请选择性别">-->
<!--              <el-option label="男" :value="0"></el-option>-->
<!--              <el-option label="女" :value="1"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="院系">-->
<!--            <el-select v-model="form.sAcademy" placeholder="请选择院系">-->
<!--              <el-option label="计算机学院" value="计算机学院"></el-option>-->
<!--              <el-option label="艺术学院" value="艺术学院"></el-option>-->
<!--              <el-option label="数学学院" value="数学学院"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->
<!--          <el-form-item label="联系方式">-->
<!--            <el-input v-model="form.sPhone"></el-input>-->
<!--          </el-form-item>-->
          <el-form-item label="问题类型">
            <el-select v-model="form.problem" placeholder="请选择问题类型">
              <el-option label="抑郁" :value="1"></el-option>
              <el-option label="焦虑" :value="2"></el-option>
              <el-option label="双相感情障碍" :value="3"></el-option>
              <el-option label="躁狂" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="咨询总数">
            <span>{{form.times}}</span>
          </el-form-item>
          <el-form-item label="咨询效果自评">
            <el-input v-model="form.evaluation"
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancle">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import {getRecordTimes, getStudentInfoBySn} from '@api/api'
import {generateReport} from '../../../../api/api' // 改为更新结案记录的接口

export default {
  name: 'FinalReportEditDialog',
  data () {
    return {
      dialogVisible: false,
      form: {
        sName: '',
        sId: '',
        sGender: null,
        sAcademy: '',
        sPhone: '',
        problem: '',
        times: 0,
        evaluation: '',
        age: null
      }
    }
  },
  methods: {
    show () {
      // console.log(this.form.name)
      this.dialogVisible = true
      this.getTimes()
    },
    getTimes () {

    },
    submit () {
      if (!this.form.sId || !this.form.age || !this.form.problem || !this.form.evaluation) {
        this.$message({
          message: '输入不能为空',
          type: 'error'
        })
      } else {
        generateReport(this.form).then(res => {
          this.$message({
            message: '操作成功',
            type: 'success'
          })
          this.cancle()
          this.$emit('ok')
        })
      }
    },
    clearForm () {
      this.form.sName = ''
      this.form.sId = ''
      this.form.sAcademy = ''
      this.form.problem = ''
      this.form.sGender = null
      this.form.evaluation = ''
      this.form.sPhone = ''
      this.form.times = 0
      this.age = null
    },
    cancle () {
      this.dialogVisible = false
      this.clearForm()
    }
  },
  watch: {
    'form.sId': {
      handler (newVal, oldVal) {
        getRecordTimes({
          sId: newVal
        }).then(res => {
          this.form.times = res.data
        })
        getStudentInfoBySn({
          sn: newVal
        }).then(res => {
          this.form.sGender = res.data.gender
          this.form.sAcademy = res.data.college
          this.form.sName = res.data.name
          this.form.sPhone = res.data.phoneNumber
        })
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style scoped>

</style>

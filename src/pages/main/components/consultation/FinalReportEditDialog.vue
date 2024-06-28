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
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="form.sn"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-select v-model="form.gender" placeholder="请选择性别">
              <el-option label="男" :value="1"></el-option>
              <el-option label="女" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="院系">
            <el-select v-model="form.campus" placeholder="请选择院系">
              <el-option label="计算机学院" :value="1"></el-option>
              <el-option label="艺术学院" :value="2"></el-option>
              <el-option label="数学学院" :value="3"></el-option>
              <el-option label="外国语学院" :value="4"></el-option>
              <el-option label="经济学院" :value="5"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="form.phoneNumber"></el-input>
          </el-form-item>
          <el-form-item label="问题类型">
            <el-select v-model="form.problemType" placeholder="请选择问题类型">
              <el-option label="抑郁" :value="1"></el-option>
              <el-option label="焦虑" :value="2"></el-option>
              <el-option label="双相感情障碍" :value="3"></el-option>
              <el-option label="躁狂" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="咨询总数">
            <el-select v-model="form.count" placeholder="请选择次数">
              <el-option v-for="n in 8" :key="n" :label="'第' + n + '次咨询'" :value="n"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="咨询效果自评">
            <el-input v-model="form.evaluation"
                      type="textarea"
                      :rows="2"
                      placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import {updateConsult} from '@api/api' // 改为更新结案记录的接口

export default {
  name: 'FinalReportEditDialog',
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        sn: '',
        gender: '',
        campus: '',
        phoneNumber: '',
        problemType: '',
        count: '',
        evaluation: ''
      }
    }
  },
  methods: {
    show () {
      // console.log(this.form.name)
      this.dialogVisible = true
    },
    submit () {
      updateConsult(this.form).then(res => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
        this.dialogVisible = false
        this.$emit('ok')
      })
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>

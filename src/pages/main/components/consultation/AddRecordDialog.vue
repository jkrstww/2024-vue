<!--添加咨询记录按钮-->
<template>
  <div>
    <el-card class="container">
      <el-dialog
          title="咨询记录"
          :visible.sync="dialogVisible"
          width="30%">
<!--        咨询状态，包括完成咨询、旷约、请假、脱落、结案，如来访者结束8次咨询，但仍需继续咨询，可申请经中心审批后可追加时段，咨询师可有权限在（19）字段增设“第9次咨询状态”-->
        <el-form ref="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="学号">
            <el-input v-model="form.sn"></el-input>
          </el-form-item>
          <el-form-item label="咨询次数">
            <el-select v-model="form.reportId" placeholder="请选择咨询次数">
              <el-option v-for="n in 8" :key="n" :label="'第' + n + '次咨询'" :value="n"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="咨询状态">
            <el-select v-model="form.status" placeholder="请选择咨询状态">
              <el-option label="完成咨询" :value="1"></el-option>
              <el-option label="旷约" :value="2"></el-option>
              <el-option label="请假" :value="3"></el-option>
              <el-option label="脱落" :value="4"></el-option>
              <el-option label="结案" :value="5"></el-option>
            </el-select>
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
import {updateConsult} from '@api/api' // 改为更新咨询记录的接口

export default {
  name: 'AddRecordDialog',
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        sn: '',
        reportId: '',
        status: ''
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

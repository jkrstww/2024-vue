<!--初访结论编辑按钮-->
<template>
  <div>
    <el-card class="container">
      <el-dialog
          title="初访结论"
          :visible.sync="dialogVisible"
          width="30%">
        <el-form ref="form" label-width="80px">
          <el-form-item label="危机等级">
            <el-select v-model="form.riskRank" placeholder="请选择危机等级">
              <el-option label="安全" :value="0"></el-option>
              <el-option label="中等" :value="1"></el-option>
              <el-option label="危险" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="问题类型">
            <el-select v-model="form.problem" placeholder="请选择问题类型">
              <el-option label="抑郁" value="抑郁"></el-option>
              <el-option label="焦虑" value="焦虑"></el-option>
              <el-option label="双向情感障碍" value="双向情感障碍"></el-option>
              <el-option label="躁狂" value="躁狂"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="初访结论">
            <el-select v-model="form.conclusion" placeholder="请选择初访结论">
              <el-option label="无需咨询" value="无需咨询"></el-option>
              <el-option label="安排咨询" value="安排咨询"></el-option>
              <el-option label="转介送诊" value="转介送诊"></el-option>
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
import {updateVisit} from '@api/api'

export default {
  name: 'FirstVisitEditDialog',
  data () {
    return {
      dialogVisible: false,
      form: {
        id: 0,
        riskRank: '',
        problem: '',
        conclusion: ''
      }
    }
  },
  methods: {
    show (row) {
      this.dialogVisible = true
      this.form.id = row.id
      this.form.riskRank = row.riskRank
      this.form.problem = row.problem
      this.form.conclusion = row.conclusion
    },
    submit () {
      updateVisit(this.form).then(res => {
        if (res.data) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
        }
        this.dialogVisible = false

        this.$emit('ok')
      })
    }
  }
}
</script>

<style scoped>

</style>

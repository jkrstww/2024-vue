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
            <el-select v-model="form.level" placeholder="请选择危机等级">
              <el-option label="安全" :value="1"></el-option>
              <el-option label="中等" :value="2"></el-option>
              <el-option label="危险" :value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="问题类型">
            <el-select v-model="form.type" placeholder="请选择问题类型">
              <el-option label="抑郁" :value="1"></el-option>
              <el-option label="焦虑" :value="2"></el-option>
              <el-option label="双向情感障碍" :value="3"></el-option>
              <el-option label="躁狂" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="初访结论">
            <el-select v-model="form.conclusion" placeholder="请选择初访结论">
              <el-option label="无需咨询" :value="1"></el-option>
              <el-option label="安排咨询" :value="2"></el-option>
              <el-option label="转介送诊" :value="3"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'FirstVisitEditDialog',
  data () {
    return {
      dialogVisible: false,
      form: {
        level: '',
        type: '',
        date: '',
        conclusion: ''
      }
    }
  },
  methods: {
    show (students) {
      this.dialogVisible = true
      this.form = JSON.parse(JSON.stringify(students))
    }
  }
}
</script>

<style scoped>

</style>

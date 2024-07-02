<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>
        <el-form>
          <el-form-item>
            <el-select v-model="record.consultStatus" placeholder="请选择初访结论">
              <el-option label="完成咨询" value="完成咨询"></el-option>
              <el-option label="旷约" value="旷约"></el-option>
              <el-option label="请假" value="请假"></el-option>
              <el-option label="脱落" value="脱落"></el-option>
              <el-option label="结案" value="结案"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submit">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import {addStatus} from '@api/api'
export default {
  name: 'AddStatusDialog',
  data () {
    return {
      dialogVisible: false,
      record: {
        id: 0,
        consultStatus: null
      }
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    show (row) {
      this.dialogVisible = true
      this.record.id = row.id
    },
    submit () {
      if (!this.record.consultStatus) {
        this.$message({
          message: '请输入咨询状态',
          type: 'warning'
        })
      } else {
        this.dialogVisible = false
        addStatus(this.record).then(res => {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
        })

        this.$emit('ok')
      }
    }
  }
}
</script>

<style scoped>

</style>

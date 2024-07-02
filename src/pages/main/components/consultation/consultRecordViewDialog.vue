<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="62%"
        center>

      <el-table
          :data="form"
          style="width: 100%">
        <el-table-column
            prop="consultTeacher"
            label="咨询员"
            width="240">
        </el-table-column>
        <el-table-column
            prop="consultLocation"
            label="地点"
            width="240">
        </el-table-column>
        <el-table-column
            prop="consultTime"
            label="时间"
            width="240">
        </el-table-column>
      </el-table>

      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ConsultRecordViewDialog',
  data () {
    return {
      dialogVisible: false,
      form: []
    }
  },
  methods: {
    show (row) {
      this.dialogVisible = true
      this.form[0] = row
    }
  }
}
</script>

<style scoped>

</style>

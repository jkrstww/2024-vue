<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="62%"
        center>

      <el-table
          :data="infos"
          style="width: 100%">
        <el-table-column
            prop="visitTeacher"
            label="初访员"
            width="240">
        </el-table-column>
        <el-table-column
            prop="visitLocation"
            label="地点"
            width="240">
        </el-table-column>
        <el-table-column
            prop="visitTime"
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
import VisitRequestDialog from './VisitRequestDialog.vue'

export default {
  name: 'VisitRecordViewDialog',
  components: {VisitRequestDialog},
  data () {
    return {
      dialogVisible: false
    }
  },
  props: {
    infos: []
  },
  methods: {
    show () {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>

</style>

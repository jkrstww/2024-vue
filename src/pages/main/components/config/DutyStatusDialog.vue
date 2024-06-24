<template>
  <el-dialog
      title="值班信息查看"
      :visible.sync="dialogVisible"
      width="30%">
    <el-calendar v-model="value" :marked="markedDates"></el-calendar>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'DutyStatusDialog',
  data: function () {
    return {
      dialogVisible: false,
      value: new Date(),
      markedDates: []
    }
  },
  methods: {
    show (user) {
      this.dialogVisible = true
    }
  }
}

</script>

<style scoped>
.marked-date {
  color: green;
}
</style>

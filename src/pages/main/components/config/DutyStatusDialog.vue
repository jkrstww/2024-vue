<!--值班管理-查看功能-->
<template>
  <el-dialog
      title="值班信息查看"
      :visible.sync="dialogVisible"
      width="70%">
    <el-table
        :data="tableData"
        border
        style="width: 100%">
      <el-table-column
          fixed
          prop="arrangement"
          label="班次/日期"
          width="100">
      </el-table-column>
      <!--  循环展示最近14天的日期   -->
      <el-table-column
          v-for="(date, index) in dates"
          :key="index"
          :prop="'day' + index"
          :label="date"
          width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row[scope.column.property] === '值班'" type="success" class="tag">值班</el-tag>
        </template>
        <template slot="header" slot-scope="scope">
          <div style="text-align: center;">
            {{ scope.column.label.split(' ')[0] }}<br>{{ scope.column.label.split(' ')[1] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
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
      tableData: [],
      dates: this.getDates(),
      form: {
        workDay: '',
        onDuty: ''
      },
      week: []
    }
  },
  methods: {
    show (user) {
      if (!user.onDuty) {
        this.$message.error('当前不在值班状态')
        return
      }
      this.dialogVisible = true
      this.tableData = [{arrangement: '早班一'},
        {arrangement: '早班二'},
        {arrangement: '中班一'},
        {arrangement: '中班二'},
        {arrangement: '中班三'}]
      let workDayArray = user.workDay.split(',')
      this.week = workDayArray.map(day => {
        switch (day) {
          case '1': return '周一'
          case '2': return '周二'
          case '3': return '周三'
          case '4': return '周四'
          case '5': return '周五'
        }
      })
      for (let i = 0; i < this.dates.length; i++) {
        let weekday = this.dates[i].split(' ')[1]
        for (let row of this.tableData) {
          if (this.week.includes(weekday)) {
            row['day' + i] = '值班'
          }
        }
      }
    },
    getDates () {
      let dates = []
      let weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      for (let i = 0; i < 14; i++) {
        let date = new Date()
        date.setDate(date.getDate() + i)
        let weekday = weekdays[date.getDay()]
        dates.push(date.toLocaleDateString() + ' ' + weekday)
      }
      return dates
    }
  }
}

</script>

<style scoped>
.tag{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3CB371;
}
</style>

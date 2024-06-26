<!--基本时间配置-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/timeConfig' }">基础时间配置</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-table
        :data="tableData"
        border
        style="width: 100% "
        :header-cell-style="{color:'#333'}">
      <el-table-column
          prop="arrangement"
          label="班次"
          width="180"
          align="center">
      </el-table-column>
      <el-table-column
          prop="timePeriod"
          label="时段"
          width="180"
          align="center">
      </el-table-column>
      <el-table-column label="操作"
                       width="180"
                       align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
          <el-dialog
              title="编辑时间"
              :visible.sync="dialogVisible"
              width="30%">
            <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30'
                }">
            </el-time-select>
            <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                  minTime: startTime
                }">
            </el-time-select>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="submit">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'timeConfig',
  data () {
    return {
      tableData: [{arrangement: '早班一', timePeriod: '09:00-9:45'},
        {arrangement: '早班二', timePeriod: '10:00-10:45'},
        {arrangement: '早班三', timePeriod: '11:00-11:45'},
        {arrangement: '中班一', timePeriod: '14:30-15:15'},
        {arrangement: '中班二', timePeriod: '15:30-16:15'},
        {arrangement: '中班三', timePeriod: '16:30-17:15'}],
      dialogVisible: false,
      startTime: '',
      endTime: '',
      selectedRow: null
    }
  },
  methods: {
    edit (row) {
      this.selectedRow = row
      let [startTime, endTime] = row.timePeriod.split('-')
      this.startTime = startTime
      this.endTime = endTime
      this.dialogVisible = true
    },
    submit () {
      this.selectedRow.timePeriod = `${this.startTime}-${this.endTime}`
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>

</style>

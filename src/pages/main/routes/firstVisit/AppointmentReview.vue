<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/review' }">初访管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/review' }">初访预约审核</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-table
          :data="appointment"
          style="width: 100%">
        <el-table-column
            prop="sid"
            label="学号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="isDanger"
            label="危机等级"
            width="180">
          <template slot-scope="scope">
            <span :style="{color: scope.row.isDanger ? '#C70039' : '#239B56', fontSize: '20px'}">&#9679;</span>
            {{scope.row.isDanger ? '危险' : '正常'}}
          </template>
        </el-table-column>
        <el-table-column
            header-align="center"
            align="center"
            label="操作"
            width="200">
          <template slot-scope="scope">
            <el-button type="success" @click="appointmentEdit(scope.row)">通过</el-button>
            <el-button type="danger">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
      <AppointmentEditDialog @ok="getVisitAppointments" ref="appointmentEdit"></AppointmentEditDialog>
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-sizes="[10, 20, 40, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {pageVisitRequestList} from '@api/api'
import AppointmentEditDialog from '@/pages/main/components/firstVisit/AppointmentEditDialog'

export default {
  name: 'visitAppointmentReview',
  components: {
    AppointmentEditDialog
  },
  data () {
    return {
      appointment: [],
      pageNo: 1,
      pageSize: 10,
      totals: 0,
      sid: ''
    }
  },
  methods: {
    getVisitAppointments () {
      let obj = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        sid: this.sid,
        isApproved: false
      }
      pageVisitRequestList(obj).then(res => {
        this.appointment = res.data.records
        this.appointment.sort((a, b) => b.isDanger - a.isDanger)
        this.totals = res.data.total
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getVisitAppointments()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getVisitAppointments()
    },
    appointmentEdit (appointment) {
      this.$refs.appointmentEdit.show(appointment)
    }
  },
  created () {
    this.getVisitAppointments()
  }
}
</script>

<style scoped>

</style>

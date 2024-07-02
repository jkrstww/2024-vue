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
      <el-switch
          v-model="orderByRisk"
          active-text="危险优先"
          @change="getList">
      </el-switch>
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
            <el-button type="danger" @click="reject(scope.row)">拒绝</el-button>
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
import {pageVisitRequestList, getUnfinishedVisitRecordsByTime, getUnfinishedVisitRecordsByRisk, rejectVisitRequest} from '@api/api'
import AppointmentEditDialog from '@/pages/main/components/firstVisit/AppointmentEditDialog'

export default {
  name: 'visitAppointmentReview',
  components: {
    AppointmentEditDialog
  },
  data () {
    return {
      orderByRisk: false,
      appointment: [],
      pageNo: 1,
      pageSize: 10,
      totals: 0,
      sid: ''
    }
  },
  methods: {
    getVisitRecordsByTime () {
      getUnfinishedVisitRecordsByTime({
        'pageNo': this.pageNo,
        'pageSize': this.pageSize
      }).then(res => {
        this.totals = res.data.total
        this.appointment = res.data.records
      })
    },
    getVisitRecordsByRisk () {
      getUnfinishedVisitRecordsByRisk({
        'pageNo': this.pageNo,
        'pageSize': this.pageSize
      }).then(res => {
        this.totals = res.data.total
        this.appointment = res.data.records
      })
    },
    getList () {
      if (this.orderByRisk === false) {
        this.getVisitRecordsByTime()
      } else {
        this.getVisitRecordsByRisk()
      }
    },
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
      this.getList()
      // this.getVisitAppointments()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getList()
      // this.getVisitAppointments()
    },
    appointmentEdit (appointment) {
      this.$refs.appointmentEdit.show(appointment)
    },
    reject (row) {
      rejectVisitRequest(row).then(res => {
        this.$message('已拒绝')
        this.getList()
      })
    }
  },
  created () {
    this.getList()
    // this.getVisitAppointments()
  }
}
</script>

<style scoped>

</style>

<!--咨询预约审核-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/appointmentReview' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/appointmentReview' }">预约审核</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-table
          :data="appointment"
          style="width: 100%">
        <el-table-column
            prop="sn"
            label="学号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="phoneNumber"
            label="联系方式">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button type="success" @click="appointmentEdit(scope.row)">通过</el-button>
          </template>
        </el-table-column>
      </el-table>
      <AppointmentEditDialog @ok="getAppointments" ref="appointmentEdit"></AppointmentEditDialog>
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
import {pageConsultList} from '@api/api'
import AppointmentEditDialog from '@/pages/main/components/consultation/AppointmentEditDialog'

export default {
  name: 'consultationAppointmentReview',
  data () {
    return {
      appointment: [],
      sn: '',
      name: '',
      totals: 0,
      pageNo: 1,
      pageSize: 10
    }
  },
  components: {
    AppointmentEditDialog
  },
  methods: {
    getAppointments () {
      let obj = {
        sn: this.sn,
        name: this.name,
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      pageConsultList(obj).then(res => {
        this.appointment = res.data.records
        this.totals = res.data.total
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getAppointments()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getAppointments()
    },
    appointmentEdit (appointment) {
      this.$refs.appointmentEdit.show(appointment)
    }
  },
  created () {
    this.getAppointments()
  }
}
</script>

<style scoped>

</style>

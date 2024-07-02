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
          style="width: 70%">
        <el-table-column
            prop="sId"
            label="学号"
            width="280">
        </el-table-column>
        <el-table-column
            prop="phoneNumber"
            label="联系方式">
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
import {getConsultRequest} from '@api/api'
import AppointmentEditDialog from '@/pages/main/components/consultation/AppointmentEditDialog'
import {rejectConsult} from '../../../../api/api'

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
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }
      getConsultRequest(obj).then(res => {
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
    },
    reject (row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        rejectConsult(row).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          this.getAppointments()
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  },
  created () {
    this.getAppointments()
  }
}
</script>

<style scoped>

</style>

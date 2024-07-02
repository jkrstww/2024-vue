<!--咨询安排记录（心理助理）-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/appointmentReview' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/arrangementRecord' }">安排记录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="学号">
          <el-input v-model="sn" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click = "getList">查询</el-button>
          <el-button type="info" @click = "addArrangement" icon="el-icon-upload">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="arrangementRecord"
          style="width: 100%">
        <el-table-column
            width="55">
        </el-table-column>
        <el-table-column
            prop="sId"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="consultTeacher"
            label="咨询师">
        </el-table-column>
        <el-table-column
            prop="consultTime"
            label="咨询时间">
        </el-table-column>
        <el-table-column
            prop="consultLocation"
            label="咨询地点">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="editAppointment(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <AddArrangementDialog @ok="getList" ref="addArrangement"></AddArrangementDialog>
    <AppointmentEditDialog @ok="getList" ref="appointmentEditDialog"></AppointmentEditDialog>
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
  </div>
</template>

<script>
import {queryConsultRecord} from '@api/api'
import AddArrangementDialog from '@/pages/main/components/consultation/AddArrangementDialog.vue'
import AppointmentEditDialog from '../../components/consultation/AppointmentEditDialog.vue'
export default {
  name: 'ArrangementRecord',
  components: {
    AppointmentEditDialog,
    AddArrangementDialog
  },
  data () {
    return {
      arrangementRecord: [],
      sn: '',
      pageNo: 1,
      pageSize: 10,
      totals: 0
    }
  },
  methods: {
    getList () {
      queryConsultRecord({
        consultRecord: {
          sId: this.sn
        },
        pageDTO: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        }
      }).then(res => {
        this.arrangementRecord = res.data.records
        this.totals = res.data.total
      })
    },
    addArrangement () {
      this.$refs.addArrangement.show()
    },
    handleCurrentChange (value) {
      this.pageNo = value
      this.getList()
    },
    editAppointment (row) {
      this.$refs.appointmentEditDialog.show(row)
    }
  },
  created () {
    this.getList()
  }
}
</script>

<style scoped>

</style>

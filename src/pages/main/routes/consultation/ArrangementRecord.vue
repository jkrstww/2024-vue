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
        <el-form-item label="姓名">
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click = "getRecord">查询</el-button>
          <el-button type="info" @click = "addArrangement" icon="el-icon-upload">添加</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="consultation"
          style="width: 100%">
        <el-table-column
            width="55">
        </el-table-column>
        <el-table-column
            prop="sn"
            label="学号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="counselor"
            label="咨询师">
        </el-table-column>
        <el-table-column
            prop="time"
            label="咨询时间">
        </el-table-column>
        <el-table-column
            prop="place"
            label="咨询地点">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <AddArrangementDialog @ok="getRecord" ref="addArrangement"></AddArrangementDialog>
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
import AddArrangementDialog from '@/pages/main/components/consultation/AddArrangementDialog'
export default {
  name: 'consultationArrangementRecord',
  components: {
    AddArrangementDialog
  },
  data () {
    return {
      arrangementRecord: [],
      sn: '',
      name: '',
      pageNo: 1,
      pageSize: 10,
      totals: 0
    }
  },
  methods: {
    addArrangement () {
      this.$refs.addArrangement.show()
    }
  }
}
</script>

<style scoped>

</style>

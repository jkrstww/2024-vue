<!--值班管理-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">值班管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="工号">
          <el-input v-model="sn" placeholder="工号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click = "getUsers" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="users"
          style="width: 100%">
        <el-table-column
            width="55">
        </el-table-column>
        <el-table-column
            prop="sn"
            label="工号">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名">
        </el-table-column>
        <el-table-column
            prop="roleId"
            label="身份">
          <template slot-scope="scope">
            {{ role[scope.row.roleId] }}
          </template>
        </el-table-column>
        <el-table-column
            prop="onDuty"
            label="值班状态">
          <template slot-scope="scope">
            <span :style="{color: scope.row.onDuty ? '#00FA9A' : '#FF8C00', fontSize: '20px'}">&#9679;</span>
            {{ scope.row.onDuty ? '值班中' : '未值班' }}
          </template>
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click = "edit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click = "check(scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <DutyEditDialog @ok="getUsers" ref="userEdit"></DutyEditDialog>
    <DutyStatusDialog @ok="getUsers" ref="userStatus"></DutyStatusDialog>
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
import {pageTeacherList} from '@api/api'
import DutyEditDialog from '@/pages/main/components/config/DutyEditDialog'
import DutyStatusDialog from '@/pages/main/components/config/DutyStatusDialog'

export default {
  name: 'dutyManage',
  components: {
    DutyEditDialog,
    DutyStatusDialog
  },
  data () {
    return {
      users: [],
      totals: 0,
      pageNo: 1,
      pageSize: 10,
      sn: '',
      name: ''
    }
  },
  computed: {
    role () {
      return {
        // 2: '中心管理员',
        3: '初访员',
        4: '咨询师'
      }
    }
  },
  methods: {
    getUsers () {
      let obj = {
        pageDTO: {
          pageNo: this.pageNo,
          pageSize: this.pageSize
        },
        whitelistSetting: {
          sn: this.sn,
          name: this.name
        }
      }
      pageTeacherList(obj).then(res => {
        this.users = res.data.records // 后端传回来的数据
        this.totals = res.data.total
      })
    },
    handleCurrentChange (value) {
      this.pageNo = value
      this.getUsers()
    },
    handleSizeChange (value) {
      this.pageSize = value
      this.getUsers()
    },
    edit (user) {
      this.$refs.userEdit.show(user)
    },
    check (user) {
      this.$refs.userStatus.show(user)
    }
  },
  // 页面加载时调用
  created () {
    this.getUsers()
  }
}
</script>

<style scoped>

</style>

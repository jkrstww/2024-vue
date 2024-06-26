<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/basicInfo' }">基本信息维护</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-tabs style="margin-left: 20px">
      <el-tab-pane label="学生管理" name="first">
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;margin-left: 20px">
          <el-form-item label="学号">
            <el-input v-model="sn" placeholder="学号"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click = "getStudents" icon="el-icon-search">查询</el-button>
            <el-button type="info" @click = "showAddUserDialog" icon="el-icon-upload" style="margin-left: 725px">添加</el-button>
          </el-form-item>
        </el-form>
        <el-table
            :data="students"
            style="width: 100%"
            height="700">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
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
              prop="gender"
              label="性别">
          </el-table-column>
          <el-table-column
              prop="campus"
              label="校区">
          </el-table-column>
          <el-table-column
              prop="college"
              label="学院">
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
              <el-button type="text" size="small">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="咨询师管理" name="second">
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;margin-left: 20px">
          <el-form-item label="工号">
            <el-input v-model="sn" placeholder="工号"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click = "getCounselors">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table-column
            type="selection"
            width="55">
        </el-table-column>
        <el-table
            :data="counselors"
            style="width: 100%"
            height="700">
          <el-table-column
              prop="sn"
              label="工号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="gender"
              label="性别">
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
              <el-button type="text" size="small" @click = "showUser(scope.row)">编辑</el-button>
              <el-button @click="deleteById(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="初访员管理" name="third">
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;margin-left: 20px">
          <el-form-item label="工号">
            <el-input v-model="sn" placeholder="工号"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input v-model="name" placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click = "getFirstVisitors">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table
            :data="firstVisitors"
            style="width: 100%"
            height="700">
          <el-table-column
              type="selection"
              width="55">
          </el-table-column>
          <el-table-column
              prop="sn"
              label="工号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="gender"
              label="性别">
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
              <el-button type="text" size="small" @click = "showUser(scope.row)">编辑</el-button>
              <el-button @click="deleteById(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <UserEditDialog @ok="getUsers" ref="userEdit"></UserEditDialog>
    <AddUserDialog @ok="getStudents" ref="addUser"></AddUserDialog>
  </div>
</template>

<script>
import UserEditDialog from '@/pages/main/components/whiteList/UserEditDialog'
import {pageUserList} from '@api/api'
import AddUserDialog from '@/pages/main/components/config/AddUserDialog.vue'
export default {
  name: 'basicInfoMaintain',
  components: {
    UserEditDialog,
    AddUserDialog
  },
  data () {
    return {
      users: [],
      students: [],
      counselors: [],
      firstVisitors: [],
      activeTab: 'first',
      searchedUser: null,
      sn: '',
      name: ''
    }
  },
  methods: {
    getStudents () {
      let obj = {
        sn: this.sn,
        name: this.name
      }
      pageUserList(obj).then(res => {
        this.students = res.data.records.filter(user => user.roleId === 1)
      })
    },
    getCounselors () {
      let obj = {
        sn: this.sn,
        name: this.name
      }
      pageUserList(obj).then(res => {
        this.counselors = res.data.records.filter(user => user.roleId === 4)
      })
    },
    getFirstVisitors () {
      let obj = {
        sn: this.sn,
        name: this.name
      }
      pageUserList(obj).then(res => {
        this.firstVisitors = res.data.records.filter(user => user.roleId === 3)
      })
    },
    showUser (user) {
      this.$refs.userEdit.show(user)
    },
    showAddUserDialog () {
      this.$refs.addUser.show()
    }
  },
  created () {
    pageUserList().then(res => {
      this.students = res.data.records.filter(user => user.roleId === 1)
      this.counselors = res.data.records.filter(user => user.roleId === 4)
      this.firstVisitors = res.data.records.filter(user => user.roleId === 3)
    })
  }
}
</script>

<style scoped>

</style>

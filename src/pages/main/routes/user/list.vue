<template>
<div>
    <el-card class="crumbs-card">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/main/first' }">白名单列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
    </el-card>
    <el-card class="container">
        <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="姓名">
                <el-input v-model="name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item label="角色类型">
                <el-select v-model="roleId" placeholder="角色类型">
                    <el-option label="学生" value="1"></el-option>
                    <el-option label="学校用户" value="2"></el-option>
                    <el-option label="学院用户" value="3"></el-option>
                    <el-option label="辅导员" value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getV">查询</el-button>
                <el-button type="danger" v-if="ids.length > 0" @click="removes">删除选中</el-button>
            </el-form-item>
        </el-form>
        <el-table
                @selection-change="selectChange"
                :data="users"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="55">
            </el-table-column>
            <el-table-column
                    prop="sn"
                    label="工号/学号"
            >
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
            >
            </el-table-column>
            <el-table-column
                    label="角色">
                <template slot-scope="scope">
                    <!--通过scope.row获取当前行对象-->
                    {{scope.row.roleId===1?'学生':(scope.row.roleId===2?'学校用户':(scope.row.roleId===3?'学院用户':'辅导员'))}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="enabled"
                    label="启用状态">
                <template slot-scope="scope">
                    <el-switch
                            :value="scope.row.enabled===1"
                            active-color="#13ce66"
                            inactive-color="#ff4949">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column
                    label="操作">
                <template slot-scope="scope">
                    <el-button type="text" @click="openEdit(scope.row)">编辑</el-button>
                    <el-button type="text" @click="remove(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
                background
                @size-change="pageSizeChange"
                @current-change="pageNoChange"
                :current-page="pageNo"
                :page-sizes="[10, 20, 30, 40, 100]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
        </el-pagination>
    </el-card>
    <!--编辑弹框-->
    <el-dialog title="收货地址" width="30%" :visible.sync="dialogFormVisible">
        <el-form ref="form" label-width="80px">
            <el-form-item label="工号/学号">
                <el-input v-model="editUser.sn"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="editUser.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="editUser.password"></el-input>
            </el-form-item>
            <el-form-item label="角色列表">
                <el-select placeholder="请选择角色列表" v-model="editUser.roleId" style="width: 100%">
                    <el-option label="学生" :value="1"></el-option>
                    <el-option label="学校用户" :value="2"></el-option>
                    <el-option label="学院用户" :value="3"></el-option>
                    <el-option label="辅导员" :value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否启用">
                <el-switch v-model="editUser.enabled"></el-switch>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="saveUser">确 定</el-button>
        </div>
    </el-dialog>
</div>
</template>

<script>
import {getUserList, removeById, removeByIds, updateUser} from '@api/user'
export default {
  name: 'list',
  data: function () {
    return {
      dialogFormVisible: false,
      editUser: {},
      users: [],
      pageNo: 1,
      pageSize: 10,
      total: 0,
      name: '',
      roleId: '',
      ids: []
    }
  },
  methods: {
    getV () {
      let obj = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        name: this.name,
        roleId: this.roleId
      }
      getUserList(obj).then(res => {
        // 这里的res就是后端直接返回的json
        this.users = res.data.records
        this.total = res.data.total
      })
    },
    // 表格选择项发生变化
    selectChange (value) {
      // value 就是被选中数据的对象数组
      // let ids = []
      // for (let i = 0; i < value.length; i++) {
      //   ids.push(value[i].id)
      // }
      this.ids = value.map(user => user.id)
    },
    // 保存
    saveUser () {
      this.editUser.enabled = this.editUser.enabled ? 1 : 0
      updateUser(this.editUser).then(res => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.dialogFormVisible = false
        this.getV()
      })
    },
    // 打开编辑
    openEdit (obj) {
      // 克隆对象 克隆了再用
      let newObj = JSON.parse(JSON.stringify(obj))
      this.editUser = newObj
      this.editUser.enabled = this.editUser.enabled === 1
      this.dialogFormVisible = true
    },
    // 批量删除
    removes () {
      this.$confirm('此操作将永久删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let obj = {ids: this.ids}
        removeByIds(obj).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getV()
        })
      }).catch(() => {

      })
    },
    // 点击删除
    remove (user) {
      this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let obj = {id: user.id}
        removeById(obj).then(res => {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getV()
        })
      }).catch(() => {

      })
    },
    //    页码改变
    pageNoChange (value) {
      this.pageNo = value
      this.getV()
    },
    // 页面大小改变
    pageSizeChange (value) {
      this.pageSize = value
      this.getV()
    }
  },
  // 生命周期
  // 页面刚创建时
  created: function () {
    this.getV()
  }
}
</script>

<style scoped>

</style>

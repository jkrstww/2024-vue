<template>
  <el-dialog
      title="添加用户"
      :visible.sync="dialogVisible"
      width="30%">
    <el-form ref="form" label-width="80px">
      <el-form-item label="工号">
        <el-input v-model="form.sn"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="性别">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phoneNumber"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="form.roleId" placeholder="角色">
          <el-option label="咨询师" :value="4"></el-option>
          <el-option label="初访员" :value="3"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addUser">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
import {addUser} from '@api/api'

export default {
  name: 'AddUserDialog',
  data: function () {
    return {
      dialogVisible: false,
      form: {
        sn: '',
        name: '',
        gender: '',
        phoneNumber: '',
        roleId: ''
      }
    }
  },
  methods: {
    show () {
      this.dialogVisible = true
    },
    addUser () {
      if (!this.form.sn || !this.form.name || !this.form.gender || !this.form.phoneNumber || !this.form.roleId) {
        this.$message({
          message: '请填写所有的内容',
          type: 'warning'
        })
        return
      }
      addUser(this.form).then(res => {
        if (res.data) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.dialogVisible = false
          this.$emit('ok')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

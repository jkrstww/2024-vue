<template>
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
    <el-form ref="form" label-width="80px">
      <el-form-item label="sn">
        <el-input v-model="form.sn"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="form.roleId" placeholder="角色">
          <el-option label="学生" :value="1"></el-option>
          <el-option label="学校用户" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="form.enabled"></el-switch>
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
        enabled: ''
      }
    }
  },
  methods: {
    show () {
      this.dialogVisible = true
    },
    addUser () {
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

<template>
  <!--        编辑框-->
    <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            >
        <el-form ref="form" label-width="80px">
<!--            <el-form-item label="sn">-->
<!--                <el-input v-model="form.sn"></el-input>-->
<!--            </el-form-item>-->
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="角色">
                <el-select v-model="form.roleId" placeholder="请选择活动区域">
                    <el-option label="初访员" :value="3"></el-option>
                    <el-option label="咨询师" :value="4"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否启用">
                <el-switch v-model="form.enabled"></el-switch>
            </el-form-item>
            <el-form-item label="头像">
                <el-upload
                        class="avatar-uploader"
                        action="/api/file/upload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import {updateUser} from '@api/api'
export default {
  name: 'UserEditDialog',
  data: function () {
    return {
      dialogVisible: false,
      form: {
        sn: '',
        name: '',
        password: '',
        roleId: '',
        enabled: ''
      },
      imageUrl: '',
      url: ''
    }
  },
  methods: {
    show (user) {
      // 应该将对象克隆再赋值
      // 对象先json处理，再json转回来
      this.form = JSON.parse(JSON.stringify(user))
      this.dialogVisible = true
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.url = res.url
    },
    submit () {
      console.info(this.form)
      this.form.url = this.url
      updateUser(this.form).then(res => {
        if (res.data) {
          this.$message({
            type: 'success',
            message: '修改成功'
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
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

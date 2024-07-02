<!--学生修改个人信息-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/studentInfo' }">修改个人信息</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-form ref="form" label-width="80px" style="margin-top: 20px">
      <el-form-item label="姓名">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="性别">
        <el-select v-model="form.gender" placeholder="性别">
          <el-option label="男" :value="0"></el-option>
          <el-option label="女" :value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="校区">
        <el-select v-model="form.campus" placeholder="校区">
          <el-option label="望江校区" value="望江校区"></el-option>
          <el-option label="江安校区" value="江安校区"></el-option>
          <el-option label="华西校区" value="华西校区"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="学院">
        <el-select v-model="form.college" placeholder="学院">
          <el-option label="计算机学院" value="计算机学院"></el-option>
          <el-option label="艺术学院" value="艺术学院"></el-option>
          <el-option label="数学学院" value="数学学院"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phoneNumber" style="width: 250px"></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submit" style="margin-left: 20px">确 定</el-button>
  </div>
</template>

<script>
import {updateStudentInfo, getStudentInfo} from '@api/api'
export default {
  name: 'studentInfo',
  data () {
    return {
      form: {
        sn: '',
        name: '',
        gender: '',
        campus: '',
        college: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    getStudentInfo () {
      getStudentInfo().then(res => {
        this.form = res.data
        // this.gender = this.genders[this.form.gender]
        // this.campus = this.campuses[this.form.campus]
        // this.college = this.colleges[this.form.college]
      })
    },
    show () {
      this.form = JSON.parse(JSON.stringify())
    },
    submit () {
      updateStudentInfo(this.form).then(res => {
        if (res.data) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.$router.push('/main/config/studentInfo')
        }
      })
    }
  },
  created () {
    this.getStudentInfo()
  }
}
</script>

<style scoped>

</style>

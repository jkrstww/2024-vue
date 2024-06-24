<template>
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
    <el-form ref="form" label-width="80px">
      <el-form-item label="姓名">
        <span>{{form.name}}</span>
      </el-form-item>
      <el-form-item label="角色">
        <span>{{ form.roleId === 2 ? '中心管理员' : '初访员' }}</span>
      </el-form-item>
      <!--      <el-form-item label="身份">
              <span>{{form.roleId}}</span>
            </el-form-item>-->
      <el-form-item label="值班地点">
        <el-select v-model="form.workplace" placeholder="值班地点">
          <el-option label="101" :value="1"></el-option>
          <el-option label="102" :value="2"></el-option>
          <el-option label="103" :value="4"></el-option>
          <el-option label="104" :value="5"></el-option>
          <el-option label="105" :value="6"></el-option>
          <el-option label="106" :value="7"></el-option>
          <el-option label="天堂" :value="8"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="值班日">
        <el-checkbox-group v-model="week">
          <el-checkbox label="周一" name="week"></el-checkbox>
          <el-checkbox label="周二" name="week"></el-checkbox>
          <el-checkbox label="周三" name="week"></el-checkbox>
          <el-checkbox label="周四" name="week"></el-checkbox>
          <el-checkbox label="周五" name="week"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="是否值班">
        <el-switch v-model="form.onDuty"></el-switch>
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
  name: 'DutyEditDialog',
  data: function () {
    return {
      dialogVisible: false,
      week: [],
      form: {
        workDay: '',
        workPeriod: [],
        name: '',
        workplace: '',
        onDuty: ''
      }
    }
  },
  methods: {
    show (user) {
      this.form = JSON.parse(JSON.stringify(user))
      let workDayArray = this.form.workDay.split(',')
      this.week = workDayArray.map(day => {
        switch (day) {
          case '1': return '周一'
          case '2': return '周二'
          case '3': return '周三'
          case '4': return '周四'
          case '5': return '周五'
          default: return ''
        }
      })
      this.dialogVisible = true
    },
    submit () {
      let workDayNumber = this.week.map(day => {
        switch (day) {
          case '周一': return 1
          case '周二': return 2
          case '周三': return 3
          case '周四': return 4
          case '周五': return 5
          default: return 0
        }
      })
      this.form.workDay = workDayNumber.join(',')
      updateUser(this.form).then(res => {
        if (res.data) {
          this.$message({
            message: '修改成功',
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

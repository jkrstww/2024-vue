<!--初访结论编辑按钮-->
<template>
  <div>
    <el-card class="container">
      <el-dialog
          title="初访预约"
          :visible.sync="dialogVisible"
          width="30%">
        <el-form ref="form" label-width="80px">
          <el-form-item label="初访老师">
            <el-select v-model="form.visitTeacher" placeholder="请选择初访老师">
              <!-- 展示在“值班状态”的老师--><!--绑定v-model希望显示的是一个字符串，但此时form.name是一个数组，所以需要重新设置一个变量selectedTeacher来绑定-->
              <el-option
                  v-for="(teacher, index) in teachers"
                  :key="index"
                  :label="teacher.name"
                  :value="teacher.name">
              </el-option>
            </el-select>
          </el-form-item>
<!--          <el-form-item label="初访时间">-->
<!--            <el-select v-model="form.selectedWorkDay" placeholder="请选择初访时间" @change="handleWorkDayChange">-->
<!--              <el-option-->
<!--                  v-for="(day, index) in form.workDay"-->
<!--                  :key="index"-->
<!--                  :label="getWeekDay(day)"-->
<!--                  :value="day">-->
<!--              </el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->

          <el-form-item label="咨询时间">
            <el-col :span="11">
              <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="date1"
                  style="width: 100%;"
                  value-format="yyyy-MM-dd"></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="咨询时段">
            <el-select v-model="date2" visitTime="请选择时间段">
              <el-option label="09:00:00" value="09:00:00"></el-option>
              <el-option label="10:00:00" value="10:00:00"></el-option>
              <el-option label="11:00:00" value="11:00:00"></el-option>
              <el-option label="14:00:00" value="14:00:00"></el-option>
              <el-option label="15:00:00" value="15:00:00"></el-option>
              <el-option label="16:00:00" value="16:00:00"></el-option>
            </el-select>
          </el-form-item>

<!--          <el-form-item label="初访时段">-->
<!--            <el-select v-model="form.period" placeholder="请选择初访时段">-->
<!--              <el-option label="早班一" :value="1"></el-option>-->
<!--              <el-option label="早班二" :value="2"></el-option>-->
<!--              <el-option label="早班三" :value="3"></el-option>-->
<!--              <el-option label="午班一" :value="4"></el-option>-->
<!--              <el-option label="午班二" :value="5"></el-option>-->
<!--              <el-option label="午班三" :value="6"></el-option>-->
<!--            </el-select>-->
<!--          </el-form-item>-->

          <el-form-item label="初访地点">
            <el-select v-model="form.visitLocation" placeholder="请选择初访地点">
              <el-option label="咨询室101" value="咨询室101"></el-option>
              <el-option label="咨询室102" value="咨询室102"></el-option>
              <el-option label="咨询室103" value="咨询室103"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import {updateVisitRequest, sendNotification, queryUserList} from '@api/api' // 这里的pageUserList修改为老师的表单即可，另外需要一个接口更新咨询申请的状态
export default {
  name: 'AppointmentEditDialog',
  data () {
    return {
      // dialogVisible: false,
      // form: {
      //   name: '',
      //   workDay: '',
      //   selectedWorkDay: '',
      //   sn: '',
      //   onDuty: '',
      //   workplace: '',
      //   selectedVisitTeacher: '',
      //   period: ''
      // }

      dialogVisible: false,
      form: {},
      // form: {
      //   name: '',
      //   workDay: '',
      //   selectedWorkDay: '',
      //   sn: '',
      //   onDuty: '',
      //   workplace: '',
      //   selectedTeacher: '',
      //   period: ''
      // },
      date1: null,
      date2: null,
      teachers: []
    }
  },
  methods: {
    show (appointment) {
      // console.log(this.form.name)
      this.dialogVisible = true
      this.getTeachers()
      this.form = JSON.parse(JSON.stringify(appointment))
      // this.form.workDay = null
      // pageUserList().then(res => {
      //   const onDutyTeachers = res.data.records.filter(teacher => teacher.onDuty === true)
      //   this.form.name = onDutyTeachers.map(teacher => {
      //     const workDays = teacher.workDay.split(',').filter(day => day)
      //     return {
      //       label: teacher.name,
      //       value: teacher.id,
      //       workDays: workDays
      //     }
      //   })
      //   this.$forceUpdate()
      // })
    },
    getWeekDay (day) {
      switch (day) {
        case '1': return '周一'
        case '2': return '周二'
        case '3': return '周三'
        case '4': return '周四'
        case '5': return '周五'
      }
    },
    getTeachers () {
      queryUserList({
        'roleId': 3
      }).then(res => {
        this.teachers = res.data
      })
    },
    handleTeacherChange () {
      const selectedVisitTeacher = this.form.name.find(teacher => teacher.value === this.form.selectedVisitTeacher)
      this.form.workDay = selectedVisitTeacher ? selectedVisitTeacher.workDays : []
    },
    handleWorkDayChange (day) {
      this.form.workDay = day
    },
    submit () {
      if (!this.form.visitTeacher || !this.date1 || !this.form.visitLocation || !this.date2) {
        this.$message({
          message: '请填写所有的内容',
          type: 'warning'
        })
        return
      }

      this.isApproved = true
      this.form.consultDate = this.date1
      this.form.consultPeriod = this.date2
      this.form.visitTime = this.date1 + ' ' + this.date2
      this.form.status = '已批准'
      updateVisitRequest(this.form).then(res => {
        if (res.status === true) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.date1 = null
          this.date2 = null
          this.dialogVisible = false
          this.$emit('ok')
          let notificationData = {
            consultTeacher: this.form.visitTeacher,
            consultDate: this.form.consultDate,
            consultPeriod: this.form.consultPeriod,
            consultLocation: this.form.visitLocation,
            sId: this.form.sId,
            phoneNumber: this.form.phoneNumber,
            name: this.form.name
          }
          sendNotification(notificationData).then(res => {
            if (res.status === true) {
              this.$message({
                message: '通知已发送',
                type: 'success'
              })
            } else {
              this.$message({
                message: res.data.message,
                type: 'warning'
              })
            }
          })
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })

      if (!this.form.visitTeacher || !this.date1 || !this.form.visitLocation || !this.date2) {
        this.$message({
          message: '请填写所有的内容',
          type: 'warning'
        })
      }

      // this.isApproved = true
      // updateVisitRequest(this.form).then(res => {
      //   if (res.data) {
      //     this.$message({
      //       message: '修改成功',
      //       type: 'success'
      //     })
      //     this.dialogVisible = false
      //     this.$emit('ok')
      //     this.getAppointments()
      //   }
      // })
      // this.dialogVisible = false
    }
  },
  watch: {
    'form.selectedVisitTeacher': 'handleTeacherChange',
    'form.workDay': 'handleWorkDayChange'
  }
}
</script>

<style scoped>

</style>

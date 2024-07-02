<template>
  <div>
    <el-card class="container">
      <el-dialog
          title="预约记录"
          :visible.sync="dialogVisible"
          width="30%">
       <el-form ref="form" label-width="100px">
          <el-form-item label="学号">
            <el-input v-model="form.sId"></el-input>
          </el-form-item>
         <el-form-item label="咨询老师">
           <el-select v-model="form.consultTeacher" placeholder="请选择咨询老师">
             <!-- 展示在“值班状态”的老师--><!--绑定v-model希望显示的是一个字符串，但此时form.name是一个数组，所以需要重新设置一个变量selectedTeacher来绑定-->
             <el-option
                 v-for="(teacher, index) in teachers"
                 :key="index"
                 :label="teacher.name"
                 :value="teacher.name">
             </el-option>
           </el-select>
         </el-form-item>

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
           <el-select v-model="date2" placeholder="请选择时间段">
             <el-option label="09:00:00" value="09:00:00"></el-option>
             <el-option label="10:00:00" value="10:00:00"></el-option>
             <el-option label="11:00:00" value="11:00:00"></el-option>
             <el-option label="14:00:00" value="14:00:00"></el-option>
             <el-option label="15:00:00" value="15:00:00"></el-option>
             <el-option label="16:00:00" value="16:00:00"></el-option>
           </el-select>
         </el-form-item>

         <el-form-item label="咨询地点">
           <el-select v-model="form.consultLocation" placeholder="请选择咨询地点">
             <el-option label="咨询室101" value="咨询室101"></el-option>
             <el-option label="咨询室102" value="咨询室102"></el-option>
             <el-option label="咨询室103" value="咨询室103"></el-option>
           </el-select>
         </el-form-item>
<!--         <el-form-item label="咨询时间">-->
<!--           <el-select v-model="form.selectedWorkDay" placeholder="请选择咨询时间" @change="handleWorkDayChange">-->
<!--             <el-option-->
<!--                 v-for="(day, index) in form.workDay"-->
<!--                 :key="index"-->
<!--                 :label="getWeekDay(day)"-->
<!--                 :value="day">-->
<!--             </el-option>-->
<!--           </el-select>-->
<!--         </el-form-item>-->
<!--         <el-form-item label="咨询时段">-->
<!--           <el-select v-model="form.period" placeholder="请选择咨询时段">-->
<!--             <el-option label="早班一" :value="1"></el-option>-->
<!--             <el-option label="早班二" :value="2"></el-option>-->
<!--             <el-option label="早班三" :value="3"></el-option>-->
<!--             <el-option label="午班一" :value="4"></el-option>-->
<!--             <el-option label="午班二" :value="5"></el-option>-->
<!--             <el-option label="午班三" :value="6"></el-option>-->
<!--           </el-select>-->
<!--         </el-form-item>-->
<!--         <el-form-item label="咨询地点">-->
<!--           <el-select v-model="form.workplace" placeholder="请选择咨询地点">-->
<!--             <el-option label="101" :value="1"></el-option>-->
<!--             <el-option label="102" :value="2"></el-option>-->
<!--             <el-option label="103" :value="3"></el-option>-->
<!--           </el-select>-->
<!--         </el-form-item>-->
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
import {addConsultRecord, pageUserList, queryUserList} from '@api/api' // 改为更新咨询预约记录的接口

export default {
  name: 'AddArrangementDialog',
  data () {
    return {
      teachers: [],
      dialogVisible: false,
      form: {},
      date1: '',
      date2: ''
      // form: {
      //   name: '',
      //   workDay: '',
      //   selectedWorkDay: '',
      //   sn: '',
      //   onDuty: '',
      //   workplace: '',
      //   selectedTeacher: '',
      //   period: ''
      // }
    }
  },
  methods: {
    show () {
      this.getTeachers()
      // console.log(this.form.name)
      this.dialogVisible = true
      this.form = JSON.parse(JSON.stringify())
      this.form.workDay = null
      pageUserList().then(res => {
        const onDutyTeachers = res.data.records.filter(teacher => teacher.onDuty === true)
        this.form.name = onDutyTeachers.map(teacher => {
          const workDays = teacher.workDay.split(',').filter(day => day)
          return {
            label: teacher.name,
            value: teacher.id,
            workDays: workDays
          }
        })
        this.$forceUpdate()
      })
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
    handleTeacherChange () {
      const selectedTeacher = this.form.name.find(teacher => teacher.value === this.form.selectedTeacher)
      this.form.workDay = selectedTeacher ? selectedTeacher.workDays : []
    },
    handleWorkDayChange (day) {
      this.form.workDay = day
    },
    submit () {
      if (!this.form.sId || !this.form.consultTeacher || !this.date1 || !this.form.consultLocation || !this.date2) {
        this.$message({
          message: '请填写所有的内容',
          type: 'warning'
        })
        return
      }

      this.isApproved = true
      this.form.consultTime = this.date1 + ' ' + this.date2
      this.form.approvedStatus = '已批准'
      addConsultRecord(this.form).then(res => {
        if (res.status === true) {
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.date1 = null
          this.date2 = null
          this.dialogVisible = false
          this.$emit('ok')
        } else {
          this.$message({
            message: res.data.message,
            type: 'warning'
          })
        }
      })
    },
    getTeachers () {
      queryUserList({
        'roleId': 4
      }).then(res => {
        this.teachers = res.data
      })
    }
  },
  watch: {
    'form.selectedTeacher': 'handleTeacherChange',
    'form.workDay': 'handleWorkDayChange'
  }
}
</script>

<style scoped>

</style>

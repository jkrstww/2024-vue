<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span>
        <el-form ref="form" :model="form" label-width="80px">
<!--          <el-form-item label="活动名称">-->
<!--            <el-input v-model="form.name"></el-input>-->
<!--          </el-form-item>-->
          <el-form-item label="初访员">
            <el-select v-model="form.visitTeacher" placeholder="请选择初访员">
              <el-option label="波波" value="波波"></el-option>
              <el-option label="张三" value="张三"></el-option>
              <el-option label="李四" value="李四"></el-option>
              <el-option label="王五" value="王五"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="访问地点">
            <el-select v-model="form.visitLocation" placeholder="请选择活动区域">
              <el-option label="教学楼A101" value="教学楼A101"></el-option>
              <el-option label="教学楼B303" value="教学楼B303"></el-option>
              <el-option label="综合楼C202" value="综合楼C202"></el-option>
              <el-option label="综合楼D404" value="综合楼D404"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="date1"
                  style="width: 100%;"
                  value-format="yyyy-MM-dd"></el-date-picker>
            </el-col>
          </el-form-item>

          <el-form-item>
            <el-select v-model="date2" placeholder="请选择时间段">
              <el-option label="09:00:00" value="09:00:00"></el-option>
              <el-option label="10:00:00" value="10:00:00"></el-option>
              <el-option label="11:00:00" value="11:00:00"></el-option>
              <el-option label="14:00:00" value="14:00:00"></el-option>
              <el-option label="15:00:00" value="15:00:00"></el-option>
              <el-option label="16:00:00" value="16:00:00"></el-option>
              <el-option label="19:00:00" value="19:00:00"></el-option>
              <el-option label="20:00:00" value="20:00:00"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
          </el-form-item>
        </el-form>
      </span>

      <span slot="footer" class="dialog-footer">
  </span>
    </el-dialog>
  </div>
</template>

<script>
import {updateVisit} from '@api/api'
export default {
  name: 'UpdateVisitRecordDialog',
  data () {
    return {
      dialogVisible: false,
      date1: null,
      date2: null,
      form: {}
    }
  },
  methods: {
    show () {
      this.dialogVisible = true
    },
    initForm (originForm) {
      this.form = Object.assign({}, originForm)
    },
    onSubmit () {
      this.form.visitTime = this.date1 + ' ' + this.date2
      updateVisit(this.form).then(res => {
        if (res.status === false) {
          this.$message(res.message)
        } else {
          this.$message('修改成功')
          this.dialogVisible = false
          this.$emit('flush')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>

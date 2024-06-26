<!--值班管理-编辑功能-->
<template>
  <el-dialog
      title="值班信息修改"
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
      <!--      <div class="block">
              <span class="demonstration">折叠展示Tag</span>
              <el-cascader
                  :options="options"
                  props.multiple = true
                  collapse-tags></el-cascader>
            </div>-->

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
      /* props: { multiple: true },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 2,
          label: '上海',
          children: [
            { value: 3, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }] */
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

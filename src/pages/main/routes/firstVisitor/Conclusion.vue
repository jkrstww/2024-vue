<!--初访结论-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisitor' }">初访结论</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      <el-form :inline="true" class="demo-form-inline" style="margin-top: 20px;margin-left: 20px">
        <el-form-item label="学号">
          <el-input v-model="sn" placeholder="学号"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="校区">
          <el-select v-model="campusVal" placeholder="校区">
            <el-option label="全部" value=""></el-option>
            <el-option label="望江校区" value="1"></el-option>
            <el-option label="江安校区" value="2"></el-option>
            <el-option label="华西校区" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学院">
          <el-select v-model="collegeVal" placeholder="学院">
            <el-option label="全部" value=""></el-option>
            <el-option label="计算机学院" value="1"></el-option>
            <el-option label="艺术学院" value="2"></el-option>
            <el-option label="数学学院" value="3"></el-option>
            <el-option label="外国语学院" value="4"></el-option>
            <el-option label="经济学院" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click = "getStudents" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
      <el-table
          :data="students"
          style="width: 100%"
          height="700">
        <el-table-column
            prop="sn"
            label="学号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="gender"
            label="性别">
          <template slot-scope="scope">
            {{ gender[scope.row.gender]}}
          </template>
        </el-table-column>
        <el-table-column
            prop="campus"
            label="校区">
          <template slot-scope="scope">
            {{ campus[scope.row.campus]}}
          </template>
        </el-table-column>
        <el-table-column
            prop="college"
            label="学院">
          <template slot-scope="scope">
            {{ college[scope.row.college]}}
          </template>
        </el-table-column>
        <el-table-column
            prop="phoneNumber"
            label="联系方式">
        </el-table-column>
        <el-table-column
            prop="appointmentDate"
            label="预约时间">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="visitEdit(scope.row)">初访结论</el-button>
          </template>
        </el-table-column>
      </el-table>
      <FirstVisitEditDialog @ok="getStudents" ref="visitEdit"></FirstVisitEditDialog>
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageNo"
          :page-sizes="[10, 20, 40, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totals">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import {pageVisitList} from '@api/api'
import FirstVisitEditDialog from '@/pages/main/components/firstVisit/FirstVisitEditDialog.vue'
export default {
  name: 'conclusion',
  data () {
    return {
      students: [],
      sn: '',
      name: '',
      campusVal: '',
      collegeVal: '',
      totals: 0,
      pageNo: 1,
      pageSize: 10
    }
  },
  components: {
    FirstVisitEditDialog
  },
  computed: {
    gender () {
      return {
        1: '男',
        0: '女'
      }
    },
    campus () {
      return {
        1: '望江校区',
        2: '江安校区',
        3: '华西校区'
      }
    },
    college () {
      return {
        1: '计算机学院',
        2: '艺术学院',
        3: '数学学院',
        4: '外国语学院',
        5: '经济学院'
      }
    }
  },
  methods: {
    getStudents () {
      let obj = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        sn: this.sn,
        name: this.name,
        campus: this.campusVal,
        college: this.collegeVal
      }
      pageVisitList(obj).then(res => {
        this.students = res.data.records
        this.totals = res.data.total
      })
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getStudents()
    },
    handleCurrentChange (val) {
      this.pageNo = val
      this.getStudents()
    },
    visitEdit (student) {
      this.$refs.visitEdit.show(student)
    }
  },
  created () {
    this.getStudents()
  }
}
</script>

<style scoped>

</style>

<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">用户管理</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <el-form :inline="true" class="demo-form-inline">
                <el-form-item label="学号/工号">
                    <el-input v-model="sn" placeholder="学号/工号"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="name" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="getUsers">查询</el-button>
                    <el-button type="danger" @click="deletes">删除选中</el-button>
                </el-form-item>
            </el-form>
            <el-table
                    :data="users"
                    @selection-change="valueChange"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        >
                </el-table-column>
                <el-table-column
                        prop="sn"
                        label="学号/工号"
                       >
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="头像">
                    <template slot-scope="scope">
                        <img height="100px" :src="scope.row.url" alt="">
                    </template>
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
<!--         scope.row就是选中行的数据               -->
                        <el-button type="text" size="small" @click="showUser(scope.row)">编辑</el-button>
                        <el-button @click="deleteById(scope.row)" type="text" size="small">删除</el-button>
                        <a :href="scope.row.url" download="下载的文件.jpeg">下载头像</a>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                    style="margin-top: 15px"
                    background
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageNo"
                    :page-sizes="[10,20,40,100]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totals">
            </el-pagination>
        </el-card>
<!--        编辑框-->
        <UserEditDialog @ok="getUsers" ref="userEdit"/>
<!--        统计图-->
        <div id="dd" style="height: 400px;width: 100%;background-color: #ffadad"></div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import UserEditDialog from '../../components/whiteList/UserEditDialog.vue'
import {pageUserList, removeById, removeByIds} from '@api/api'
// 使用echarts步骤
// 1.定义存放统计图的容器 div  必备id和宽高
// 2. 引入echarts
// 3. 使用echarts初始化div
// 4. 配置echarts配置项
// 5. 设置配置
export default {
  name: 'list',
  components: {
    UserEditDialog
  },
  data: function () {
    return {
      users: [],
      totals: 0,
      pageNo: 1,
      pageSize: 10,
      sn: '',
      name: '',
      ids: []
    }
  },
  methods: {
    initDiv () {
      let div = echarts.init(document.getElementById('dd'))
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
          }
        ]
      };
      div.setOption(option)
    },
    valueChange (value) {
      // 根据对象数组获取对象id的数组
      console.info(value)
      this.ids = value.map(user => user.id)
    },
    deletes () {
      let obj = {
        ids: this.ids
      }
      removeByIds(obj).then(res => {
        if (res.data) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          this.getUsers()
        }
      })
    },
    showUser (user) {
      this.$refs.userEdit.show(user)
    },
    deleteById (user) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let obj = {
          id: user.id
        }
        removeById(obj).then(res => {
          if (res.data) {
            this.$message({
              type: 'success',
              message: '删除成功'
            })
            this.getUsers()
          }
        })
      }).catch(() => {

      })
    },
    getUsers () {
      let obj = {
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        sn: this.sn,
        name: this.name
      }
      pageUserList(obj).then(res => {
        this.users = res.data.records
        this.totals = res.data.total
      })
    },
    handleCurrentChange (value) {
      console.info(value)
      this.pageNo = value
      // 重新发请求  请求的页码是value
      this.getUsers()
    },
    handleSizeChange (value) {
      this.pageSize = value
      this.getUsers()
    }
  },
  // 创建时  创建后   销毁
  created () {
    this.getUsers()
  },
  // 创建时 created早于mounted
  // mounted 使用的时候页面元素已经加载出来了
  // created没有
  mounted () {
    // 使用统计图的时候一定要在mounted里调用并设置
    this.initDiv()
  }
}
</script>

<style scoped>

</style>

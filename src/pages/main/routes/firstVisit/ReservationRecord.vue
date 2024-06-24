<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/review' }">初访管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/firstVisit/record' }">初审预约记录</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <el-card class="container">
      {{title}}
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'dutyManage',
  data () {
    return {
      title: '初访预约记录'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

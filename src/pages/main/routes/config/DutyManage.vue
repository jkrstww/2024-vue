<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">值班管理</el-breadcrumb-item>
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
      title: '值班管理'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

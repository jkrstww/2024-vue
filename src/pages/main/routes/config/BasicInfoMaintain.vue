<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/dutyManage' }">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/config/basicInfo' }">基本信息维护</el-breadcrumb-item>
        </el-breadcrumb>
        <el-tabs style="margin-left: 20px">
          <el-tab-pane label="学生管理" name="first">学生管理</el-tab-pane>
          <el-tab-pane label="咨询师管理" name="second">咨询师管理</el-tab-pane>
          <el-tab-pane label="初访员管理" name="third">初访员管理</el-tab-pane>
        </el-tabs>
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
      title: '基本信息维护'
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>

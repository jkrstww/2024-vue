<!--咨询安排记录（心理助理）-->
<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/appointmentReview' }">咨询管理</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/main/consultation/arrangementRecord' }">安排记录</el-breadcrumb-item>
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
  name: 'consultationArrangementRecord',
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

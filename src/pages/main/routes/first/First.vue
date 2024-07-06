<template>
  <div>
    <el-card class="crumbs-card">
      <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/main/first' }">首页</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </el-card>
    <div class="background-image">
<!--      <div class="centered-content">-->
<!--        <b>欢迎来到</b><br>四川大学心理咨询平台-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
      title: '逸一时误一世'
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  padding-top: 7vh;
  font-size: 3em;
}
.background-image {
  background: url('../../../../assets/images/second.png') no-repeat center center;
  background-size: auto;
  height: 87vh;
}
</style>

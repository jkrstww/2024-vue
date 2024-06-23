<template>
    <div>
        <el-card class="crumbs-card">
            <div class="crumbs">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/main/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/main/first' }">白名单列表</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </el-card>
        <el-card class="container">
            <baidu-map class="bm-view" :zoom="15" center="成都">
                <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
                <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
                <bm-map-type :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']" anchor="BMAP_ANCHOR_TOP_LEFT"></bm-map-type>
            </baidu-map>
        </el-card>
    </div>
</template>

<script>
export default {
  name: 'stat',
  methods: {
  },
  created () {
  },
  //  也表示页面刚加载   但是比created要靠后  这个里边能够获取页面的dom元素
  mounted () {
  }
}
</script>

<style scoped>
.bm-view{
    width: 1000px;
    height: 800px;
}
</style>

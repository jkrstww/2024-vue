<template>
  <div>
    <el-container>
      <el-header>Header</el-header>

      <el-main>
        <div id="echarts" style="width: 1000px; height: 400px">sss</div>
      </el-main>

      <el-footer>
        <el-button @click="downloadExcel">点击下载</el-button>
        <a :href="downloadPath" ref="downloadExcel"></a>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'ConsultTeacherExcel',
  data () {
    return {
      downloadPath: 'http://localhost:8088/api/file/downloadExcel'
    }
  },
  methods: {
    getData () {

    },
    downloadExcel () {
      this.$refs.downloadExcel.click()
    },
    getEcharts () {
      var chartDom = document.getElementById('echarts')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: 'World Population'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
          },
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      }

      option && myChart.setOption(option)
    }

  },
  created () {
  },
  mounted () {
    this.getEcharts()
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <el-container>
      <el-header>
        <p style="margin-left: 450px">咨询师数据汇总</p>
      </el-header>

      <el-main>
        <div id="echarts" style="width: 1000px; height: 400px">sss</div>
      </el-main>

      <el-footer>
        <el-button @click="downloadExcel" style="margin-left: 450px">点击下载</el-button>
        <a :href="downloadPath" ref="downloadExcel"></a>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {getConsultTimeEcharts} from '@api/api'

export default {
  name: 'ConsultTeacherExcel',
  data () {
    return {
      downloadPath: 'http://localhost:8088/api/file/downloadExcel',
      echartsData: {},
      mychart: null,
      option: null
    }
  },
  methods: {
    getData () {
      getConsultTimeEcharts().then(res => {
        this.echartsData = res.data
        console.log(this.echartsData)
        this.option.yAxis.data = this.echartsData.consultTeacher
        this.option.series[0].data = this.echartsData.times
        this.option.series[1].data = this.echartsData.sumTime
        this.myChart.setOption(this.option)
      })
    },
    downloadExcel () {
      this.$refs.downloadExcel.click()
    },
    getEcharts () {
      var chartDom = document.getElementById('echarts')
      this.myChart = echarts.init(chartDom)

      this.option = {
        title: {},
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
          data: this.echartsData.consultTeacher
        },
        series: [
          {
            name: '咨询次数',
            type: 'bar',
            data: this.echartsData.times
          },
          {
            name: '咨询时间',
            type: 'bar',
            data: this.echartsData.sumTime
          }
        ]
      }

      this.myChart.setOption(this.option)
    }

  },
  async created () {
    this.getData()
  },
  mounted () {
    this.getEcharts()
  },
  updated () {
    this.getData()
  }
}
</script>

<style scoped>

</style>

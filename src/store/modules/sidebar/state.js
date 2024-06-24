export default {
  sidebarMap: {
    1: {
      main: [
        {
          groupTitle: '分组1'
        },
        {
          path: '/main/first',
          icon: 'el-icon-goods',
          title: '一级菜单1'
        },
        {
          path: '/main/first',
          icon: 'el-icon-circle-plus',
          title: '哈哈哈哈哈'
        },
        {
          path: '/main/second',
          icon: 'el-icon-setting',
          title: '一级菜单2',
          group: 'second',
          children: [
            {
              path: '/main/second/second',
              icon: 'el-icon-video-camera-solid',
              title: '二级菜单'
            }
          ]
        }
      ]
    },
    2: {
      main: [
        {
          path: '/main/first',
          icon: 'el-icon-s-unfold',
          title: '中心管理'
        },
        {
          path: '/main/config',
          icon: 'el-icon-s-data',
          title: '数据管理',
          group: 'second',
          children: [
            {
              path: '/main/config/dutyManage',
              icon: 'el-icon-user-solid',
              title: '值班管理'
            },
            {
              path: '/main/config/timeConfig',
              icon: 'el-icon-alarm-clock',
              title: '基本时间配置'
            },
            {
              path: '/main/config/basicInfo',
              icon: 'el-icon-set-up',
              title: '基本信息维护'
            },
            {
              path: '/main/config/statistic',
              icon: 'el-icon-s-data',
              title: '统计分析'
            }
          ]
        },
        {
          path: '/main/firstVisit',
          icon: 'el-icon-price-tag',
          title: '初访管理',
          group: 'third',
          children: [
            {
              path: '/main/firstVisit/review',
              icon: 'el-icon-circle-check',
              title: '预约审核'
            },
            {
              path: '/main/firstVisit/record',
              icon: 'el-icon-s-order',
              title: '预约记录'
            }
          ]
        }
      ]
    }
  },
  sidebarTheme: {
    dark: {
      background: '#1f2c35',
      text: '#ffffff',
      activeText: '#ffffff'
    },
    light: {
      background: '#ffffff',
      text: '#000000',
      activeText: '#1890ff'
    }
  }
}

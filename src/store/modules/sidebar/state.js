export default {
  sidebarMap: {
    1: {
      main: [
        {
          groupTitle: '菜单'
        },
        {
          path: '/main/config/studentInfo',
          icon: 'el-icon-s-order',
          title: '修改个人信息'
        },
        {
          path: '/main/second',
          icon: 'el-icon-price-tag',
          title: '初访',
          group: 'second',
          children: [
            {
              path: '/main/firstVisit/appointment',
              icon: 'el-icon-circle-check',
              title: '初访预约'
            }
            /* {
              path: '/main/firstVisit/record',
              icon: 'el-icon-s-order',
              title: '预约记录'
            } */
          ]
        },
        {
          path: '/main/consultation',
          icon: 'el-icon-s-custom',
          title: '咨询',
          group: 'third',
          children: [
            {
              path: '/main/consultation/appointment',
              icon: 'el-icon-circle-check',
              title: '咨询预约'
            }
            /* {
              path: '/main/consultation/record',
              icon: 'el-icon-s-order',
              title: '预约记录'
            }, */
            // {
            //   path: '/main/firstVisit/record',
            //   icon: 'el-icon-s-claim',
            //   title: '咨询结果'
            // }
          ]
        }
      ]
    },
    2: {
      main: [
        {
          groupTitle: '菜单'
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
    },
    3: {
      main: [
        {
          groupTitle: '菜单'
        },
        {
          path: '/main/firstVisitor',
          icon: 'el-icon-s-order',
          title: '初访结论'
        }
      ]
    },
    4: {
      main: [
        {
          groupTitle: '菜单'
        },
        {
          path: '/main/consultation',
          icon: 'el-icon-user-solid',
          title: '咨询管理',
          group: 'second',
          children: [
            {
              path: '/main/consultation/addstatus',
              icon: 'el-icon-s-order',
              title: '添加状态'
            },
            {
              path: '/main/consultation/record',
              icon: 'el-icon-s-order',
              title: '咨询记录'
            },
            {
              path: '/main/consultation/additional',
              icon: 'el-icon-upload2',
              title: '追加时段'
            },
            {
              path: '/main/consultation/finalReport',
              icon: 'el-icon-circle-check',
              title: '结案报告'
            }
          ]
        }
      ]
    },
    5: {
      main: [
        {
          groupTitle: '菜单'
        },
        {
          path: '/main/consultation',
          icon: 'el-icon-user-solid',
          title: '咨询管理',
          group: 'second',
          children: [
            {
              path: '/main/consultation/appointmentReview',
              icon: 'el-icon-circle-check',
              title: '预约审核'
            },
            {
              path: '/main/consultation/arrangementRecord',
              icon: 'el-icon-s-order',
              title: '安排记录'
            }
          ]
        }
      ]
    }
  },
  sidebarTheme: {
    dark: {
      background: '#9E2A22',
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

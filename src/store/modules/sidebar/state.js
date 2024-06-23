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
          path: '/main/whiteList',
          icon: 'suncaper-menu-unfold',
          title: '用户管理'
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

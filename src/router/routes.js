const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/Login')
  }
]

// 一定是需要登陆访问的
const mainPage = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/main',
    name: 'main',
    component: () =>
      import(/* webpackChunkName: "Main" */ '../pages/main/Main'),
    children: [
      {
        path: 'first',
        name: 'first',
        component: () =>
            import(
              /* webpackChunkName: "Second" */ '../pages/main/routes/first/First'
            )
      },
      {
        path: 'second/second',
        name: 'second',
        component: () =>
            import(
              /* webpackChunkName: "First" */ '../pages/main/routes/second/Second'
            )
      },
      {
        path: 'config/dutyManage',
        name: 'dutyManage',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/config/DutyManage.vue'
          )
      },
      {
        path: 'config/timeConfig',
        name: 'timeConfig',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/config/TimeConfig.vue'
          )
      },
      {
        path: 'config/basicInfo',
        name: 'basicInfo',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/config/BasicInfoMaintain.vue'
          )
      },
      {
        path: 'config/statistic',
        name: 'Statistic',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/config/Statistic.vue'
          )
      },
      {
        path: 'firstVisit/review',
        name: 'review',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/firstVisit/AppointmentReview.vue'
          )
      },
      {
        path: 'firstVisit/record',
        name: 'record',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/firstVisit/ReservationRecord.vue'
          )
      },
      {
        path: 'whiteList',
        name: 'whiteList',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/whiteList/list'
          )
      }
    ]
  }
]

const errorPage = [
  {
    path: '/notFound',
    name: 'notFound',
    component: () =>
      import(/* webpackChunkName: "NotFound" */ '../pages/error/NotFound')
  },
  {
    path: '/forbidden',
    name: 'forbidden',
    component: () =>
      import(/* webpackChunkName: "Forbidden" */ '../pages/error/Forbidden')
  },
  {
    path: '/badGateway',
    name: 'badGateway',
    component: () =>
      import(/* webpackChunkName: "BadGateway" */ '../pages/error/BadGateway')
  },
  {
    path: '*',
    redirect: '/notFound'
  }
]
export default [...loginPage, ...mainPage, ...errorPage]

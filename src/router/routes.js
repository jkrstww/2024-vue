const loginPage = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "Login" */ '../pages/login/Login')
  }
]

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
        name: 'statistic',
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
        name: 'visitRecord',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/firstVisit/ReservationRecord.vue'
          )
      },
      {
        path: 'firstVisit/appointment',
        name: 'appointment',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/firstVisit/Appointment.vue'
          )
      },
      {
        path: 'config/studentInfo',
        name: 'studentInfo',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/config/StudentInfo.vue'
          )
      },
      {
        path: 'firstVisitor',
        name: 'firstVisitor',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/firstVisitor/Conclusion.vue'
          )
      },
      {
        path: 'consultation/appointmentReview',
        name: 'appointmentReview',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/AppointmentReview.vue'
          )
      },
      {
        path: 'consultation/appointment',
        name: 'appointment',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/Appointment.vue'
          )
      },
      {
        path: 'consultation/arrangementRecord',
        name: 'arrangementRecord',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/ArrangementRecord.vue'
          )
      },
      {
        path: 'consultation/additional',
        name: 'additional',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/Additional.vue'
          )
      },
      {
        path: 'consultation/finalReport',
        name: 'finalReport',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/FinalReport.vue'
          )
      },
      {
        path: 'consultation/record',
        name: 'record',
        component: () =>
          import(
            /* webpackChunkName: "First" */ '../pages/main/routes/consultation/Record.vue'
          )
      },
      {
        path: 'consultation/addstatus',
        name: 'addStatus',
        component: () =>
          import(
            '../pages/main/routes/consultation/AddStatus.vue'
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

export default {
  whiteList: ['/', 'notFound', 'login', 'forbidden', 'badGateway'],
  permissionMap: {
    1: {
      main: ['*']
    },
    2: {
      main: ['first', 'dutyManage', 'timeConfig', 'basicInfo', 'statistic', 'review', 'visitRecord']
    },
    3: {
      main: ['first', 'firstVisitor']
    },
    4: {
      main: ['first', 'additional', 'finalReport', 'record']
    },
    5: {
      main: ['appointmentReview', 'arrangementRecord', 'first']
    }
  }
}

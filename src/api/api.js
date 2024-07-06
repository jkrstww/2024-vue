import http from '@http/http'
// 登陆
export const login = data => http.POST('/api/whitelistSetting/login', data)

// 分页查询所有用户
export const pageUserList = data => http.GET('/api/whitelistSetting/pageList', data)

// 获取所有用户，无需分页
export const getUserList = data => http.GET('/api/whitelistSetting/getAll', data)

// 根据条件选取所有用户，无需分页
export const queryUserList = data => http.POST('/api/whitelistSetting/queryAll', data)

// 获取初访员与咨询师
export const pageTeacherList = data => http.POST('/api/whitelistSetting/teacherPageList', data)

// 修改用户
export const updateUser = data => http.POST('/api/whitelistSetting/updateById', data)
// 单个删除
export const removeById = data => http.GET('/api/whitelistSetting/deleteById', data)
export const deleteById = data => http.POST('/api/whitelistSetting/deleteById', data)

// 批量删除
export const removeByIds = data => http.POST('/api/whitelistSetting/deleteByIds', data)

export const register = data => http.POST('/api/whitelistSetting/register', data)

export const addUser = data => http.POST('/api/whitelistSetting/add', data)

export const getVisitRecords = data => http.POST('/api/visitRecord/getMyList', data)

// 学生按学号分页获取自己的预约记录
export const getVisitRecordsPage = data => http.POST('/api/visitRecord/getMyList', data)

// 学生按学号分页获取自己的已批准的预约记录
export const getVisitRecordsApprovedPage = data => http.POST('/api/visitRecord/getMyApprovedList', data)

// 学生预约申请
export const visitReserveRequest = data => http.POST('/api/visitRecord/reserveRequest', data)

// 删除初访记录
export const deleteVisitRecordById = data => http.POST('/api/visitRecord/cancleRecord', data)

// 获取结案报告
export const getReportPage = data => http.POST('/api/report/getReport', data)

// 下载结案报告
export const downloadReport = data => http.POST('/api/file/downloadReport', data)

// 分页查询初访结果
export const pageVisitList = data => http.GET('/api/visitRecord/visitPageList', data)

export const updateVisit = data => http.POST('/api/visitRecord/updateById', data)
// 分页查询咨询申请
export const pageConsultList = data => http.GET('/api/consultRequest/consultPageList', data)

export const updateConsult = data => http.POST('/api/consultRecord/updateById', data)

// export const pageVisitRequestList = data => http.GET('/api/visitRequest/visitRequestPageList', data)

export const updateVisitRequest = data => http.POST('/api/visitRecord/update', data)

// 获取咨询师咨询次数，时间的数据
export const getConsultTimeEcharts = data => http.POST('/api/consultRecord/getConsultTimeEcharts', data)

// 根据时间获取未完成的预约记录
export const getUnfinishedVisitRecordsByTime = data => http.POST('/api/visitRecord/getUnfinishedVisitRecordsByTime', data)

// 根据风险获取未完成的预约记录
export const getUnfinishedVisitRecordsByRisk = data => http.POST('/api/visitRecord/getUnfinishedVisitRecordsByRisk', data)

// 获取已批准的未完成（可修改）的预约记录
export const getAwaitUpdateVisitRecords = data => http.POST('/api/visitRecord/getAwaitUpdateVisitRecords', data)

// 拒绝预约申请
export const rejectVisitRequest = data => http.POST('/api/visitRecord/rejectVisitRequest', data)

// 根据id删除咨询记录
export const deleteConsultRecordById = data => http.POST('api/consultRecord/deleteConsultRecordById', data)

// 学生根据学号获取自己的咨询记录
export const getConsultRecordsPage = data => http.POST('api/consultRecord/getMyConsultRecords', data)

// 学生咨询预约
export const consultRequest = data => http.POST('api/consultRecord/consultRequest', data)

// 根据id获得学生信息
export const getStudentInfo = data => http.POST('api/student/getInfo', data)

// 根据sn获取学生信息
export const getStudentInfoBySn = data => http.POST('api/student/getInfoBySn', data)

// 修改学生信息
export const updateStudentInfo = data => http.POST('api/student/updateInfo', data)

// 获取待批准的所有咨询请求
export const getConsultRequest = data => http.POST('api/consultRecord/getRequest', data)

// 拒绝咨询申请
export const rejectConsult = data => http.POST('api/consultRecord/reject', data)

// 根据学号、姓名查询咨询记录(已批准)
export const queryConsultRecord = data => http.POST('api/consultRecord/queryPage', data)

// 根据条件查询初访记录
export const queryVisitRecord = data => http.POST('api/visitRecord/queryPage', data)

// 初访员根据条件查询初访记录
export const visitorQueryRecords = data => http.POST('api/visitRecord/visitorQueryRecords', data)

// 咨询员查看未添加咨询状态的记录
export const consultantCheckRecord = data => http.POST('api/consultRecord/consultantCheckRecord', data)

// 咨询员选取已添加咨询状态的记录
export const consultantQueryRecord = data => http.POST('api/consultRecord/consultantQueryRecord', data)

// 添加咨询记录的状态
export const addStatus = data => http.POST('api/consultRecord/addStatus', data)

// 根据实体类查找结案报告
export const queryReport = data => http.POST('api/report/queryReport', data)

// 获取未完成的咨询记录的数量
export const getRecordTimes = data => http.POST('api/report/recordTimes', data)

// 生成报告
export const generateReport = data => http.POST('api/report/generateReport', data)

export const getAddRequest = data => http.POST('api/addRequest/getList', data)

export const postAddRequest = data => http.POST('api/addRequest/addRequest', data)

export const addConsultRecord = data => http.POST('api/consultRecord/addRecord', data)

export const sendNotification = data => http.GET('/api/consultRecord/sendNotification', data)

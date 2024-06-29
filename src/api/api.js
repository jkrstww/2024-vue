import http from '@http/http'
// 登陆
export const login = data => http.POST('/api/whitelistSetting/login', data)

// 分页查询所有用户
export const pageUserList = data => http.GET('/api/whitelistSetting/pageList', data)
// 修改用户
export const updateUser = data => http.POST('/api/whitelistSetting/updateById', data)
// 单个删除
export const removeById = data => http.GET('/api/whitelistSetting/deleteById', data)
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

export const updateConsult = data => http.POST('/api/consultRequest/updateById', data)

export const pageVisitRequestList = data => http.GET('/api/visitRequest/visitRequestPageList', data)

export const updateVisitRequest = data => http.GET('/api/visitRequest/visitRequestPageList', data)

// 获取咨询师咨询次数，时间的数据
export const getConsultTimeEcharts = data => http.POST('/api/consultRecord/getConsultTimeEcharts', data)

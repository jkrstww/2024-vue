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

export const pageVisitList = data => http.GET('/api/visitRecord/visitPageList', data)

export const updateVisit = data => http.POST('/api/visitRecord/updateById', data)

// 学生预约申请
export const visitReserveRequest = data => http.POST('/api/visitRecord/reserveRequest', data)

// 删除初访记录
export const deleteVisitRecordById = data => http.POST('/api/visitRecord/cancleRecord', data)

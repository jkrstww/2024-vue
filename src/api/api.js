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
// 分页查询初访结果
export const pageVisitList = data => http.GET('/api/visitRecord/visitPageList', data)

export const updateVisit = data => http.POST('/api/visitRecord/updateById', data)
// 分页查询咨询申请
export const pageConsultList = data => http.GET('/api/consultRequest/consultPageList', data)

export const updateConsult = data => http.POST('/api/consultRequest/updateById', data)

export const pageVisitRequestList = data => http.GET('/api/visitRequest/visitRequestPageList', data)

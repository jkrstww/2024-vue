import http from '@http/http'
// 获取当前用户
export const _getUserInfo = (errMsg) => http.GET('./api/auth/userInfo', {}, errMsg)
// 分页查询用户
export const getUserList = obj => http.GET('./api/whitelistSetting/list', obj)
// 根据id删除  obj:  {id: 22}
export const removeById = obj => http.GET('./api/whitelistSetting/removeById', obj)
// 根据ids批量删除  obj:  {ids: [1,2,3]}
export const removeByIds = obj => http.POST('./api/whitelistSetting/removeByIds', obj)
// 白名单编辑
export const updateUser = obj => http.POST('./api/whitelistSetting/update', obj)
// 白名单统计
export const userStat = () => http.GET('./api/whitelistSetting/stat')

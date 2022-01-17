import {fetching, post} from "./Update"
import Admin from "./Admin"

// THAO TAC AUTH

// THAO TAC THONG TIN USER
export const addAUserApi = params => post('user/add', params)
export const updateAccountUserApi = params => post('user/update-account', params)
export const updateAUserApi = params => post('user/update', params)
export const toggerReportApi = params => post('user/togger-report', params)
export const promotionWinApi = params => post('user/promotion-win', params)
export const getDetailAUserApi = (token, id) => fetching('user/detail?id=', token, id)
export const getDashboard = token => fetching('dashboard', token)
export const getNotification = token => fetching('notification', token)

export const deleteAUserApi = params => post('delete', params)
export const getUsersApi = params => post('get', params)

// ADMIN
export const loginApi = params => Admin.post('login', params)
export const forgetPasswordApi = params => Admin.post('forgot-password', params)
export const resetPasswordApi = params => Admin.post('reset-password', params)
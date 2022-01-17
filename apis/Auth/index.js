import {fetching, get, post} from "./Update"
import Admin from "./Admin"

// THAO TAC AUTH

// THAO TAC THONG TIN USER
export const addAUserApi = params => post('add', params)
export const updateAccountUserApi = params => post('update-account', params)
export const updateAUserApi = params => post('update', params)
export const toggerReportApi = params => post('togger-report', params)
export const promotionWinApi = params => post('promotion-win', params)
export const getDetailAUserApi = params => get('detail', params)

export const deleteAUserApi = params => post('delete', params)
export const getUsersApi = params => post('get', params)

// ADMIN
export const loginApi = params => Admin.post('login', params)
export const forgetPasswordApi = params => Admin.post('forgot-password', params)
export const resetPasswordApi = params => Admin.post('reset-password', params)
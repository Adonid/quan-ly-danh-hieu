import Axios from "./Axios"
// import {fetching, get, post} from "./Update"

// THAO TAC AUTH

// THAO TAC THONG TIN USER
export const addAUserApi = params => Axios.post('add', params)
export const updateAccountUserApi = params => Axios.post('update-account', params)
export const updateAUserApi = params => Axios.post('update', params)
export const toggerReportApi = params => Axios.post('togger-report', params)
export const promotionWinApi = params => Axios.post('promotion-win', params)
export const getDetailAUserApi = params => Axios.get('detail', params)

export const deleteAUserApi = params => Axios.post('delete', params)
export const getUsersApi = params => Axios.post('get', params)
import Axios from "./Axios"
import Admin from "./Admin"
import {fetching, get, post} from "./Update"


// Load data address
export const getDistrictsApi = provinceId => Admin.get('address/districts', {provinceId})
export const getCommunesApi = districtId => Admin.get('address/communes', {districtId})

// THAO TAC AUTH
export const loginApi = params => Axios.post('login', params)

export const forgetPasswordApi = params => Axios.post('verify-email', params)

export const resetPasswordApi = params => Axios.post('reset-password', params)

export const registerApi = params => Axios.post('register', params)

// THAO TAC THONG TIN USER
export const updateUserInfoApi = params => post('update-basic-info', params)
export const updateBackgroundoApi = params => post('upload-background-image', params)
export const updateAvatarApi = params => post('upload-avatar-image', params)